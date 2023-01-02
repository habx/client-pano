import { HttpLink as BaseHTTPLink, ApolloLink, ApolloClient } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'

import { MultiAPILink } from '@habx/apollo-multi-endpoint-link'
import { Envs, getEndpoints } from '@habx/graphql-config'
import { InMemoryCache } from '@habx/lib-client-apollo-utilities'
import { ApolloLinkError } from '@habx/lib-client-reporting'

import { config } from '@/config'

const HttpLink = config.get('batchRequests') ? BatchHttpLink : BaseHTTPLink

const CLIENT_NAME = 'client-template'
console.warn('Don\'t forget to configure clientName !') // eslint-disable-line

export const buildApolloClient = () => {
  let defaultCredentials: RequestCredentials = window.location.origin.includes(
    'localhost'
  )
    ? 'include'
    : 'same-origin'

  return new ApolloClient({
    name: CLIENT_NAME,
    version: window.VERSION ?? 'local',
    link: ApolloLink.from([
      new ApolloLinkError({ dev: window.HABX_ENV !== 'prod' }),
      new MultiAPILink({
        createHttpLink: () =>
          new HttpLink({
            credentials: defaultCredentials,
            headers: {
              'X-Request-From': CLIENT_NAME,
            },
          }),
        defaultEndpoint: 'gateway',
        endpoints: getEndpoints(window.HABX_ENV as Envs),
      }),
    ]),
    cache: new InMemoryCache(),
  })
}
