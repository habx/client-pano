import * as React from 'react'

import { useMarzipano } from '@/hooks/useMarzipano'

import { PanoSceneContext, PanoSceneDataContext } from './PanoViewer.context'
import {
  LookToHandler,
  PanoViewerProps,
  PanoViewerState,
} from './PanoViewer.interface'

export const PanoViewer = React.forwardRef<PanoViewerState, PanoViewerProps>(
  (props, stateRef) => {
    const {
      sceneData,
      onViewChange,
      onLoading,
      loadTimeout = 5000,
      fov = 80,
      onZoomHandlerChange,
      onLookToHandlerChange,
      autorotate = true,
      viewerOptions,
      initialView,
      projectSlug,
    } = props

    const initialViewParameters = React.useMemo(
      () => ({
        pitch: 0,
        yaw: 0,
        ...initialView,
        fov: (fov * Math.PI) / 180,
        faceSize: sceneData.faceSize,
      }),
    [fov, sceneData.faceSize, props.viewId] // eslint-disable-line
    )

    const { ref, scene, control } = useMarzipano({
      sceneData,
      initialViewParameters,
      autorotate,
      viewerOptions,
      projectSlug,
    })

    React.useEffect(() => {
      if (!control || !onZoomHandlerChange) {
        return
      }

      const onZoomIn = () => control.zoomIn()
      const onZoomOut = () => control.zoomOut()

      const zoomHandler = {
        onZoomIn,
        onZoomOut,
      }

      onZoomHandlerChange(zoomHandler)
    }, [onZoomHandlerChange, control])

    React.useEffect(() => {
      if (!scene) {
        return
      }

      const lookTo: LookToHandler = (pitch: number, yaw: number, options) => {
        scene.lookTo({ pitch, yaw }, options)
      }

      onLookToHandlerChange?.(lookTo)
    }, [scene, onLookToHandlerChange])

    const onViewChangeRef = React.useRef(onViewChange)
    onViewChangeRef.current = onViewChange
    React.useEffect(() => {
      if (!scene) {
        return
      }

      const stage = scene.viewer().stage()

      const viewChangeHandler = () => {
        const view = scene.view()

        const pitch = view.pitch()
        const yaw = view.yaw()

        onViewChangeRef.current?.({
          pitch,
          yaw,
        })
      }
      scene.addEventListener('viewChange', viewChangeHandler)
      viewChangeHandler()

      const startedLoading = Date.now()

      const renderCompleteHandler = (stable: boolean) => {
        const dT = Date.now() - startedLoading

        if (!stable && dT < loadTimeout) {
          return
        }

        stage.removeEventListener('renderComplete', renderCompleteHandler)
        onLoading && onLoading(false)
      }

      onLoading && onLoading(true)

      stage.addEventListener('renderComplete', renderCompleteHandler)

      return () => {
        stage.removeEventListener('renderComplete', renderCompleteHandler)
        scene.removeEventListener('viewChange', viewChangeHandler)
      }
  }, [scene]) // eslint-disable-line

    React.useImperativeHandle(stateRef, () => ({
      zoomHandler: {
        onZoomIn: () => control.zoomIn(),
        onZoomOut: () => control.zoomOut(),
      },
      lookToHandler: (pitch: number, yaw: number, options) => {
        scene?.lookTo({ pitch, yaw }, options)
      },
      scene,
    }))

    return (
      <PanoSceneDataContext.Provider value={sceneData}>
        <PanoSceneContext.Provider value={scene}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
            ref={ref}
          >
            {scene && props.children}
          </div>
        </PanoSceneContext.Provider>
      </PanoSceneDataContext.Provider>
    )
  }
)
