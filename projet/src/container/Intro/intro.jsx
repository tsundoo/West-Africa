import React, { useRef, useState} from 'react'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'
import './intro.css'
import { video } from '../../constants'

const Intro = () => {

    const vidRef = useRef( null );
    const [ playVideo, setPlayVideo ] = useState( false );

    const handleVideo = () => {
        setPlayVideo( !playVideo );
        if( playVideo ) {
            vidRef.current.play();
        } else {
            vidRef.current.pause();
        }
    }

    return (
        // main container of the video
        <div className="app__video"> 
            <video 
            src={video}
            ref={vidRef}
            type='video/mp4' 
            loop
            controls={false}
            muted 
            />

            <div className='app__video-overlay flex__center'>
                <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
                    { playVideo ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
                </div>
            </div>    
        </div>
    )
}

export default Intro