'use strict'

const userEvents = require('./users/events')
const storeEvents = require('./stores/events')

$(() => {
  $('.show-forms').onClick('display', 'inline')
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#search-by-name').on('submit', storeEvents.onSearchByName)
})
