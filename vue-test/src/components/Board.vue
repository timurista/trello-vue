<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <input v-model="listNumber" type="number">
    <ul >
    <list-item v-for="list in lists"
      :title="list.title"
      v-bind:key="list.id">
    </list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from './List'

const lists = [{
  id: 1,
  title: 'title1',
  items: [{
    text: 'an item'
  }]
}]

export default {
  name: 'Board',
  data () {
    return {
      msg: 'Trello Clone',
      listNumber: 1,
      lists
    }
  },
  components: {
    'list-item': ListItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
