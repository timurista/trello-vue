import Vue from 'vue'
import List from '@/components/List'
let Constructor
let vm

const triggerClick = (Component, selector) => {
  const button = Component.$el.querySelector(selector)
  const clickEvent = new window.Event('click')
  button.dispatchEvent(clickEvent)
  Component._watcher.run()
}

describe('List', () => {
  beforeEach(() => {
    Constructor = Vue.extend(List)
    const propsData = { title: 'passed in title' }
    vm = new Constructor({ propsData }).$mount()
  })
  describe('list name', () => {
    it('should dsiplay list header title passed in', () => {
      expect(vm.$el.querySelector('a.list-header').textContent)
        .toBe('passed in title')
    })

    it('should turn link into input on click', () => {
      triggerClick(vm, 'a.list-header')
      expect(vm.$el.querySelector('input#list-header').value).toBe('passed in title')
    })
    describe('in edit mode', () => {
      describe('when user clicks save button', () => {
        beforeEach(() => {
          triggerClick(vm, 'a.list-header')
          triggerClick(vm, '.save-btn')
        })
        it('should bring back title', () => {
          expect(vm.$el.querySelector('a.list-header').textContent)
            .toBe('passed in title')
        })
      })
    })
  })
})
