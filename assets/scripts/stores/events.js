'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')

const addressToStore = data => {
  if (data.store.address_id === data.address.id) {
    // show store with this address_id
  }
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
  api.createStores(data)
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
  // match address.id with stores.address_id to show store
  api.showStore(data.store.address_id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

module.exports = {
  onSearchByName,
  onStoresIndex,
  onCreateStore,
  onUpdateStore,
  onShowStore
}
