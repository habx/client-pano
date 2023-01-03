import { orderBy } from 'lodash'
import * as React from 'react'

import { PanoViewer, PanoViewerState } from '@/components/atoms/PanoViewer'

import { InfoHotspot } from './InfoHotspot'
import {
  SurroundingsPanoViewerProps,
  PanoramaManifest,
} from './SurroundingsPanoViewer.interface'

export const SurroundingsPanoViewer = React.forwardRef<
  PanoViewerState,
  SurroundingsPanoViewerProps
>(({ manifest, onReady, projectSlug, ...props }, ref) => {
  const { infoHotspots, sceneData } = manifest as PanoramaManifest

  React.useEffect(() => {
    if (onReady) {
      onReady(true)
    }
  }, [onReady])

  const initialView = React.useMemo(
    () => infoHotspots?.find((infoHotspot) => !!infoHotspot.meta?.projectLogo),
    [infoHotspots]
  )

  return (
    <PanoViewer
      projectSlug={projectSlug}
      autorotate={false}
      {...props}
      initialView={initialView}
      sceneData={sceneData}
      ref={ref}
    >
      {orderBy(infoHotspots, 'pitch').map((infoHotspot) => (
        <InfoHotspot
          projectSlug={projectSlug}
          key={`${infoHotspot.pitch}-${infoHotspot.yaw}`}
          {...infoHotspot}
        />
      ))}
    </PanoViewer>
  )
})
