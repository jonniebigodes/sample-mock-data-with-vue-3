<template>
  <div><slot/></div>
</template>

<script>

import {defineComponent, provide } from "vue";
import {DefaultApolloClient} from "@vue/apollo-composable";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

export default defineComponent({
  name:'WrapperComponent',
  setup() {
    const httpLink= createHttpLink({
      // You should use an absolute URL here
      uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    })
    const cache= new InMemoryCache();
    const mockedClient= new ApolloClient({
      link:httpLink,
      cache,
      defaultOptions: {
        watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
      },
    });
    provide(DefaultApolloClient, mockedClient);
  }}
)

</script>