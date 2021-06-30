<template>
  <h1>Vue 3 and Fetch Example</h1>
  <ul v-if="!loading && data && data.length">
    <li v-for="post of data" :key="post.id">
      <div>
      <h1>This is a sample component</h1>
      <div>
        <h2>Has the following props and values</h2>
        <div>
          <h3>id: {{post.id}}</h3>
          <h3>userId: {{post.userId}}</h3>
          <h3>title: {{post.title}}</h3>
          <h3>completed:{{post.completed}}</h3>
        </div>
      </div>
    </div>
    </li>
  </ul>
  <p v-if="loading">
   Fetching data
  </p>
  <p v-if="error">
    There was an error fetching the data!
  </p>
</template>>
<script>
import {ref} from 'vue'
export default {
  name: "App",
  setup(){
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        if (!res.ok) {
          error.value= res.statusText
        }
        return res;
      })
      .then((res) => res.json())
      .then((requestData) => {
        data.value=requestData;
        loading.value=false
      })
      .catch(() => {
        error.value="error"
      });
      return {
        error,
        loading,
        data,
      }
  }
};
</script>

<style>
</style>
