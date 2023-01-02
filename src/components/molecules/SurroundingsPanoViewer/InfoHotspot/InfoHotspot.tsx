import * as React from 'react'

import { InfoHotSpot } from '../SurroundingsPanoViewer.interface'

import {
  AnimatedCircle,
  InfoHotspotContainer,
  InfoHotspotContent,
  Pin,
  PinCircle,
  PinHitbox,
  ProjectPin,
  PanoHotspot,
} from './PanoramaViewer.style'

export const InfoHotspot: React.FunctionComponent<InfoHotSpot> = ({
  style = 'default',
  title,
  meta,
  projectSlug,
  ...props
}) => {
  const [open, setOpen] = React.useState(false)
  const lastEventRef = React.useRef<MouseEvent>()

  React.useLayoutEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (lastEventRef.current !== e) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [open])

  return (
    <PanoHotspot {...props} data-open={open}>
      {style === 'default' && (
        <React.Fragment>
          <InfoHotspotContainer>
            {!open && <AnimatedCircle />}
            <PinCircle />
            {!open && (
              <PinHitbox
                onClick={(e) => {
                  lastEventRef.current = e.nativeEvent
                  setOpen(true)
                }}
              />
            )}
            <InfoHotspotContent onClick={() => setOpen(false)}>
              {title}
            </InfoHotspotContent>
            <Pin />
          </InfoHotspotContainer>
        </React.Fragment>
      )}
      {style === 'project' && (
        <ProjectPin color={meta?.color}>
          <img
            src={`${import.meta.env.BASE_URL}/${projectSlug}/logo.png`}
            alt="logo"
          />
        </ProjectPin>
      )}
    </PanoHotspot>
  )
}
