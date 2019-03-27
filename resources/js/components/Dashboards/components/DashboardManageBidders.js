import React, { Component } from 'react';
import { Api } from '../../../constants/Api';
import DashboardManageBiddersComponent from '../containers/DashboardManageBidders';
import { showErrorNotification, showSuccessNotification } 
from '../../../container/Dashboard/DashboardSettings';

class DashboardManageBidders extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfBids: '',
            averageBid: '',
            bidRange: '',
            bidRangeRate: '',
            titleOfRequest: '',
            timeLeft: '',
            offer_id: 1,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentWillMount(){
        this.retrieveBidders();
      }
  
      componentWillReceiveProps(props){
          this.setState({
            numberOfBids: '',
            averageBid: '',
            bidRange: '',
            bidRangeRate: '',
            titleOfRequest: '',
            timeLeft: '',
            offer_id: 1,
          })
      }
   
      handleInputChange(e){
          this.setState({[e.target.name]:e.target.value});
      }

      handleSubmit(){
        console.log('accepting offer....');
        const url = Api.UPDATE_PROFILE;
        const { offer_id } = this.state;
        const data = {
          offer_id
        }

        const requestData = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }
        return  axios.post(url, data, requestData).then(response => {

            if(response.data[1].success === 1){
                showSuccessNotification(response.data[1].msg);
            }else{
                showErrorNotification(response.data[1].msg);
            }
        })
      }

      retrieveBidders(){
        const url = Api.MANAGE_BIDDERS;
        const requestHeader = {
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }
        return  axios.get(url, requestHeader).then(response => console.log(response))
      }
  
  render() {
    const user = localStorage.getItem('role')
    return (
      <React.Fragment>
          <DashboardManageBiddersComponent 
            state={this.state}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            user={user}/>
      </React.Fragment>
    )
  }
}
export default DashboardManageBidders;