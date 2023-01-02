const getSegmentKey = () => {
  console.warn('Don\'t forget to configure Segment !') // eslint-disable-line
  switch (window.HABX_ENV) {
    case 'prod':
      return ''
    case 'staging':
      return ''
    case 'local':
      return ''
    default:
      return ''
  }
}

export const configCommon = {
  name: {
    default: 'default',
  },
  batchRequests: {
    default: true,
  },
  routes: {
    404: {
      default: '/oops',
    },
  },
  segment: {
    writeKey: {
      default: getSegmentKey(),
    },
  },
  sentry: {
    enabled: {
      default: true,
    },
  },
}
