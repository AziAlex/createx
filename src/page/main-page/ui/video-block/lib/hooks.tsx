import { useEffect, FC, useState } from 'react'
import { TMyVideo } from '@/page/main-page/ui/video-block'

interface IProps<T> {
  setVideoConfig: (value: (value: T) => T) => void
}

const UseResizeVideo: FC<IProps<TMyVideo>> = ({ setVideoConfig }) => {
  const [width, setWidth] = useState<number>(1920)

  useEffect(() => {
      const newVideoConfig = (width: number) => {
        switch (true) {
          case width > 1230:
            return { width: '1065', height: '600' }
          case width < 1230 && width > 700:
            return { width: '700', height: '420' }
          case width < 700 && width > 450:
            return { width: '450', height: '280' }
          case width < 450 && width > 320:
            return { width: '320', height: '200' }
          case width < 320:
            return { width: '280', height: '150' }
          default:
            return { width: '1065', height: '600' }
        }
      }

      const handleResize = () => {
        const config = newVideoConfig(width)
        setVideoConfig((prev) => ({ ...prev, ...config }))

        setWidth(window.innerWidth)
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [setVideoConfig, width],
  )

  return null
}

export default UseResizeVideo