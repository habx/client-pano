export interface PanoLevel {
  tileSize: number
  size: number
  fallbackOnly?: boolean
}
export interface PanoScene {
  baseUrl?: string | undefined
  urlFunction?: string | undefined
  cubeMapPreviewUrl?: string
  faceSize: number
  levels: PanoLevel[]
}

export interface PanoPosition {
  pitch: number
  yaw: number
}

export interface PanoViewParameters extends Partial<PanoPosition> {
  fov?: number
  faceSize: number
}

export interface PanoSourceParams {
  baseUrl?: string | undefined
  urlFunction?: string | undefined
  cubeMapPreviewUrl?: string | undefined
}
