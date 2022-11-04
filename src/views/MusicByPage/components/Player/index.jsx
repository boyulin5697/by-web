import React, {useState, useRef, useEffect, useCallback} from 'react';
import ProgressBar from "../PrograssBar";
import './index.css'
import {current} from "@reduxjs/toolkit";

/**
 * Player
 * @author by.
 */
export default function Player(props) {

    const {currentMusic, volume, informJump} = props;

    const audio = useRef();
    const currentTime = useRef({value:0})

    //convert the uploaded music into src
    const getCurrentMusic = () => {
        let src = currentMusic.url
        console.log("getting music at" + src)
        return src;
    }

    //when music terminate
    const end = () => {
        informJump();
    }

    const updateTime = () => {
        currentTime.current.value = audio.current.currentTime
    }

    return (
        <div className="player">
            <audio
                className = "audio-player"
                src={getCurrentMusic()} ref={audio} onEnded={end}
                   onTimeUpdate={updateTime}
                   controls={true}
            ></audio>
            <div className="wave-form"></div>
        </div>
    )
}
