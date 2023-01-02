import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { PanoSceneContext } from './PanoViewer.context'
import { PanoHotspotProps } from './PanoViewer.interface'

export const PanoHotspot: React.FunctionComponent<PanoHotspotProps> = (
  props
) => {
  const { children, pitch, yaw, className, ...rest } = props

  const scene = React.useContext(PanoSceneContext)
  const hotspotContainer = scene && scene.hotspotContainer()

  const hotspot = React.useMemo(() => {
    if (!hotspotContainer) {
      return null
    }
    const element = document.createElement('div')
    if (className) {
      element.className = className
    }

    return hotspotContainer.createHotspot(element)
  }, [className, hotspotContainer])

  hotspot && hotspot.setPosition({ pitch, yaw })

  React.useLayoutEffect(() => {
    // set div attributes if needed
    Object.entries(rest).map(([name, value]) =>
      hotspot?.domElement().setAttribute(name, value as string)
    )
  }, [hotspot, rest])

  React.useEffect(() => {
    if (hotspot) {
      return () => {
        try {
          hotspotContainer?.destroyHotspot(hotspot)
        } catch (_err) {
          /*
           * Marzipano is not safe, and if scene.destroy or hotspotContainer.destroy is
           * called before this, it will crash (which can happen in some cases due to react
           * components mount/unmout not being synchronous)
           */
        }
      }
    }
  }, [hotspotContainer, hotspot])

  if (!scene || !hotspot) {
    return null
  }

  return ReactDOM.createPortal(children, hotspot.domElement())
}
