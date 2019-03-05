import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Route, HashRouter as Router, withRouter, Redirect} from 'react-router-dom';
import $ from 'jquery';
import MainNav from '../../components/Header/MainNav';
import Home from '../Home/Home';
import { routes } from '../../constants';
import Login from '../../components/login/Login';
import MakeRequest from '../ServiceRequest/MakeRequest';
import Gigs from '../Gigs/Gigs';
import Forgot from '../../components/Forgot/Forgot';
import {getUser} from '../../store/actions/auth/loginAction'
import Registera from '../Registera/Registera';
import RegisterProvider from '../Registera/RegisterProvider';
import ServiceForm from '../../components/services/ProviderServices/ProviderServices';
import RequestForm from '../ServiceRequest/RequestForm';
import ServiceProviders from '../ServiceRequest/ServiceProviders';


class MainApp extends Component {
  constructor(props)
  {
      super(props);
  }

  componentWillMount()
  {
      // this.props.isLogin();

  }

  componentDidMount()
  {
    //   if(this.props.isLogin )
    //   {
    //     this.props.getUser(this.props.token);
    //   }
  }

  

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                this.props.isLogin ? (
                    <Component {...props} {...rest}  />
                ) : (
                    <Redirect to={ {
                        pathname: '/login',
                        state: { from: props.location }
                    } } />
                )
            )} />
        );
    
    

    return (
      <Router>
        <>
            <MainNav/>
            
                <Route exact component={Home}  path="/"/>
                <Route exact path={routes.LOGIN} component={Login} />
                <Route exact path={routes.REQUEST} component={MakeRequest} />
                <Route exact path={routes.SERVICE_REQUESTS} component={Gigs} />
                <Route exact path={routes.FORGOT_PASSWORD} component={Forgot} />
                <Route exact path={routes.REGISTER} component={Registera} />
                <Route exact path={routes.BECOME_PROVIDER} component={RegisterProvider} />
                <PrivateRoute exact path={routes.PROVIDER_SERVICE} component={ServiceForm} />
                <PrivateRoute exact path="/book/:id" component={RequestForm} />
                <PrivateRoute exact path={`${routes.SERVICE_PROVIDERS}/:id`} component={ServiceProviders} />
        </>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
    isLogin: state.auth.isLogin,
    token: state.auth.token,
    user: state.auth.user,
})

export default connect(mapStateToProps, {getUser})(MainApp);
