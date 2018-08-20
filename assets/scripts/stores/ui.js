'use strict'

const renderStores = data => {
  $('.clear-index').css('display', 'none')
  data.stores.forEach(stores => {
    const storeHTML = (`
    <div class="clear-index">
      <li class="store-name">${stores.name}</li>
      <li>${stores.wifi}</li>
      <li>${stores.outlets}</li>
      <li>${stores.restrooms}</li>
      <li>${stores.seating}</li>
      <li>${stores.atmosphere}</li>
    </div><br>
    `)
    $('store-index').append(storeHTML)
  })
}

const onSearchByNameSuccess = data => {
  renderStores(data)
}

const onGetFailure = err => {
  $('#message').text(`Could not find what you were looking for: ${err}`)
}

const onStoresIndexSuccess = data => {
  $('#message').css('display', 'none')
  renderStores(data)
}

const onCreateSuccess = data => {
  $('.clear-index').css('display', 'none')
  $('#message').text(`Thank you for adding ${data.store.name}`)
  const storeHTML = (`
    <div class="clear-index">
      <li class="store-name">${data.store.name}</li>
      <li>${data.store.wifi}</li>
      <li>${data.store.outlets}</li>
      <li>${data.store.restrooms}</li>
      <li>${data.store.seating}</li>
      <li>${data.store.atmosphere}</li>
    </div><br>
  `)
  $('#store-index').append(storeHTML)
}

const onUpdateSuccess = data => {
  $('.clear-index').css('display', 'none')
  $('#message').text(`${data.store.name} has been updated`)
  const storeHTML = (`
    <div class="clear-index">
      <li class="store-name">${data.store.name}</li>
      <li>${data.store.wifi}</li>
      <li>${data.store.outlets}</li>
      <li>${data.store.restrooms}</li>
      <li>${data.store.seating}</li>
      <li>${data.store.atmosphere}</li>
    </div><br>
  `)
  $('#store-index').append(storeHTML)
}

const onShowSuccess = data => {
  $('.clear-index').css('display', 'none')
  const storeHTML = (`
    <div class="clear-index">
      <li class="store-name">${data.store.name}</li>
      <li>${data.store.wifi}</li>
      <li>${data.store.outlets}</li>
      <li>${data.store.restrooms}</li>
      <li>${data.store.seating}</li>
      <li>${data.store.atmosphere}</li>
    </div><br>
  `)
  $('#store-index').append(storeHTML)
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