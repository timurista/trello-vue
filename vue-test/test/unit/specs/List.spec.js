import Vue from 'vue'
import List from '@/components/List'
import { mount } from 'avoriaz'
let Constructor
let vm

const triggerEvent = (Component, selector, event) => {
  const el = Component.$el.querySelector(selector)
  const windowEvent = new window.Event(event)
  el.dispatchEvent(windowEvent)
  Component._watcher.run()
}

function triggerClick(Component, selector) {
  triggerEvent(Component, selector, 'click')
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
      describe('when the input is blurred', () => {
        beforeEach(() => {
          triggerClick(vm, 'a.list-header')
          // BROKEN FIX
          // let el = vm.$el.querySelector('#list-header')
          // const windowEvent = new window.Event('blur')
          // el.dispatchEvent(windowEvent)
          // vm._watcher.run()
        })
        it('should bring back title', () => {
          expect(vm.$el.querySelector('a.list-header').textContent)
            .toBe('passed in title')
        })
      })
    })
  })
})
