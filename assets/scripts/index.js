'use strict'

const userEvents = require('./users/events')
const storeEvents = require('./stores/events')
const addressEvents = require('./addresses/events')

$(() => {
  $('#sign-up').on('click', userEvents.displaySignUpForm)
  $('#sign-in').on('click', userEvents.displaySignInForm)
  $('#change-password').on('click', userEvents.displayChangePasswordForm)
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#search-by-name').on('submit', storeEvents.onSearchByName)
  $('#search-by-address').on('submit', addressEvents.onShowAddress)
  $('#create-store').on('submit', storeEvents.onCreateStore)
  $('#create-address').on('submit', addressEvents.onCreateAddress)
  $('#display-create-forms').on('click', storeEvents.displayCreateForms)
  $('#display-update-store').on('click', storeEvents.displayUpdateForms)
  $('#update-store').on('submit', storeEvents.onUpdateStore)
  $("form[id*='save']").on('submit', storeEvents.onSaveStoreToUser)
  $("form[id*='remove']").on('submit', storeEvents.onDeleteStore)
})
