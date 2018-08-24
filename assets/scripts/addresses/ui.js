'use strict'
const storeData = require('../store')

const renderAddressInfo = data => {
  const addressHTML = (`
    <p class="card-text">${data.address.line_one}</p>
    <p class="card-text">${data.address.line_two}</p>
    <p class="card-text">${data.address.city}</p>
    <p class="card-text">${data.address.state}</p>
    <p class="card-text">${data.address.zip_code}</p>
  `)
  $('.card-body').append(addressHTML)
}

const createAddressSuccess = data => {
  $('#create-address').hide()
  data = storeData.data
  renderAddressInfo(data)
}

const createAddressFailure = err => {
  $('#message').text(`Could not find store.id: ${err}`)
}

const onUpdateSuccess = data => {
  $('#create-address').hide()
  renderAddressInfo(data)  
}

const onUpdateFailure = err => {
  $('#message').text(`Could not update this address: ${err}`)  
}

module.exports = {
  createAddressSuccess,
  createAddressFailure,
  onUpdateSuccess,
  onUpdateFailure
}