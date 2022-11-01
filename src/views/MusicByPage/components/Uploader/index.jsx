import { CustomerServiceOutlined } from '@ant-design/icons';
import React, {useRef} from 'react';
import "./index.css"

/**
 * Uploader
 *
 * The user must provide a suitable function to
 * handle the files uploaded
 *
 * @author by.
 */
export default function Uploader(props)   {

    const onChange = props.onChange

    const inputRef = useRef();

    const doOnChange = () => {
        const currentFile = inputRef.current.files[0]
        onChange(currentFile)
    }

    return(
        <div className="uploader">
            <div className="inner-box">
                <input className = "uploader-input" type="file" ref={inputRef} onChange = {doOnChange} name="Upload here"/>
            </div>
        </div>
    );
}

