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
  const [volume, setVolume] = useState(0)
  //music speed
  const [speed, setSpeed] = useState(1)
  //music pitch
  const [pitch, setPitch] = useState();

  useEffect(() => {
    console.log(musicList)
  },[musicList])

  useEffect(() => {

  },[speed])

  useEffect(() => {

  },[pitch])

  //do after uploaded
  function onUploaded(files:any){
    console.log(files)
    let nextMusicList = Array.from(musicList)
    nextMusicList.push(files)
    setMusicList(nextMusicList)
  }

  function getPlayData():ListData[]{
    const lData:ListData[] = [];
    if(musicList.length==0){
      lData.push({
        content:'1',
        title:"2"
      })
      return lData
    }else{
      return musicList.map((value) => {
        return {
          content:"",
          title:value.name
        }
      })
    }
  }

  const informJump = () => {
    setOrder(order+1)
  }

  return (
    <div className="App">
      <div className="general-canvas">
        <div className="wave-monitor">

        </div>
        <div className= "pitch-zone">

        </div>
        <div className= "speed-zone">

        </div>
        <div className= "music-info">
          <div className="">
            {
              musicList.length==0?undefined: <Player currentMusic={musicList[0]} volume={volume} informJump = {informJump}/>
            }
          </div>
        </div>
        <div className="upload-zone">
          <Uploader onChange = {onUploaded}/>
        </div>
        <div className="volume-zone">
          <p>adjust volume</p>
          <Slider onChange={(value) => {setVolume(value)}} defaultValue = {volume} range ={false} dots = {false} min = {0} max = {100} step = {20}/>
        </div>
        <div className="play-list">
          <p>music List</p>
          <CommonList data = {getPlayData()}/>
        </div>
        <div className="play-zone"></div>
        <div className="note-zone"></div>
      </div>
    </div>
  );
}
