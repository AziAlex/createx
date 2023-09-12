'use client'

import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

import Wrap from '@/shared/ui/wrap'
import Image from 'next/image'
import img from '/public/main-page/video-block.jpg'
import Icon from '@/shared/svg'
import UseResizeVideo from '@/page/main-page/ui/video-block/lib/hooks'

import cl from './style.module.scss'
import TitleBlock from '@/shared/ui/title-block'

const initConfig = {
  height: '600',
  width: '1065',
  playerVars: {
    autoplay: 1,
  },
}

export type TMyVideo = typeof initConfig

const VideoBlock = () => {
  const [videoWatch, setVideoWatch] = useState(false)
  const [videoConfig, setVideoConfig] = useState(initConfig)

  useEffect(() => {
    if (videoWatch) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [videoWatch])

  return (
    <>
      <Wrap>
        <div className={cl.videoBlock}>
          <TitleBlock
            title="We are Createx Construction Bureau"
            text="We are rightfully considered to be the best construction company in the USA."
          />

          <div className={cl.img}>
            <Image src={img} alt="video" width={1230} height={500} />
            <div className={cl.play} onClick={() => setVideoWatch(true)}>
              <Icon name="play" className={cl.play} />
            </div>
          </div>
        </div>
      </Wrap>

      {videoWatch && (
        <div className={cl.videoWrap} onClick={() => setVideoWatch(false)}>
          <YouTube videoId="cjs-sfPoWWU" opts={videoConfig} />
        </div>
      )}
      <UseResizeVideo setVideoConfig={setVideoConfig} />
    </>
  )
}

export default VideoBlock
