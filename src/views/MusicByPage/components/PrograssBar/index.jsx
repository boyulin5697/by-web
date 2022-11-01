import React, {useState, useRef, useEffect, useImperativeHandle} from 'react';
import BScroll from '@better-scroll/core';
import Scrollbar from '@better-scroll/scroll-bar';
import MouseWheel from "@better-scroll/mouse-wheel";


/**
 * music progress bar
 *
 * @author by.
 */

BScroll.use(Scrollbar)
BScroll.use(MouseWheel)

const ProgressBar = (props, ref) => {

    const { disrection, onScroll, refresh } = props
    const [ bScroll, setBScroll ] = useState()
    const scrollContainerRef = useRef()

    useEffect(() => {
        const scroll = new BScroll(scrollContainerRef.current, {
            disrection,
            scrollY:true,
            probeType:3,
            mouseWheel:true,
            scrollbar:true
        });

        setBScroll(scroll)

        return() => {
            setBScroll(null)
        }
    },[])

    useEffect(() => {
        if(!bScroll || !onScroll) return;
        bScroll.on('scroll', scroll => {
            onScroll(scroll)
        })
        return () => {
            bScroll.off('scroll')
        }
    },[onScroll, bScroll])

    useEffect(() => {
        if(refresh&&bScroll){
            bScroll.refresh();
        }
    })

    useImperativeHandle(ref, () => ({
        refresh(){
            if(bScroll){
                bScroll.refresh()
                bScroll.scrollTo(0,0)
            }
        },
        getBScroll(){
            if(bScroll){
                return bScroll;
            }
        }
    }))
    return (
        <div ref = {scrollContainerRef}>
            {props.children}
        </div>
    );
};

export default ProgressBar;