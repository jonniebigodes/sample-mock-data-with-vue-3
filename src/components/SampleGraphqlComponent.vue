<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">There was an error fetching the data!</div>

  <ul v-else-if="result && result.allFilms">
    <div>GraphQL</div>
    <li v-for="film of result.allFilms.films" :key="film.episode_id">
      <article>
        <h4>{{ film.title }}</h4>
        <p>{{ film.opening_crawl }}</p>
      </article>
    </li>
  </ul>
</template>

<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
export default {
  name: "SampleGraphqlComponent",
  setup() {
    const { result, loading, error } = useQuery(gql`
      query AllFilmsQuery {
        allFilms {
          films {
            title
            episode_id: episodeID
            opening_crawl: openingCrawl
          }
        }
      }
    `);
    return {
      result,
      loading,
      error,
    };
  },
};
</script>
