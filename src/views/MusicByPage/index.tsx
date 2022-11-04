import React, {useEffect, useState} from 'react';
import { Slider } from 'antd';
import './index.css';
import 'antd/dist/antd.min.css';
import Uploader from "./components/Uploader";
import Player from "./components/Player";
import CommonList, {ListData} from "./components/CommonList";

/**
 * app.tsx
 *
 * @author by.
 * @date 2022/10/25
 *
 */
export default function MusicByPage() {
  //the general music file to be modified
  //The music world be consisted with a group of musics
  //The length of the list would define how the system works.
  const [musicList,setMusicList] = useState<any[]>([])
  //current music
  const [order, setOrder] = useState<number>(0)
  //music volume
  const [volume, setVolume] = useState<number>(70)
  //music pitch
  const [pitch, setPitch] = useState<number>();


  useEffect(() => {
    console.log(musicList)
  },[musicList])

  useEffect(() => {

  },[pitch])

  //do after uploaded
  function onUploaded(files:any){
    let nextMusicList = Array.from(musicList)
    nextMusicList.push(files)
    setMusicList(nextMusicList)
  }

  function getPlayData():ListData[]{
    const lData:ListData[] = [];
    if(musicList.length==0){
      lData.push({
        content:'Waiting for your music',
        title:"Please Upload!",
        current:true,
        pos:0
      })
      return lData
    }else{
      return musicList.map((value,index) => {
        return {
          content:"",
          title:value.name,
          pos:index,
          current:index === order
        }
      })
    }
  }

  //after playing, inform the main page to change current music
  const informJump = () => {
    let toBeSetOrder = order+1
    if(toBeSetOrder>=musicList.length){
      setOrder(0)
    }else {
      setOrder(order + 1)
    }
  }

  //get the file of current music
  const getCurrentMusic = () => {
    let currentMusic = musicList[order]
    currentMusic.url = URL.createObjectURL(currentMusic)
    return currentMusic
  }

  //if the list has changed
  const onListChange = (pos:number) => {
    setOrder(pos)
  }

  return (
    <div className="App">
      <div className="general-canvas">
        <div className="wave-monitor">
          {
            musicList.length==0?undefined: <Player currentMusic={getCurrentMusic()} informJump = {informJump}/>
          }
        </div>
        <div className= "pitch-zone">
          <p>pitch</p>
          <Slider defaultValue={pitch} onChange={(value) => {setPitch(value)}}></Slider>
        </div>
        <div className= "music-info">
          <p>music List</p>
          <CommonList data = {getPlayData()} modifyCurrent = {onListChange}/>
        </div>
        <div className="upload-zone">
          <p>upload your musics</p>
          <Uploader onChange = {onUploaded}/>
        </div>
        <div className="volume-zone">
          <p>adjust volume</p>
          <Slider onChange={(value) => {setVolume(value)}} defaultValue = {volume} range ={false} dots = {false} min = {0} max = {100} step = {20}/>
        </div>
        <div className="play-list">
        </div>
        <div className="play-zone"></div>
        <div className="note-zone"></div>
      </div>
    </div>
  );
}
