'use strict'
const storeData = require('../store')
const addressUi = require('../addresses/ui')

const renderStores = data => {
  $('.form-block').hide()
  $('.form-inline').hide()
  data.stores.forEach(stores => {
    const storeHTML = (`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${stores.name}</h5>
      <p class="card-text">${stores.wifi}</p>
      <p class="card-text">${stores.outlets}</p>
      <p class="card-text">${stores.restrooms}</p>
      <p class="card-text">${stores.seating}</p>
      <p class="card-text">${stores.atmosphere}</p>
      <form id="save-${stores.id}" value="${stores.id}">
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
    </div>
    `)
    $('.card-content').append(storeHTML)
  })
  addressUi.renderAddressInfo(data)
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
  let store = data.store
  $('#create-store').hide()
  $('#create-address').css('display', 'block')
  $('#message').text(`Thank you for adding ${store.name}`)
  const storeHTML = (`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${store.name}</h5>
      <p class="card-text">${store.wifi}</p>
      <p class="card-text">${store.outlets}</p>
      <p class="card-text">${store.restrooms}</p>
      <p class="card-text">${store.seating}</p>
      <p class="card-text">${store.atmosphere}</p>
      <form id="save-${store.id}" value="${store.id}">
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
  addressUi.renderAddressInfo(data)
  storeData.data = data.store.id
}

const onUpdateSuccess = data => {
  let store = data.store
  $('#update-store').hide()
  $('#message').text(`${store.name} has been updated`)
  const storeHTML = (`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${store.name}</h5>
      <p class="card-text">${store.wifi}</p>
      <p class="card-text">${store.outlets}</p>
      <p class="card-text">${store.restrooms}</p>
      <p class="card-text">${store.seating}</p>
      <p class="card-text">${store.atmosphere}</p>
      <form id="save-${store.id}">
      <input value="${store.id}">
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
  addressUi.renderAddressInfo(data)
}

const onShowSuccess = data => {
  storeData.data = data.store
  console.log(data)
  let store = data.store
  $('#search-by-address').hide()
  const storeHTML = (`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${store.name}</h5>
      <p class="card-text">${store.wifi}</p>
      <p class="card-text">${store.outlets}</p>
      <p class="card-text">${store.restrooms}</p>
      <p class="card-text">${store.seating}</p>
      <p class="card-text">${store.atmosphere}</p>
      <form id="save-${store.id}" value="${store.id}">
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
  addressUi.renderAddressInfo(data)
}

const onSaveSuccess = data => {
  storeData.data = data.store.id
  $('#message').text(`You have saved ${data.store.name} to your stores`)
}

const onSaveFailure = err => {
  $('#message').text(`could not save. error is ${err}`)
}

module.exports = {
  onSearchByNameSuccess,
  onSearchByNameFailure,
  onGetFailure,
  onStoresIndexSuccess,
  onCreateSuccess,
  onUpdateSuccess,
  onShowSuccess,
  onSaveSuccess,
  onSaveFailure
}