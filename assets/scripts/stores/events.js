'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const displayCreateForms = e => {
  e.preventDefault()
  $('#create-store').css('display', 'inline-block')
  $('#change-password').css('display', 'none')
  $('#change-password-form').hide()
  $('#search-by-address').hide()
}

const displaySearchForms = e => {
  $('#search-by-address').css('display', 'inline-block')
}

const onSearchByName = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.searchByName(data)
    .then(ui.onSearchByNameSuccess)
    .catch(ui.onGetFailure)
}

const onStoresIndex = e => {
  e.preventDefault()
  api.storesIndex()
    .then(ui.onStoresIndexSuccess)
    .catch(ui.onGetFailure)
}

const onCreateStore = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.createStore(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdateStore = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.updateStore(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onShowStore = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  console.log(data)
  // match store.id with address to show store
  api.showStore(data)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

module.exports = {
  displayCreateForms,
  displaySearchForms,
  onSearchByName,
  onStoresIndex,
  onCreateStore,
  onUpdateStore,
  onShowStore
}
