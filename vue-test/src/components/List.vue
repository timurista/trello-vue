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
  name: 'ListItem'
}
</script>
