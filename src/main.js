import { createApp, provide, h } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
createApp(
  {
    setup () {
      provide(DefaultApolloClient, apolloClient)
    },
    render() {
      return h(App)
    }
  }
).mount('#app')