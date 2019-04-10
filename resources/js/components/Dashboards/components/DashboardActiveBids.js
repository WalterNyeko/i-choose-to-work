import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Api } from '../../../constants/Api';
import DashboardActiveBidsComponent from '../containers/DashboardActiveBids';
import {
    showErrorNotification,
    showSuccessNotification
}
from '../../../container/Dashboard/DashboardSettings';
class DashboardActiveBids extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeBidders: [],
            loading: false,
            errors: [],
            estimated_cost: '',
            delivery_time: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this);
      }

      componentWillMount(){
        this.setState({
          loading: true
        })
        this.retrieveBidders();
      }
  
      componentWillReceiveProps(props){
        const { data } = props.data;
          this.setState({
            activeBidders: data
          })
      }
   
      handleInputChange(e){
        const { name, value } = e.target;
          this.setState({[name]: value});
          console.log(this.state)
      }

      handleEdit(id, minimal_rate, delivery_time) {
          const url = `api/delivery/services/update/${id}`;
          const data = {
              minimal_rate: minimal_rate,
              delivery_time: delivery_time
          }
          const requestData = {
              headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
              }
          }
          return axios.post(url, data, requestData).then(response => {
              console.log(response.data.data)
              // if (response.data.data.is_offer_accepted === 1) {
              //     showSuccessNotification("Accepted");
              //     const {
              //         id
              //     } = this.props.match.params;
              //     this.retrieveBidders(id);
              // } else {
              //     showErrorNotification("Rejected");
              // }
          })
      }
  handleDelete(id) {
    const url = `api/delete/services/offers/${id}`;
    const data = {
        minimal_rate: this.state.minimal_rate,
        delivery_time: this.state.delivery_time
    }
    const requestData = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }
    console.log('tye')
    return axios.delete(url, data, requestData).then(response => {
        console.log(response)
        if (response.data.data && response.data.data.message === "Bid deleted successfully") {
            showSuccessNotification(response.data.data.message);
         
            this.retrieveBidders();
        } else {
            showErrorNotification("Delete Request Rejected");
        }
    })
}

      retrieveBidders(){
        const url = Api.MANAGE_ACTIVE_BIDS;
        const requestHeader = {
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }
        return  axios.get(url, requestHeader).then((res) => {
          this.setState({
              loading: false,
              activeBidders: res.data
          })
      })
        .catch((err) => {
            this.setState({
                errors: err,
                loading: false
            })
        })
      }
  
  render() {
    const user = localStorage.getItem('role')
    return (
      <React.Fragment>
          <DashboardActiveBidsComponent 
            state={this.state}
            handleInputChange={this.handleInputChange}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            user={user}/>
      </React.Fragment>
    )
  }
}

DashboardActiveBids.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}
export default DashboardActiveBids;