import React, { Component } from 'react';
import { Api } from '../../../constants/Api';
import DashboardActiveBidsComponent from '../containers/DashboardActiveBids';

class DashboardActiveBids extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeBidders: [],
            loading: false,
            errors: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
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
            user={user}/>
      </React.Fragment>
    )
  }
}
export default DashboardActiveBids;