import React, {useState, useRef, useEffect} from 'react';



/**
 * Player
 * @author by.
 */
const Player = (props) => {

    const {currentMusic, volume, informJump}= props;

    const audio = useRef();
    const [readyPlay, setReadyPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    //control volume
    useEffect(() => {
        audio.current.volume = volume/100;
    }, [volume])

    //convert the uploaded music into src
    const getCurrentMusic = () => {
        let src = URL.createObjectURL(currentMusic)
        console.log("getting music at" + src)
        return src;
    }

    //when music ready
    const ready = () => {
        setReadyPlay(true)
    }

    //play the music
    const play = async() => {
        if(readyPlay){
            try{
                await audio.current.play()
                setIsPlaying(true)

            }catch (error){
                console.log(error)
                setIsPlaying(false)
            }
        }
    }

    //pause the music
    const pause = () => {
        audio.current.pause();
        setIsPlaying(false);
    }

    //when music terminate
    const end = () => {
        informJump();
        setIsPlaying(false);
    }


    const updateTime = () => {

    }

    return (
        <div className="Player">
            <audio src = {getCurrentMusic()} ref = {audio} onCanPlay={ready} onEnded={end} onTimeUpdate={updateTime}></audio>
            <div className="wave-form"></div>
            <div className="progress-bar"></div>
            <div className={isPlaying?"button-play":"button-stop"}></div>
        </div>
    );
};

export default Player;