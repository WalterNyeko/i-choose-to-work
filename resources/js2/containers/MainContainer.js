import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {isLogin} from '../actions/authAction';
import {Route, HashRouter as Router, withRouter, Redirect} from 'react-router-dom';
import HomeComponent from '../components/Home';
import ProtectedComponent from '../components/Protected';
import HeaderComponent from '../components/Header'
import LoginContainer from './Login';
import RegisterComponent from './Register';
import RequestContainer from './Requests';
import MakeRequest from './MakeRequest';
import FindWork from './FindWork';
import Dashboard from './Dashboard';
import RegisterServiceProvider from './RegisterServiceProvider/RegisterServiceProvider';

class MainContainer extends Component {
  constructor(props)
  {
      super(props);
  }

  componentWillMount()
  {
      this.props.isLogin();

  }

  componentDidMount()
  {
        // this.props.getUser(this.props.token);
  }

  componentWillReceiveProps(nextProps)
  {
    //   if(nextProps.token)
    //   {
    //       this.props.getUser(nextProps.token)
    //   }
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                this.props.isLoginedin ? (
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
        <Fragment>
            <HeaderComponent/>
            <main class="py-4">
                <Route path="/" exact component={() =><HomeComponent/>} />
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/register" exact component={RegisterComponent} />
                <Route path="/register-provider" exact component={RegisterServiceProvider} />
                <Route path="/request-service" exact component={RequestContainer}  />
                <PrivateRoute path="/request/:id" exact component={MakeRequest} />
                <Route path="/requests"  exact component={FindWork} />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
            </main>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
    isLoginedin: state.auth.isAutheticate,
    token: state.auth.token,
    user: state.auth.user,
})

export default connect(mapStateToProps, {isLogin})(MainContainer);
