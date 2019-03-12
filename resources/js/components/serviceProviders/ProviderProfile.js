import React, { Component } from 'react'
import ProfileHeader from '../profile/header';
import ProfileContent from '../profile/ProfileContent';

export default class ProviderProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }


  
  render() {
    return (
      <>
        <ProfileHeader/>
        <ProfileContent/>
      </>
    )
  }
}
