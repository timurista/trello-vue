<template>
  <li class="list-container">
    <a v-if="!edit" @click="edit = !edit" class="list-header">{{ title }}</a>
    <input v-if="edit"
    type="text"
    id="list-header"
    v-model="title"
      v-on:keydown.tab="saveEdit"
      v-on:keyup.enter="saveEdit"
      v-on:focusout="saveEdit"
    >
    <a type="submit" class="save-btn" @click="saveEdit">Save</a>
  </li>
</template>

<script>
export default {
  props: ['title'],
  name: 'ListItem',
  data() {
    return {
      edit: false
    }
  },
  methods: {
    saveEdit: function(el) {
      console.log('edit button clicked', this.edit)
      this.edit = !this.edit
    }
  }
}
</script>
<style scoped>
</style>
