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

const displayUpdateForms = e => {
  $('#updateModal').modal('show')
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
  console.log(data.store.id)
  api.updateStore(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onShowStore = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  console.log(data)
  console.log(data.address)
  // get store_id from address to show store
  api.showStore(data)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onSaveStoreToUser = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  console.log(data)
  api.saveStoreToUser(data.stores_user)
    .then(ui.onSaveSuccess)
    .catch(ui.onSaveFailure)
}

const onDeleteStore = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.deleteStore(data.stores_user.store_id)
    .then(render => onStoresIndex(render))
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

module.exports = {
  displayCreateForms,
  displayUpdateForms,
  displaySearchForms,
  onSearchByName,
  onStoresIndex,
  onCreateStore,
  onUpdateStore,
  onShowStore,
  onSaveStoreToUser,
  onDeleteStore
}
