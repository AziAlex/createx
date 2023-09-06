export const useResizeVideo = (setVideoConfig: (videoConfig: any) => void, videoConfig: any) => {
  const width = document.body.clientWidth

  switch (true) {
    case width > 1230:
      setVideoConfig({
        ...videoConfig, width: '1065', height: '600',
      })
      break
    case width < 1230 && width > 700:
      setVideoConfig({
        ...videoConfig, width: '700', height: '420',
      })
      break
    case width < 700 && width > 450:
      setVideoConfig({
        ...videoConfig, width: '450', height: '280',
      })
      break
    case width < 450 && width > 320:
      setVideoConfig({
        ...videoConfig, width: '320', height: '200',
      })
      break
    case width < 320:
      setVideoConfig({
        ...videoConfig, width: '280', height: '150',
      })
  }
}