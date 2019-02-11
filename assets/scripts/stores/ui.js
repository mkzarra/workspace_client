'use strict'
const storeData = require('../store')

const renderOneStore = store => {
  let wifi = !store.wifi ? 'unavailable' : 'available'
  const storeHTML = (`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${store.name}</h5>
    <p class="card-text">hours: ${store.schedule}</p>
      <p class="card-text">wifi: ${wifi}</p>
      <p class="card-text">outlets: ${store.outlets}</p>
      <p class="card-text">restrooms: ${store.restrooms}</p>
      <p class="card-text">seating: ${store.seating}</p>
      <p class="card-text">atmosphere: ${store.atmosphere}</p>
      <form class="save-store">
      <select name="stores_user[id]"  type="hidden">
      <option selected></option>
      </select>
      <button type="submit">Save</button>
      </form>
      <br />
      <form class="remove-store">
      <select name="stores_user[id]" type="hidden">
      <option selected></option>
      </select>
      <button type="submit">Remove</button>
      </form>
    </div>
    </div>
    `);
  $('.card-content').append(storeHTML);
  $('option').val(store.id);
}

const renderStores = data => {
  $('.form-block').hide()
  $('.form-inline').hide()
  $('#search-form').css('dislplay', 'flex')
  $('#my-stores').css('display', 'flex')
  $('.card-content').empty()
  data.stores.reverse().forEach(store => {
    let wifi = !store.wifi ? 'unavailable' : 'available'
    const storeHTML = (`
    <div class="card">
    <div class="card-body">
    <h2 class="card-title"><strong>${store.name}</strong></h2>
      <p class="card-text">hours: ${store.schedule}</p>
      <p class="card-text">wifi: ${wifi}</p>
      <p class="card-text">power outlets: ${store.outlets}</p>
      <p class="card-text">restrooms: ${store.restrooms}</p>
      <p class="card-text">seating: ${store.seating}</p>
      <p class="card-text">atmosphere: ${store.atmosphere}</p>
      <form class="save-store" id="store-id-${store.id}">
        <button class="save-store" name="stores_user[store_id]" value="${store.id}" type="submit">Save</button>
      </form>
      <br />
        <button type="button" class="display-update-form">Update</button>
      <form class="remove-store" style="display:none;">
        <button type="submit" name="stores_user[store_id]" value="${store.id}" class="btn btn-primary delete-button">Remove</button>
      </form>
    </div>
    </div>

    <!-- Modal -->
<div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateModalLabel">Update Store</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    <!-- start update store -->
            <form class="update-store form-block">
              <!-- start name input -->
              <div class="update-name form-row">
                <label for="inputNameUpdate">Name</label>
                <input name="store[name]" type="text" class="form-control inputNameUpdate">
              </div>
              <!-- end name input -->
            
              <!-- start schedule input -->
              <div class="form-row update-schedule">
                <label for="inputSchedule">Hours</label>
                <input name="store[schedule]" type="text" class="form-control inputScheduleUpdate">
              </div>
              <!-- end schedule input -->
            
              <!-- start select wifi menu -->
              <div class="form-group wifi-update">
                <select name="store[wifi]" class="custom-select update-wifi">
                  <option disabled selected>Is wifi available here?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <!-- end select menu -->
            
              <!-- start select menu -->
              <div class="form-group seating-update">
                <select name="store[seating]" class="custom-select update-seating">
                  <option disabled selected>Available seating</option>
                  <option value="Sparse">Sparse</option>
                  <option value="Limited">Limited</option>
                  <option value="Adiquate">Adiquate</option>
                  <option value="Plenty">Plenty</option>
                  <option value="Guaranteed">Guaranteed</option>
                </select>
              </div>
              <!-- end select menu -->
            
              <!-- start select menu -->
              <div class="form-group atmosphere-update">
                <select name="store[atmosphere]" class="custom-select update-atmosphere">
                  <option disabled selected>Atmosphere</option>
                  <option value="Private">Private</option>
                  <option value="Vibrant">Vibrant</option>
                  <option value="Peaceful">Peaceful</option>
                </select>
              </div>
              <!-- end select menu -->
              <!-- start select menu -->
              <div class="form-group outlets-update">
                <select name="store[outlets]" class="update-outlets custom-select">
                  <option disabled selected>Available power outlets</option>
                  <option value="None">None</option>
                  <option value="Sparse">Sparse</option>
                  <option value="Limited">Limited</option>
                  <option value="Plenty">Plenty</option>
                  <option value="Guaranteed">Guaranteed</option>
                </select>
              </div>
              <!-- end select menu -->
              <!-- start restroom checkboxes -->
              <div class="form-check">
                <h5 class="check-box-update">Restroom info</h5>
                <input name="store[restrooms]" class="form-check-input clean-update" type="checkbox" value="clean">
                <label class="form-check-label" for="clean-update">
                  Clean
                </label>
              </div>
              <div class="form-check">
                <input name="store[restrooms]" class="form-check-input large-update" type="checkbox" value="large">
                <label class="form-check-label" for="large-update">
                  Large
                </label>
              </div>
              <div class="form-check">
                <input name="store[restrooms]" class="form-check-input changing-station-update" type="checkbox" value="changing station">
                <label class="form-check-label" for="changing-station-update">
                  Changing Table
                </label>
              </div>
              <div class="form-check">
                <input name="store[restrooms]" class="form-check-input gender-neutral-update" type="checkbox" value="gender neutral">
                <label class="form-check-label" for="gender-neutral-update">
                  Gender neutral
                </label>
              </div>
              <div class="form-check">
                <input name="store[restrooms]" class="form-check-input single-stall-update" type="checkbox" value="single stall">
                <label class="form-check-label" for="single-stall-update">
                  Single stall
                </label>
              </div>
            
              <!-- end restroom checkboxes -->
              <button name="store[id]" value="${store.id}" type="submit" class="btn btn-primary update-button">Submit</button>
            </form>
      <!-- end update store -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `);
    $('.card-content').append(storeHTML);
  });
}

const onSearchByNameSuccess = (data) => {
  $('#message').css('display', 'none')
  renderStores(data)
}

const onSearchByNameFailure = (err) => {
  $('#message').text(`Search failed: ${err}`)
}

const onGetFailure = (err) => {
  $('#message').text(`Could not find what you were looking for: ${err}`)
}

const onStoresIndexSuccess = (data) => {
  $('#message').css('display', 'none')
  renderStores(data)
  $('.save-store').css('display', 'none')
  $('.remove-store').css('display', 'block')
}

const onCreateSuccess = (data) => {
  let store = data.store
  $('#create-store').hide();
  $('#create-address').css('display', 'block');
  $('#message').text(`Thank you for adding ${store.name}`);
  renderOneStore(store);
  storeData.data = data.store.id;
}

const onUpdateSuccess = (data) => {
  console.log(data);
  $('#updateModal').modal('hide');
}

const onShowSuccess = (data) => {
  console.log(data);
  const store = data.store;
  $('#search-by-address').hide();
  renderOneStore(store);
  storeData.data = data.store;
}

const onSaveSuccess = (data) => {
  storeData.data = data.stores_user;
  $('#search-by-name').css('display', 'inline');
  console.log(storeData.data);
  $('#message').text(`You have saved ${data.store_id} to your stores`);
}

const onSaveFailure = (err) => {
  $('#message').text(`could not save. error is ${err}`);
}

const onDeleteSuccess = () => {
  $('#search-by-name').css('display', 'inline');
  $('#message').text(`Successfully removed a store`);
}

const onDeleteFailure = (err) => {
  $('#message').text(`could not remove. ${err}`);
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
