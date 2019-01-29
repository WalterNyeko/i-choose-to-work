import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class ServiceProvider extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          loading: false,
          providers: [],
          errors: []
      }
      this.getServiceProviders = this.getServiceProviders.bind(this);
      console.log(this.props)
  }
 
  componentDidMount()
  {
    this.getServiceProviders();
  }

  getServiceProviders()
  {
      this.setState({
        loading: true
      })
      
      axios.get(`/api/providers/${this.props.serviceid}`)
            .then((res) => {
                this.setState({
                    loading: false,
                    providers: res.data,
                })
                console.log(this.state.providers)
            })
            .catch((res) => {
                console.log(res.data)
            })
      
  }

  render() {
    const providers = this.state.providers.map((provider) => <li key={provider.id}>{provider.name}</li>)
    return (
      <div className="row">
        <ul>
          {this.state.providers.length === 0 ? <p>No Providers for this service yet</p> : providers  }
        </ul>
      </div>
    )
  }
}


