'use strict'
const storeData = require('../store')

const renderStores = data => {
  $('.form-block').hide()
  $('.form-inline').hide()
  $('#search-by-name').show()
  $('.card-content').empty()
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
      <form class="save-store" id="store-id-${store.id}">
        <button class="save-store" name="stores_user[store_id]" value="${store.id}" type="submit" class="btn btn-primary">Save</button>
      </form>
      <form class="remove-store" style="display: none;">
        <button type="submit" name="stores_user[store_id]" value="${store.id}" class="btn btn-primary delete-button">Remove</button>
      </form>
      <div class="store-div">
      </div>
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
}

const onGetFailure = err => {
  $('#message').text(`Could not find what you were looking for: ${err}`)
}

const onStoresIndexSuccess = data => {
  $('#message').css('display', 'none')
  $('.save-store').css('display', 'none')
  renderStores(data)
  $('.remove-store').css('display', 'block')
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
      <form class="save-store">
      <select name="stores_user[id]"  "style="display:none"">
      <option selected></option>
      </select>
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
      <form class="remove-store">
      <select name="stores_user[id]" "style="display:none"">
      <option selected></option>
      </select>
      <button type="submit" class="btn btn-primary">Remove</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
  $('option').val(store.id)
  storeData.data = data.store.id
}

const onUpdateSuccess = data => {
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
      <form class="save-store">
      <select name="stores_user[id]"  style="display:none">
      <option selected></option>
      </select>
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
      <form class="remove-store">
      <select name="stores_user[id]" style="display:none">
      <option  selected></option>
      </select>
      <button type="submit" class="btn btn-primary">Remove</button>
      </form>
    </div>
    </div>
    `)
  $('.card-content').append(storeHTML)
  $('option').val(store.id)
}

const onSaveSuccess = data => {
  storeData.data = data.stores_user
  $('#search-by-name').css('display', 'inline')
  console.log(storeData.data)
  $('#message').text(`You have saved ${data.store_id} to your stores`)
}

const onSaveFailure = err => {
  $('#message').text(`could not save. error is ${err}`)
}

const onDeleteSuccess = () => {
  $('#search-by-name').css('display', 'inline')
  $('#message').text(`Successfully removed a store`)
}

const onDeleteFailure = err => {
  $('#message').text(`could not remove. ${err}`)
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
  onDeleteFailure
}
