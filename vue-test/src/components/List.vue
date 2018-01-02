<template>
  <li>
    <h2>{{ title }}</h2></li>
</template>

<script>
export default {
  props: {
    title: {
      default: 'some title'
    }
  },
  data () {
    return {
      title: this.title
    }
  },
  name: 'ListItem'
}
</script>
