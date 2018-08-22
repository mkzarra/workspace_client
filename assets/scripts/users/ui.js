'use strict'

const store = require('../store')

const clearFormFields = function (formId) {
  $(formId).each(function () {
    this.reset()
  })
}

const onSignUpSuccess = () => {
  $('#sign-up-form').hide()
  clearFormFields()
}

const onSignUpFailure = err => {
  $('#message').text('Invalid user name or password did not match')
  $('#message').css('color', 'red')
  console.error(err)
}

const onSignInSuccess = data => {
  store.user = data.user
  $('#sign-in-form').hide()
  $('#sign-up').css('display', 'none')
  $('#sign-in').css('display', 'none')
  $('#change-password').css('display', 'inline')
  $('#search-by-name').css('display', 'inline')
  $('#sign-out').css('display', 'inline')
  $('#search-by-address').css('display', 'block')
  $('.custom-select').css('display', 'block')
  clearFormFields()
}

const onSignInFailure = err => {
  $('#message').text('Invalid username or password')
  console.error(err)
}

const onChangePasswordSuccess = () => {
  $('#message').text('Your password has changed')
  $('#change-password-form').hide()
  clearFormFields()
}

const onChangePasswordFailure = err => {
  $('#message').text('Invalid password')
  console.error(err)
}

const onSignOutSuccess = () => {
  $('#sign-in').css('display', 'inline')
  $('#sign-up').css('display', 'inline')
  $('#change-password').css('display', 'none')
  $('.card').css('display', 'none')
  $('.custom-select').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('#search-by-name').css('display', 'none')
  $('#search-by-address').css('display', 'none')
  store.user = null
}

const onSignOutFailure = err => {
  $('#message').text('Error on sign out')
  console.error(err)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
