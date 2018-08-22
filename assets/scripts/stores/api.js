'use strict'
const store = require('../../scripts/store')
const config = require('../../scripts/config')

const searchByName = data => {
  return $.ajax({
    url: config.apiUrl + '/stores',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data.stores
  })
}

const storesIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/stores',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createStore = data => {
  return $.ajax({
    url: config.apiUrl + '/stores',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateStore = data => {
  return $.ajax({
    url: config.apiUrl + '/stores/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showStore = data => {
  return $.ajax({
    url: config.apiUrl + '/stores' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
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
