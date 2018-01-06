<template>
<modal name="cardDetail" class="card-detail-modal" @before-open="beforeOpen">
  <div class='detail-title'>{{title}}</div>
  <button @click="hide">X</button>
</modal>
</template>

<script>
export default {
  name: 'CardDetailModal',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    beforeOpen (event) {
      const { title } = event.params
      this.title = title
    },
    show() {
      this.$modal.show('cardDetail')
    },
    hide() {
      this.$modal.hide('cardDetail')
    }
  }
}
</script>

<style scoped>
</style>
