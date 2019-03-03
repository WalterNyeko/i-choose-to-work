import React, { Component, Fragment } from 'react'
import Script from 'react-load-script';

export default class PlacesInput extends Component {
  
  constructor(props)
  {
      super(props);
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
      this.autocomplete.addListener('place_changed', this.props.handlePlaceSelect);
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
      console.log(this.state.long)
  }

  render() {
    return (
      <Fragment>
            <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhV7K0LTU02IbjYC1Tz6GEpF3z5TU2_xs&libraries=places" 
                onLoad={this.handleScriptLoad}/>  
            <input type="text" 
                   name={this.props.name} 
                   id="autocomplete" 
                  className="form-control" 
                  onChange={this.handlePlaceSelect}/> 
        </Fragment>
    )
  }
}
