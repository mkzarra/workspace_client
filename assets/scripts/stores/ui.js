'use strict'
const storeData = require('../store')

const renderStores = data => {
  $('.clear-index').css('display', 'none')
  data.stores.forEach(stores => {
    const storeHTML = (`
    <h5 class="card-title">${stores.name}</h5>
      <p class="card-text">${stores.wifi}</p>
      <p class="card-text">${stores.outlets}</p>
      <p class="card-text">${stores.restrooms}</p>
      <p class="card-text">${stores.seating}</p>
      <p class="card-text">${stores.atmosphere}</p>
    `)
    $('.card').css('display', 'block')
    $('.card-body').append(storeHTML)
  })
}

const onSearchByNameSuccess = data => {
  $('#message').css('display', 'none')
  renderStores(data)
}

const onSearchByNameFailure = err => {
  $('#message').text(`Search failed: ${err}`)
  console.error(err)
}

const onGetFailure = err => {
  $('#message').text(`Could not find what you were looking for: ${err}`)
}

const onStoresIndexSuccess = data => {
  $('#message').css('display', 'none')
  renderStores(data)
}

const onCreateSuccess = data => {
  $('#create-store').hide()
  $('#create-address').css('display', 'block')
  $('#message').text(`Thank you for adding ${data.store.name}`)
  const storeHTML = (`
      <h5 class="card-title">${data.store.name}</h5>
      <p class="card-text">${data.store.wifi}</p>
      <p class="card-text">${data.store.outlets}</p>
      <p class="card-text">${data.store.restrooms}</p>
      <p class="card-text">${data.store.seating}</p>
      <p class="card-text">${data.store.atmosphere}</p>
  `)
  $('.card-body').append(storeHTML)
  storeData.data = data.store.id
}

const onUpdateSuccess = data => {
  $('.clear-index').css('display', 'none')
  $('#message').text(`${data.store.name} has been updated`)
  const storeHTML = (`
      <h5 class="card-title">${data.store.name}</h5>
      <p class="card-text">${data.store.wifi}</p>
      <p class="card-text">${data.store.outlets}</p>
      <p class="card-text">${data.store.restrooms}</p>
      <p class="card-text">${data.store.seating}</p>
      <p class="card-text">${data.store.atmosphere}</p>
  `)
  $('.card-body').append(storeHTML)
}

const onShowSuccess = data => {
  $('.clear-index').css('display', 'none')
  const storeHTML = (`
    <div class="clear-index">
      <h5 class="card-title">${data.store.name}</5>
      <p class="card-text">${data.store.wifi}</p>
      <p class="card-text">${data.store.outlets}</p>
      <p class="card-text">${data.store.restrooms}</p>
      <p class="card-text">${data.store.seating}</p>
      <p class="card-text">${data.store.atmosphere}</p>
  `)
  $('.card-body').append(storeHTML)
}

module.exports = {
  onSearchByNameSuccess,
  onSearchByNameFailure,
  onGetFailure,
  onStoresIndexSuccess,
  onCreateSuccess,
  onUpdateSuccess,
  onShowSuccess
}