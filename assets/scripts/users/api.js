const config = require('../config')
const storeData = require('../store')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
    method: 'POST',
    crossDomain: true,
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    crossDomain: true,
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    crossDomain: true,
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    crossDomain: true,
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}