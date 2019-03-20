import React, { Component } from 'react'
import ProfileHeader from '../profile/header';
import ProfileContent from '../profile/ProfileContent';
import {connect} from 'react-redux'
import {getProfile} from '../../store/actions/profile/profileActions'
import {makeOffer} from '../../store/actions/bid/bidAction'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.min.css';

class ProviderProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       visible: false,
       confirmLoading: false,
       provider: ''
    }
    this.makeOffer = this.makeOffer.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillMount() {
    const {match: {params}, history} = this.props;
    this.props.getProfile(params.id);
  }

  makeOffer(e, id)
  {
    e.preventDefault();
    this.setState({
      visible: true,
      provider: id
    })
  }

  handleOk(){
      this.setState({
          confirmLoading: true,
      });
      setTimeout(() => {
          this.setState({
              visible: false,
              confirmLoading: false,
          });
      }, 2000);
      const data = {
        service_req_id: sessionStorage.getItem('request_id'),
        provider: this.state.provider
      }

      this.props.makeOffer(data);
  }

  handleCancel(){
      console.log('Clicked cancel button');
      this.setState({
          visible: false,
      });
  }


  
  render() {
    const {visible, confirmLoading} = this.state;
    return (
      <>
        <ProfileHeader name={this.props.profile.name} address={this.props.bio.address} pic={this.props.bio.profile_pic}/>
        <ProfileContent clicked={(e, id) => this.makeOffer(e, this.props.profile.id)} description={this.props.bio.description} services={this.props.services}/>
        <Modal
          title="Confirm"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>Are you sure you want to make the offer?</p>
        </Modal>
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

export default connect(mapStateToProps, {getProfile, makeOffer})(ProviderProfile);
