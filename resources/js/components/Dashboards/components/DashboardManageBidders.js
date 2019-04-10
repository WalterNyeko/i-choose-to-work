import React, { Component } from 'react';
import { Api } from '../../../constants/Api';
import DashboardManageBiddersComponent from '../containers/DashboardManageBidders';
import { showErrorNotification, showSuccessNotification } 
from '../../../container/Dashboard/DashboardSettings';

class DashboardManageBidders extends Component {
    constructor(props){
        super(props);
        this.state = {
            bidders: [],
            loading: false,
            errors: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentWillMount(){
        const { id } = this.props.match.params;
        this.retrieveBidders(id);
      }
  
      componentWillReceiveProps(props){
        const { data } = props.data;
          this.setState({
            bidders: data
          })
      }
   
      handleInputChange(e){
          this.setState({[e.target.name]:e.target.value});
      }

      handleSubmit(id){
        const url = `delivery/offers/acceptance/`;
        const data = {
          id
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

      retrieveBidders(id){
        const url = `api/delivery/requests/services/offers/${id}`;
        const requestHeader = {
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }
        return  axios.get(url, requestHeader).then((res) => {
          this.setState({
              loading: false,
              bidders: res.data.data
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