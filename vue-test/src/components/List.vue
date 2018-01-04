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
      <li v-for="card in cards" v-bind:key="card.id" class="list-card">
        <a class="list-card-title">{{card.title}}</a>
      </li>
    </ul>
    <div v-if="composeCard" class="card-composer">
      <textarea class="card-composer-textarea" v-model="newCardTitle">
      </textarea>
      <div class="card-composer-actions">
        <a class="add-card" @click="addNewCard">Add</a>
        <a class="cancel" @click="resetNewCard">X</a>
      </div>
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
      composeCard: false,
      newCardTitle: ''
    }
  },
  methods: {
    addNewCard: function() {
      const title = this.newCardTitle
      this.cards.push({ title })
      this.resetNewCard()
    },
    resetNewCard: function() {
      this.newCardTitle = ''
      this.composeCard = !this.composeCard
    },
    saveEdit: function() {
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

li.list-container {
  position: relative;
  padding-bottom: 40px;
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

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

li.list-card {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px #ccc;
  margin-top: 8px;
  padding: 0;
  margin-bottom: 8px;
}

.list-card-title {
  padding: 6px;
  clear: both;
  display: block;
  overflow: hidden;
  text-decoration: none;
  word-wrap: break-word;
  text-align: left;
  color: #4d4d4d;
}

.open-card-composer {
  text-align: left;
  display: block;
  color: #838c91;
  margin: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 8px 16px;
  width: 250px;
  &:hover {
    background-color: #cdd2d4;
    text-decoration: underline;
    color: #4d4d4d;
  }
}

.card-composer {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: -32px;
  padding-top: 8px;
}

.card-composer-actions {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.add-card {
  padding: 8px 16px;
  background: #026aa7 100%;
  border-radius: 2px;
  color: #ddd;
  font-weight: bold;
}

.cancel {
  padding: 8px 16px;
  color: rgb(120, 120, 120);
  font-weight: bold;
}
.card-composer-textarea {
  padding: 4px 8px;
  border: 0;
  border-radius: 3px;
  resize: none;
  font-size: 1em;
  font-family: 'Avenir';
  &:focus {
    outline:0;
  }
}

</style>
