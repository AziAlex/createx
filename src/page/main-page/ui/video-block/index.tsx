import React from 'react'

import Wrap from '@/shared/ui/wrap'
import Image from 'next/image'
import img from '/public/main-page/video-block.jpg'

import cl from './style.module.scss'

const VideoBlock = () => {
  return (
    <Wrap>
      <div className={cl.videoBlock}>
        <h2>We are Createx Construction Bureau</h2>
        <p>We are rightfully considered to be the best construction company in the USA.</p>
        <div className={cl.img}>
          <Image src={img} alt='video' width={1230} height={500} />
        </div>
      </div>
    </Wrap>
  )
}

export default VideoBlock