import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {login, logout} from '../actions/authAction';
import {NavLink} from 'react-router-dom';

class HeaderComponent extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
          loginModal: false,
          registerModal: false,
          name: '',
          pass: '',
      }
      this.toggle = this.toggle.bind(this);
      this.onLoginClick = this.onLoginClick.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleOnChange= this.handleOnChange.bind(this);
  }
  componentWillMount()
  {
    
  }
  componentWillReceiveProps(nextProps)
  {
      if(nextProps.isAutheticate)
      {
          this.props.isAutheticate = nextProps.isAutheticate
      }
  }
  handleOnChange(e)
  {
      this.setState({
          [e.target.name] : e.target.value
      })
  }
  toggle(type)
  {
      if(type == 'login')
      {
          this.setState({
              loginModal: !this.state.loginModal
          })
      }
      else 
      {
          this.setState({
              registerModal: !this.state.registerModal
          })
      }
  }

  handleLogout()
  {
      this.props.logout()
  }

  onLoginClick(e)
  {
      e.preventDefault();

      const name = this.state.name;
      const pass = this.state.pass;
      this.props.login(name, pass);

      this.toggle('login');
      
  }

  render() {
    const routes = [
        {label: 'Request Service', path: '/request-service'},
        {label: 'Find Work', path: '/requests'}
    ];

    const links = routes.map((route, index) =>  <li className="nav-item">
                                                        <NavLink to={route.path} className="nav-link">{route.label}</NavLink>
                                                </li>);
    return (
      <header id="header-container" className="fullwidth">
        <div id="header">
            <div className="container">
                <div className="left-side">
                    <div className="logo">
                        <a href="#"><img src="images/logo.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
    isLoginedin: state.auth.isAutheticate,
    user: state.auth.user
})

const styles = {
    pro : {
        color: 'red',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'red',
    }
}

export default connect(mapStateToProps, {login, logout})(HeaderComponent)
