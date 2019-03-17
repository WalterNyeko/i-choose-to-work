import React, { Component } from 'react'
//Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

export default class LocationSearch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }


  handleScriptLoad() {
      // Declare Options For Autocomplete
      var options = {
          //   types: ['(cities)'],
          componentRestrictions: {
              country: "ug"
          }
      };

      // Initialize Google Autocomplete
      /*global google*/ // To disable any eslint 'google not defined' errors
      this.autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('autocomplete'),
          options,
      );

      // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect() {

      // Extract City From Address Object
      let addressObject = this.autocomplete.getPlace();
      let address = addressObject.address_components;

      // Check if address is valid
      if (address) {
          // Set State
          this.setState({
              city: address[0].long_name,
              address: addressObject.formatted_address,
              lat: addressObject.geometry.viewport.ga.j,
              long: addressObject.geometry.viewport.ga.l,
          });
      }
      this.props.searchLocation(this.state.address)
  }
  
  render() {
    return (
      <>
         <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhV7K0LTU02IbjYC1Tz6GEpF3z5TU2_xs&libraries=places" onLoad={this.handleScriptLoad}        
        /> 
        <div className="sidebar-widget">
            <h3>Location</h3>
            <div className="input-with-icon">
                <div>
                <input id="autocomplete" type="text" placeholder="Location"/>
                </div>
                <i className="icon-material-outline-location-on"></i>
            </div>
        </div>
      </>
    )
  }
}
