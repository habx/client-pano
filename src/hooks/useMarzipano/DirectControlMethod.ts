import Marzipano from 'marzipano'

export function DirectControlMethod() {}

Marzipano.dependencies.eventEmitter(DirectControlMethod)

DirectControlMethod.prototype.move = function (
  parameter:
    | 'x'
    | 'y'
    | 'axisScaledX'
    | 'axisScaledY'
    | 'zoom'
    | 'yaw'
    | 'pitch'
    | 'roll',
  offset: number
) {
  const dynamics = new Marzipano.Dynamics()
  dynamics.offset = 0
  dynamics.velocity = offset
  dynamics.friction = Math.abs(offset * 3)

  this.emit('parameterDynamics', parameter, dynamics)
}

DirectControlMethod.prototype.zoom = function (offset: number) {
  this.move('zoom', -offset)
}

DirectControlMethod.prototype.zoomIn = function (offset: number = 1) {
  this.zoom(offset)
}

DirectControlMethod.prototype.zoomOut = function (offset: number = 1) {
  this.zoom(-offset)
}

export default DirectControlMethod
