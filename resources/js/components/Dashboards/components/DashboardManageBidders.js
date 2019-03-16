import React, { Component } from 'react';
import { Api } from '../../../constants/Api';
import DashboardManageBiddersComponent from '../containers/DashboardManageBidders';

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
        }
        this.handleInputChange = this.handleInputChange.bind(this);
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
          })
      }
   
      handleInputChange(e){
          this.setState({[e.target.name]:e.target.value});
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
            user={user}/>
      </React.Fragment>
    )
  }
}
export default DashboardManageBidders;