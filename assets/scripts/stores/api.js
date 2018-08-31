'use strict'
const storeData = require('../../scripts/store')
const config = require('../../scripts/config')

const searchByName = data => {
  console.log(storeData.user.id)
  return $.ajax({
    url: config.apiUrl + '/stores',
    method: 'GET',
    crossDomain: true,
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data: data.store
  })
}

const storesIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/stores_users',
    crossDomain: true,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    }
  })
}

const createStore = data => {
  return $.ajax({
    url: config.apiUrl + '/stores',
    method: 'POST',
    crossDomain: true,
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data
  })
}

const updateStore = data => {
  return $.ajax({
    url: config.apiUrl + '/stores/' + data.id,
    method: 'PATCH',
    crossDomain: true,
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data
  })
}

const showStore = data => {
  return $.ajax({
    url: config.apiUrl + '/stores/' + data.store_id,
    method: 'GET',
    crossDomain: true,
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data
  })
}

const saveStoreToUser = data => {
  return $.ajax({
    url: `${config.apiUrl}/stores_users`,
    method: 'POST',
    crossDomain: true,
    headers: {
      Authorization: `Token token=${storeData.user.token}`
    },
    data: {
      stores_user: {
        user_id: storeData.user.id,
        store_id: data.store_id
      }
    }
  })
}

const deleteStore = joinID => {
  return $.ajax({
    url: `${config.apiUrl}/stores_users/${joinID}`,
    method: 'DELETE',
    crossDomain: true,
    headers: {
      Authorization: `Token token=${storeData.user.token}`
    }
  })
}

module.exports = {
  searchByName,
  storesIndex,
  createStore,
  updateStore,
  showStore,
  saveStoreToUser,
  deleteStore
}
