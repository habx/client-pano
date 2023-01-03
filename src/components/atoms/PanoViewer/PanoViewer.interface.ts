import { Scene, ViewerOptions } from 'marzipano'
import * as React from 'react'

import {
  PanoPosition,
  PanoScene,
} from '@/hooks/useMarzipano/useMarzipano.interface'

export interface ZoomHandler {
  onZoomIn: () => void
  onZoomOut: () => void
}

export type LookToHandlerOptions = {
  ease?: Function
  controlsInterrupt?: number
  transitionDuration?: number
  closest?: number
}

export type LookToHandler = (
  pitch: number,
  yaw: number,
  options?: LookToHandlerOptions
) => void

export interface PanoViewerState {
  zoomHandler: ZoomHandler
  lookToHandler: LookToHandler
  scene: Scene | null
}

export interface PanoViewerProps {
  /**
   * Used to reset camera view
   */
  viewId?: string | null
  sceneData: PanoScene
  projectSlug: string
  children?: React.ReactNode
  loadTimeout?: number
  fov?: number
  autorotate?: boolean
  onZoomHandlerChange?: (zoomHandler: ZoomHandler) => void
  onLookToHandlerChange?: (lookTo: LookToHandler) => void
  onLoading?: (loading: boolean) => void
  onFinishLoading?: (roomId: string, type: string, loading: boolean) => void
  onViewChange?: (coords: { pitch: number; yaw: number }) => void
  viewerOptions?: Partial<ViewerOptions>
  initialView?: {
    pitch: number
    yaw: number
  }
}

export interface PanoLayerProps {
  baseUrl?: string
  urlFunction?: string
  cubeMapPreviewUrl?: string
  geometry?: 'equirectangular' | 'cube'
  loadTimeout?: number
  maxErrors?: number
  onLoading?: (loading: boolean) => void
  onError?: (err: Error) => void
}

export interface PanoHotspotProps extends PanoPosition {
  children?: React.ReactNode
  className?: string
}
