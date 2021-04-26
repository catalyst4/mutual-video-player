import React, { useState } from 'react'
import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/solid'

const VideoPlayer = ({ src, autoPlay, loop, title }) => {

    const [muted, setMuted] = useState(true)

    return (
        <div className="relative shadow-xl">
          <video 
            src={src}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
          />
          <div className="absolute flex items-end top-0 left-0 w-full h-full"> 
            <div style={{height: '80px'}} className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent"></div>
            
            <div className="absolute w-full h-full bottom-0 px-4 pb-4 sm:pb-6 sm:px-6 md:pb-8 md:px-8 lg:pb-10 lg:px-10 xl:pb-12 xl:px-12"> 
              <div className="w-full h-full flex justify-between items-end">
                  <div className="sm:flex flex-column sm:flex-row items-center shadow">
                    <Title title={title} />
                  </div>
                  <div>
                    <Volume muted={muted} setMuted={() => setMuted(!muted)} />
                  </div>     
              </div>
            </div>

          </div>
        </div>
    )
}

const Title = ({ title }) => {
    return (
        <>
            <span className="font-normal text-xs md:text-sm lg:text-base xl:text-lg sm:pr-4 md:pr-6 lg:pr-8 pb-2 sm:pb-0">Now playing:</span>
            <h3 className="font-normal text-base md:text-lg lg:text-2xl xl:text-3xl">{title}</h3>
        </>
    )
}

const Volume = ({ muted, setMuted }) => {
    return (
        <div className="w-5 lg:w-8 cursor-pointer">
            {muted ? 
                <VolumeOffIcon color="white" onClick={() => setMuted(false)} /> : 
                <VolumeUpIcon color="white" onClick={() => setMuted(true)} />
            }
        </div>
    )
}

export { VideoPlayer }