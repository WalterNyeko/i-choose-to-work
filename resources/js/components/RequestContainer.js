import React, {Component, Fragment} from 'react';
import  ReactDOM from 'react-dom';
import {Link, HashRouter, Route} from 'react-router-dom';
import ServiceProvider from './ServiceProviders';
import Request from './Requests/RequestForm/Request';

class RequestContainer extends Component
{
    constructor(props)
    {
        super(props);

        // console.log(this.props)
    }

    componentDidMount()
    {
        localStorage.setItem('userid', this.props.userid);
        localStorage.setItem('serviceid', this.props.serviceid);
    }

    render()
    {
        const userid = this.props.userid;
        const serviceid = this.props.serviceid;
        return(
                <HashRouter>
                    <div>
                        <Route path='/' component={Request}  exact/>
                        <Route path='/service-providers/:id' component={(props) => <ServiceProvider {...this.props}/>} />
                    </div>
                </HashRouter>
        )
    }
}

if(document.getElementById('request')){
    const element = document.getElementById('request');

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<RequestContainer {...props}/>, document.getElementById('request'))
}
