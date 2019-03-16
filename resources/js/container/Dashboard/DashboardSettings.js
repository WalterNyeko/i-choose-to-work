import React, { Component } from 'react';
import DashBoardSettingsComponent from '../../components/Dashboards/containers/DashboardSettings';
import { Api } from '../../constants/Api';
import { notification } from 'antd';
export default class DashboardSettings extends Component {
    constructor(props){
        super(props);
        this.state = {
            profilePic: null,
            taglineProfessional: '',
            phoneNumber: '',
            address: '',
            description: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitPasswordUpdate=this.handleSubmitPasswordUpdate.bind(this);
        this.handleSubmitProfileUpdate=this.handleSubmitProfileUpdate.bind(this);
      }
  
      handleSubmitProfileUpdate(e){
          e.preventDefault();
          this.updateProfile();
      }
      handleSubmitPasswordUpdate(e){
        e.preventDefault();
        this.updatePassword();
    }
  
      handleInputChange(e){
          this.setState({[e.target.name]:e.target.value});
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length)
             return;
          this.createImage(files[0]);
      }

      createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            profilePic: e.target.result
          })
        };
        reader.readAsDataURL(file);
      }

      updateProfile(){
        const url = Api.UPDATE_PROFILE;
        const { profilePic, taglineProfessional, 
        phoneNumber, address, description} = this.state;
        const data = {
            profile_pic: profilePic,
            tagline_professional: taglineProfessional,
            phone_number: phoneNumber,
            address: address,
            description: description
        }

        const requestData = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }
        return  axios.post(url, data, requestData).then(response => {
            console.log(response.data[1])
            if(response.data[1].success === 1){
                this.showSuccessNotification(response.data[1].msg);
            }else{
                this.showErrorNotification(response.data[1].msg);
            }
        })
      }

      showSuccessNotification(message){
          const data = {
              message: message,
              description: 'Successful request',
              duration: 0
          }
          notification.success(data);
      }

      showErrorNotification(message){
        const data = {
            message: message,
            description: 'Error occured, please check the error and try again',
            duration: 0
        }
        notification.error(data);
    }

      updatePassword(){
        const url = Api.UPDATE_PASSWORD;
        const { currentPassword, newPassword } = this.state;
        const data = {
            current_password: currentPassword,
            new_password: newPassword,
        }
        const requestHeader = {
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }
        return  axios.post(url, data, requestHeader).then(response => {
            if(response.data[1].success === 1){
                this.showSuccessNotification(response.data[1].msg);
            }else{
                this.showErrorNotification(response.data[1].msg);
            }
        })
      }
  
  render() {
    const user = localStorage.getItem('role')
    return (
      <React.Fragment>
          <DashBoardSettingsComponent 
            handleInputChange={this.handleInputChange}
            handleSubmitProfileUpdate={this.handleSubmitProfileUpdate}
            handleSubmitPasswordUpdate={this.handleSubmitPasswordUpdate}
            state={this.state}
            user={user}/>
      </React.Fragment>
    )
  }
}
