import React, { Component } from 'react'

export default class LocationSearch extends Component {
  render() {
    return (
      <>
        <div className="sidebar-widget">
            <h3>Location</h3>
            <div className="input-with-icon">
                <div id="autocomplete-container">
                <input id="autocomplete-input" type="text" placeholder="Location"/>
                </div>
                <i className="icon-material-outline-location-on"></i>
            </div>
        </div>
      </>
    )
  }
}
