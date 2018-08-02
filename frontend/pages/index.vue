<template>
  <section class="container">
    TODOS:
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.description}}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData: async function () {
    const { data: { data } } = await axios.get(process.env.API_URL + '/todos');
    return { todos: data }
  },
  data () {
    return { todos: [] }
  }
}
</script>

<style>
body {
  padding: 1rem;
}
</style>
