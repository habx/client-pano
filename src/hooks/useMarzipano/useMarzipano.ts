import { merge } from 'lodash'
import Marzipano, { ViewerOptions, Viewer } from 'marzipano'
import * as React from 'react'

import DirectControlMethod from './DirectControlMethod'
import {
  PanoLevel,
  PanoScene,
  PanoSourceParams,
  PanoViewParameters,
} from './useMarzipano.interface'

const useMarzipanoGeometry = (levels: PanoLevel[]) =>
  React.useMemo(() => new Marzipano.CubeGeometry(levels), [levels])

const makeMarzipanoSource = (sourceData: PanoSourceParams = {}) => {
  const {
    baseUrl = '',
    urlFunction = '{baseUrl}/{z}/{f}/{y}/{x}.jpg',
    cubeMapPreviewUrl = '{baseUrl}/preview.jpg',
  } = sourceData

  const sourceUrl = urlFunction.replace('{baseUrl}', baseUrl)

  return Marzipano.ImageUrlSource.fromString(
    sourceUrl,
    cubeMapPreviewUrl
      ? {
          cubeMapPreviewUrl: cubeMapPreviewUrl.replace('{baseUrl}', baseUrl),
          retryDelay: 60 * 1000,
        }
      : undefined
  )
}

const useMarzipanoSource = (sourceData: PanoSourceParams = {}) => {
  const { baseUrl, urlFunction, cubeMapPreviewUrl } = sourceData
  return React.useMemo(
    () => makeMarzipanoSource({ baseUrl, urlFunction, cubeMapPreviewUrl }),
    [baseUrl, urlFunction, cubeMapPreviewUrl]
  )
}

export const useDirectControlMethod = (viewer: Viewer | null) =>
  React.useMemo(() => {
    if (!viewer) {
      return
    }
    // @ts-ignore
    const controlMethod = new DirectControlMethod()
    const controls = viewer.controls()

    controls.registerMethod('directControl', controlMethod)
    controls.enableMethod('directControl')

    return controlMethod
  }, [viewer])

const makeMarzipanoView = (viewParameters: PanoViewParameters) => {
  const {
    yaw = 0,
    pitch = 0,
    fov = (90 / 180) * Math.PI,
    faceSize,
  } = viewParameters

  const hFov = fov
  const vFov = 2 * Math.atan((Math.tan(hFov / 2) * 9) / 16)

  const limiter = Marzipano.RectilinearView.limit.traditional(
    faceSize,
    vFov,
    hFov
  )

  const view = new Marzipano.RectilinearView({ yaw, pitch, fov }, limiter)
  view.setParameters({ yaw, pitch, fov })

  return view
}

const useMarzipanoView = (initialViewParameters: PanoViewParameters) => {
  return React.useMemo(
    () => makeMarzipanoView(initialViewParameters),
    [initialViewParameters]
  )
}

const useAutorotate = () =>
  React.useMemo(
    () =>
      Marzipano.autorotate({
        yawSpeed: 0.03,
        targetPitch: 0,
        targetFov: Math.PI / 2,
      }),
    []
  )

interface UseMarzipanoParams {
  sceneData: PanoScene
  initialViewParameters: PanoViewParameters
  autorotate?: boolean
  viewerOptions?: Partial<ViewerOptions>
}

const DEFAULT_VIEWER_OPTIONS: ViewerOptions = {
  controls: {
    mouseViewMode: 'drag',
  },
  cursors: { drag: { active: 'grabbing', inactive: 'grab' } },
}

export const useMarzipanoViewer = (
  panoElement: HTMLDivElement | null,
  viewerOptions?: Partial<ViewerOptions>
) =>
  React.useMemo(
    () =>
      panoElement &&
      new Marzipano.Viewer(
        panoElement,
        merge({}, DEFAULT_VIEWER_OPTIONS, viewerOptions)
      ),
    [panoElement, viewerOptions]
  )

export const useMarzipano = (params: UseMarzipanoParams) => {
  const {
    sceneData,
    initialViewParameters,
    autorotate: enableAutorotate = true,
    viewerOptions,
  } = params

  const ref = React.useRef<HTMLDivElement | null>(null)

  const [ready, setReady] = React.useState<boolean>(false)

  const viewer = useMarzipanoViewer(ref.current, viewerOptions)

  const source = useMarzipanoSource(sceneData)
  const geometry = useMarzipanoGeometry(sceneData.levels)

  const control = useDirectControlMethod(viewer)

  const view = useMarzipanoView(initialViewParameters)

  const autorotate = useAutorotate()

  const scene = React.useMemo(() => {
    if (!ready || !viewer) {
      return null
    }

    const previousScene = viewer.scene()

    const newScene = viewer.createScene({
      source,
      geometry,
      view,
      pinFirstLevel: true,
    })

    viewer.switchScene(
      newScene,
      {
        transitionDuration: 500,
      },
      () => {
        if (previousScene) {
          viewer.destroyScene(previousScene)
        }
      }
    )

    return newScene
  }, [viewer, source, geometry, view, ready])

  React.useEffect(() => {
    if (viewer) {
      if (enableAutorotate) {
        viewer.startMovement(autorotate)
        viewer.setIdleMovement(10_000, autorotate)
      } else {
        viewer.stopMovement()
        viewer.setIdleMovement(Infinity)
      }
    }
  }, [viewer, enableAutorotate, autorotate])

  if (!ready) {
    setTimeout(() => setReady(!!ref.current), 10)
  }
  return { scene, control, ref, ready }
}
