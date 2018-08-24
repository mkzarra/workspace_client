'use strict'
const storeData = require('../store')
const config = require('../config')

const createAddress = data => {
  data.store_id = storeData.data
  return $.ajax({
    url: `${config.apiUrl}/addresses`,
    method: 'POST',
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
    headers: {
      Authorization: `Token token=${storeData.user.token}`
    },
    data
  })
}

module.exports = {
  createAddress,
  updateAddress
}