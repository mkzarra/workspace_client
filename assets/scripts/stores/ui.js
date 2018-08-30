'use strict'
const storeData = require('../store')
const events = require('./events')

const renderStores = data => {
  $('.form-block').hide()
  $('.form-inline').hide()
  data.stores.forEach(store => {
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
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
      <form id="remove-${store.id}">
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Remove</button>
      </form>
    </div>
    </div>
    `)
    $('.card-content').append(storeHTML)
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
      <form id="save-${store.id}">
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
      <form id="remove-${store.id}">
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Remove</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
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
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
      <form id="remove-${store.id}">
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Remove</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
  
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
      <form id="save-${store.id}">
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
      <form id="remove-${store.id}">
      <select name="stores_user[id]"  display:none>
      <option type="number" value="${store.id}"></option>
      </select>
      <button type="submit" class="btn btn-primary">Remove</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
}

const onSaveSuccess = data => {
  storeData.data = data.store.id
  $('#message').text(`You have saved ${data.store.name} to your stores`)
}

const onSaveFailure = err => {
  $('#message').text(`could not save. error is ${err}`)
}

const onDeleteSuccess = () => {
  $('.card').css('display', 'none')
  $('#message').text(`Successfully removed a store`)
}

const onDeleteFailure = err => {
  $('#message').text(`could not remove. ${err}`)
}

const submitSave = data => {
  storeData.data = data.store
  console.log(storeData.data)
  $(`#save-${data.store.id}`).on('submit', events.onSaveStoreToUser)
}

const submitDelete = data => {
  storeData.data = data.store
  console.log(data.store)
  $(`#remove-${data.store.id}`).on('submit', events.onDeleteStore)
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
  onSaveFailure,
  onDeleteSuccess,
  onDeleteFailure,
  submitDelete,
  submitSave
}
