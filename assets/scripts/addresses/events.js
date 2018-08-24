'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const storeUi = require('../stores/ui')
const storeData = require('../store')

const onCreateAddress = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.createAddress(data)
    .then(ui.createAddressSuccess)
    .catch(ui.createAddressFailure)
}

const onUpdateAddress = e => {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.updateAddress(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

module.exports = {
  onCreateAddress,
  onUpdateAddress
}