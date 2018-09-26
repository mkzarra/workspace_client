'use strict'
const storeData = require('../store')
const config = require('../config')

const createAddress = data => {
  data.store_id = storeData.data
  return $.ajax({
    url: `${config.apiUrl}/addresses`,
    method: 'POST',
    crossDomain: true,
    headers: {
      Authorization: `Token token=${storeData.user.token}`
    },
    data: data
  })
}

const updateAddress = data => {
  return $.ajax({
    url: `${config.apiUrl}/addresses/${data.id}`,
    method: 'PATCH',
    crossDomain: true,
    headers: {
      Authorization: `Token token=${storeData.user.token}`
    },
    data
  })
}

const showAddress = data => {
  console.log(data)
  return $.ajax({
    url: `${config.apiUrl}/addresses/`,
    method: 'GET',
    crossDomain: true,
    headers: {
      Authorization: `Token token=${storeData.user.token}`
    },
    data: data.address
  })
}

module.exports = {
  createAddress,
  updateAddress,
  showAddress
}