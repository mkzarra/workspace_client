'use strict'
const storeData = require('../store')

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
      <form class="save-store" id="store-id-${store.id}">
      <button class="save-store" name="stores_user[store_id]" type="submit" class="btn btn-primary">Save</button>
      </form>
      <form class="remove-store">
      <button type="submit" name="stores_user[store_id]" class="btn btn-primary">Remove</button>
      </form>
    </div>
    </div>
    `)
    $('.card-content').append(storeHTML)
    $('button').val(store.id)
    console.log(store.id)
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
      <form id="save-" + ${store.id} class="save-store">
      <input type="submit" value=${store.id}> 
      <select name="stores_user +" ${store.id}  style="display:none">
      <option  selected></option>
      </select>
      <button type="submit" class="btn btn-primary">Save</button>
      </form>
      <form id="remove${store.id}" class="remove-store">
      <select name="stores_user[id]"  style="display:none">
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
  storeData.data = data.storeUser
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
