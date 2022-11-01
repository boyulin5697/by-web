/**
 * Wave monitor component
 * @author by.
 */
import {useEffect, useRef} from "react";

export default function WaveMonitor(props:any){

    let instance

    const wave_canvas = useRef(null)

    useEffect(() => {
        instance = wave_canvas.current

    },[props])

    return(
        <div className={"wave-monitor"}>
            <canvas ref={wave_canvas}>

            </canvas>
        </div>
    )


}
