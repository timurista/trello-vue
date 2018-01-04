<template>
  <li class="list-container">
    <div class="list-actions">
      <a v-if="!edit" @click="saveEdit" class="list-header">{{ title }}</a>
      <input v-if="edit"
      id="list-header"
      ref="listHeaderEdit"
      v-model="title"
        v-on:keydown.tab="saveEdit"
        v-on:keyup.enter="saveEdit"
        v-on:focusout="saveEdit"
      >
      <a type="submit" class="save-btn">...</a>
    </div>
    <ul class="cards">
      <li v-for="card in cards" v-bind:key="card.id">
        {{card}}
      </li>
    </ul>
    <div v-if="composeCard" class="card-composer">
      <textarea class="card-composer-textarea">
      </textarea>
      <a class="cancel" @click="composeCard = !composeCard">X</a>
    </div>
    <a v-if="!composeCard" class="open-card-composer" @click="composeCard = !composeCard">Add a Card...</a>
  </li>
</template>

<script>
export default {
  props: ['title', 'cards'],
  name: 'ListItem',
  data() {
    return {
      edit: false,
      composeCard: false
    }
  },
  methods: {
    saveEdit: function(el) {
      this.edit = !this.edit

      if (this.edit) {
        this.$nextTick(() => {
          this.$refs.listHeaderEdit.focus()
          this.$refs.listHeaderEdit.select()
        })
      }
    }
  }
}
</script>
<style scoped>

li {
  background-color: #e2e4e6;
  border-radius: 3px;
  width: 250px;
  padding: 16px;
}

a {
  cursor: pointer;
  font-weight: 500;
}
a.save-btn {
  padding: 0 8px;
  border-radius: 8px;
  color: #999;
}

.list-actions {
  display: flex;
  justify-content: space-between;
}

input {
  color: #2c3e50;
  font-family: 'Avenir';
  font-size: 1em;
  flex: 2;
  border: 3px;
  padding: 0 2px;
  margin-left: -2px;
  font-weight: 500;
  border-color: #2c3e50;
}
</style>
