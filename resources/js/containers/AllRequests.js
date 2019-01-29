import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import AllRequestsComponent from '../components/AllRequests';

export default class AllRequests extends Component {
  constructor(props)
  {
    super(props)
  }
  
  componentDidMount()
  {
    localStorage.setItem('serviceProvider', this.props.userid)
  }

  render() {
    return (
      <Router>
            <div className="row">
                <Route path="/" exact component={AllRequestsComponent} />
            </div>
      </Router>
    )
  }
}

if(document.getElementById('allrequests'))
{
    const element = document.getElementById('allrequests');

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<AllRequests {...props} />, document.getElementById('allrequests'));
}
