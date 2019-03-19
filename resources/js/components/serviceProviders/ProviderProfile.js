import React, { Component } from 'react'
import ProfileHeader from '../profile/header';
import ProfileContent from '../profile/ProfileContent';
import {connect} from 'react-redux'
import {getProfile} from '../../store/actions/profile/profileActions'

class ProviderProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  componentWillMount() {
    const {match: {params}, history} = this.props;
    this.props.getProfile(params.id);
  }


  
  render() {
    return (
      <>
        <ProfileHeader name={this.props.profile.name} address={this.props.bio.address} pic={this.props.bio.profile_pic}/>
        <ProfileContent description={this.props.bio.description} services={this.props.services}/>
      </>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.profile.loading,
  errors: state.profile.errors,
  profile: state.profile.profile,
  bio: state.profile.bio,
  services: state.profile.services
})

export default connect(mapStateToProps, {getProfile})(ProviderProfile);
