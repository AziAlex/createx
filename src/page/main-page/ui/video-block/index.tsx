'use client'

import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

import Wrap from '@/shared/ui/wrap'
import Image from 'next/image'
import img from '/public/main-page/video-block.jpg'
import Icon from '@/shared/svg'

import cl from './style.module.scss'
import { useResizeVideo } from '@/page/main-page/ui/video-block/lib/hooks'

const VideoBlock = () => {
  const [videoWatch, setVideoWatch] = useState<boolean>(false)
  const [videoConfig, setVideoConfig] = useState({
    height: '600',
    width: '1065',
    playerVars: {
      autoplay: 1,
    },
  })

  useEffect(() => {
    if (videoWatch) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [videoWatch])

  useEffect(() => {
    useResizeVideo(setVideoConfig, videoConfig)

    window.addEventListener('resize', () => {
      useResizeVideo(setVideoConfig, videoConfig)
    })

    return () => {
      window.removeEventListener('resize', () => {
        useResizeVideo(setVideoConfig, videoConfig)
      })
    }
  }, [])

  return (
    <>
      <Wrap>
        <div className={cl.videoBlock}>
          <h2>We are Createx Construction Bureau</h2>
          <p>We are rightfully considered to be the best construction company in the USA.</p>
          <div className={cl.img}>
            <Image src={img} alt='video' width={1230} height={500} />
            <div className={cl.play} onClick={() => setVideoWatch(true)}>
              <Icon name='play' className={cl.play} />
            </div>
          </div>
        </div>
      </Wrap>
      {videoWatch && (
        <div
          className={cl.videoWrap}
          onClick={() => setVideoWatch(false)}
        >
          <YouTube
            videoId='cjs-sfPoWWU'
            opts={videoConfig}
          />
        </div>
      )}
    </>
  )
}

export default VideoBlock