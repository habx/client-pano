import styled from 'styled-components'

import { Card, theme } from '@habx/ui-core'

import { PanoHotspot as BasePanoHotspot } from '@/components/atoms/PanoViewer'

export const InfoHotspotContent = styled(Card)`
  position: absolute;
  top: 0;
  padding: 12px 24px;
  white-space: nowrap;
  transform: translateX(-50%) translateY(-25%);
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  transition: all ease-in-out 200ms, color 0ms;
  font-size: 16px;
`

export const PinCircle = styled.div`
  height: 12px;
  width: 12px;
  background: #fff;
  border-radius: 100%;
  transform: translateX(-50%);
  transition: all ease-in-out 200ms;
`

export const PinHitbox = styled.div`
  position: absolute;
  height: 48px;
  width: 48px;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
`

export const AnimatedCircle = styled.div`
  height: 12px;
  width: 12px;
  top: -2px;
  left: -8px;
  position: absolute;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: solid 2px #fff;
    opacity: 0.7;
    transform-origin: center;
    animation: active 3s ease-in-out infinite;
  }
  @keyframes active {
    0% {
      transform: scale(1);
      opacity: 0.2;
    }
    10% {
      opacity: 0.7;
    }
    50% {
      transform: scale(2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 0.2;
    }
  }
`

export const Pin = styled.div`
  height: 100px;
  width: 2px;
  background: #fff;
  transform: translateX(-50%);
  pointer-events: none;
  &:after {
    content: '';
    background: #fff;
    border-radius: 100%;
    height: 8px;
    width: 8px;
    position: absolute;
    left: -3px;
    top: 100%;
  }
`

export const ProjectPin = styled.div<{ color?: string }>`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: ${({ color }) => color ?? theme.color('primary')};
  box-shadow: ${theme.shadow('regular')};
  border-radius: 50% 50% 0;
  transform: translateY(-100%) rotate(45deg);
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: rotate(-45deg);
  }
`

export const InfoHotspotContainer = styled.div`
  transform: translateY(-100%);
  pointer-events: painted;
`

export const PanoHotspot = styled(BasePanoHotspot)`
  &[data-open='true'] {
    z-index: 10;
  }
  &[data-open='false'] {
    ${InfoHotspotContent} {
      color: #fff;
      font-size: 0;
      height: 0;
      width: 0;
      padding: 0;
    }
  }
`
