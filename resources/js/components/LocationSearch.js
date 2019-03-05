import React, { Component } from 'react'

export default class LocationSearch extends Component {
  render() {
    return (
      <>
        <div class="sidebar-widget">
            <h3>Location</h3>
            <div class="input-with-icon">
                <div id="autocomplete-container">
                <input id="autocomplete-input" type="text" placeholder="Location"/>
                </div>
                <i class="icon-material-outline-location-on"></i>
            </div>
        </div>
      </>
    )
  }
}
