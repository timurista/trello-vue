import Vue from 'vue'
import Board from '@/components/Board'

describe('Board', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Board)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main h1').textContent)
    .toEqual('Trello Clone')
  })
})

// main view
// [boards you can search by]

// basic components
// Boards, can filter
  // user is able to click a search button and be taken to a board
  // board can be deleted, added, or updated
  // store lists
  // boards can be private, or public only
  // public boards show to any user
  // private boards show to only user logged in
// Lists
  // user clicks list and can rename them
  // store cards
  // in flex box view
// Cards
  // users can upload a description
  // users can set a title
  // users can add comment
  // users can add an image

  // Users
    // users register
    // users sign in
    // users can log out
    // board information is saved
