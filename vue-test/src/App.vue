<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script>
import Vue from 'vue'
import Board from './components/Board'
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)

export default {
  name: 'app',
  components: {
    Board,
    Icon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background-color: #8dd5ff;
}
</style>
