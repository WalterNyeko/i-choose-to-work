import React, { Component } from 'react';
import { Api } from '../../../constants/Api';
import DashboardManageTasksComponent from '../containers/DashboardManageTasks';

class DashboardManageTasks extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            loading: false,
            errors: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      componentWillMount(){
        this.retrieveTasks();
      }
  
      componentWillReceiveProps(props){
          this.setState({
            tasks: []
          })
      }
   
      handleInputChange(e){
          this.setState({[e.target.name]:e.target.value});
      }

      retrieveTasks(){
        const url = Api.MANAGE_TASKS;
        const requestHeader = {
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        }
        return  axios.get(url, requestHeader)
        .then((res) => {
          this.setState({
              loading: false,
              tasks: res.data.data
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
          <DashboardManageTasksComponent 
            state={this.state}
            handleInputChange={this.handleInputChange}
            user={user}/>
      </React.Fragment>
    )
  }
}
export default DashboardManageTasks;