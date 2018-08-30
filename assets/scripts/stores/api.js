'use strict'
const storeData = require('../../scripts/store')
const config = require('../../scripts/config')

const searchByName = data => {
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
    url: config.apiUrl + '/stores',
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
  console.log(data)
  debugger
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
    data
  })
}

const deleteStore = id => {
  return $.ajax({
    url: `${config.apiUrl}/stores_users/${id}`,
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
