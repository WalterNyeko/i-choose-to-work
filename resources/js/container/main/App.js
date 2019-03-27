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
// import Forgot from '../../components/Forgot/Forgot';
import {getUser} from '../../store/actions/auth/loginAction'
import Registera from '../Registera/Registera';
import RegisterProvider from '../Registera/RegisterProvider';
import ServiceForm from '../../components/services/ProviderServices/ProviderServices';
import RequestForm from '../ServiceRequest/RequestForm';
import ServiceProviders from '../ServiceRequest/ServiceProviders';
import SingleRequest from '../../components/requests/SingleRequest';
import Biding from '../Biding/Biding';
import NotFound from '../NotFound';
import 'jquery/dist/jquery.min.js';
import '../../../../node_modules/jquery/dist/jquery';
import '../../../../node_modules/popper.js';
import '../../../../node_modules/bootstrap-4-react/dist/bootstrap-4-react';
import Dashboard from '../Dashboard/Dashboard';
import ServiceSearch from '../../components/search/ServiceSearch';
import ProviderProfile from '../../components/serviceProviders/ProviderProfile';
import DashboardLandingPage from '../../components/Dashboards/containers/DashboardLandingPage';
import DashboardBookmarks from '../../components/Dashboards/containers/DashboardBookmarks';
import DashboardReviews from '../../components/Dashboards/components/DashboardReviews';
import DashboardManageTasks from '../../components/Dashboards/containers/DashboardManageTasks';
import DashboardManageBidders from '../../components/Dashboards/components/DashboardManageBidders';
import DashboardActiveBids from '../../components/Dashboards/components/DashboardActiveBids';
import DashboardSettings from '../../container/Dashboard/DashboardSettings';


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
    if(this.props.isLogin)
    {
      this.props.getUser()
    }
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
    const role = localStorage.getItem('role')
    const ProviderRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                role === 'provider' ? (
                    <Component {...props} {...rest}  />
                ) : (
                    <NotFound/>
                )
            )} />
        );
    

    return (
      <Router>
        <>
            <MainNav/>
            
                <Route exact component={Home}  path="/"/>
                <Route exact path={routes.LOGIN} component={Login} />
                <Route exact path={`${routes.REQUEST}/:id?`} component={MakeRequest} />
                <Route exact path={routes.SERVICE_REQUESTS} component={Gigs} />
                {/* <Route exact path={routes.FORGOT_PASSWORD} component={Forgot} /> */}
                <Route exact path={routes.REGISTER} component={Registera} />
                <Route exact path={routes.BECOME_PROVIDER} component={RegisterProvider} />
                <PrivateRoute exact path={routes.PROVIDER_SERVICE} component={ServiceForm} />
                <PrivateRoute exact path="/book/:id" component={RequestForm} />
                <PrivateRoute exact path={`${routes.SERVICE_PROVIDERS}/:id`} component={ServiceProviders} />
                <PrivateRoute exact path='/view-request/:id' component={SingleRequest} />
                <ProviderRoute exact path={`${routes.BIDDING}/:id`} component={Biding} />
                {/* <PrivateRoute exact path={routes.DASHBOARD} component={Dashboard} /> */}
                <PrivateRoute exact path='/profile/:id' component={ProviderProfile} />
                <Route exact path="/search-services/:searchKey" component={ServiceSearch} />
                
                <Route exact path="/dashboard" component={DashboardLandingPage} />
                <Route path="/dashboard/dashboardbookmarks" component={DashboardBookmarks} />
                <Route path="/dashboard/dashboardreviews" component={DashboardReviews} />
                <Route path="/dashboard/dashboardmanagetasks" component={DashboardManageTasks} />
                <Route path="/dashboard/dashboardmanagebidders" component={DashboardManageBidders} />
                <Route path="/dashboard/dashboardactivebids" component={DashboardActiveBids} />
                <Route path="/dashboard/dashboardsettings" component={DashboardSettings} />
        </> 
      </Router>
    )
  }
}

const mapStateToProps = state => ({
    isLogin: state.auth.isLogin,
    token: state.auth.token,
    user: state.auth.user,
    role: state.auth.role
})

export default connect(mapStateToProps, {getUser})(MainApp);
