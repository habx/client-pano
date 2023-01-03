import { PanoViewerProps } from '@/components/atoms/PanoViewer'

export interface InfoHotSpot {
  yaw: number
  pitch: number
  title: string
  text?: string
  style?: 'default' | 'project'
  projectSlug?: string
  meta?: {
    color?: string
    projectLogo?: string
  }
}

export interface PanoramaManifest extends PanoViewerProps {
  infoHotspots?: InfoHotSpot[]
}

export interface SurroundingsPanoViewerProps
  extends Omit<PanoViewerProps, 'sceneData'> {
  onReady?: (isReady: boolean) => void
  manifest: PanoramaManifest
}
