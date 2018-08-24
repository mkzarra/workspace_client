'use strict'
const storeData = require('../../scripts/store')
const config = require('../../scripts/config')

const searchByName = data => {
  return $.ajax({
    url: config.apiUrl + '/stores',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data: data.store
  })
}

const storesIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/stores',
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
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data
  })
}

const showStore = data => {
  return $.ajax({
    url: config.apiUrl + '/stores' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + storeData.user.token
    },
    data
  })
}

module.exports = {
  searchByName,
  storesIndex,
  createStore,
  updateStore,
  showStore
}
