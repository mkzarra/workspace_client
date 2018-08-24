'use strict'
const storeData = require('../store')

const renderAddressInfo = data => {
  console.log(data)
  console.log(storeData.data)
  const addressHTML = (`
    <p class="card-text">${data.line_one}</p>
    <p class="card-text">${data.line_two}</p>
    <p class="card-text">${data.city}</p>
    <p class="card-text">${data.state}</p>
    <p class="card-text">${data.zip_code}</p>
  `)
  $('.card-body').append(addressHTML)
}

const createAddressSuccess = data => {
  $('#create-address').hide()
  console.log(data.address)
  storeData.data = data.address
  renderAddressInfo(data.address)
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