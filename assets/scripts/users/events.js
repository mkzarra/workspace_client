const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const displaySignUpForm = e => {
  e.preventDefault()
  $('#sign-in').css('display', 'none')
  $('#sign-up').css('display', 'none')
  $('#sign-up-form').css('display', 'inline')
}

const displaySignInForm = e => {
  e.preventDefault()
  $('#sign-in').css('display', 'none')
  $('#sign-up').css('display', 'none')
  $('#sign-in-form').css('display', 'inline')
}

const displayChangePasswordForm = e => {
  e.preventDefault()
  $('#change-password-form').css('display', 'inline')
}

const onSignUp = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = e => {
  e.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  displaySignUpForm,
  displaySignInForm,
  displayChangePasswordForm,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
