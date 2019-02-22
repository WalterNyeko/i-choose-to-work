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
      <Fragment>
        <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Ichuzz2work
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    <ul className="navbar-nav mr-auto ml-auto">
                        {links}
                    </ul>

                    {this.props.isLoginedin === true
                         ? 
                        <ul className = "navbar-nav ml-auto" >
                            <li className="nav-item" onClick={this.handleLogout}>
                                <a className="nav-link"   >Logout</a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle text-capitalize" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                     {/* {this.props.isLoginedin === true ? this.props.user.name : null } */}
                                        <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <NavLink class="dropdown-item"
                                       to="/dashboard">
                                        Dashboard
                                    </NavLink>
                                </div>
                            </li>
                        
                        </ul>
                        : 
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login / Register</NavLink>
                            </li>
                            
                            <li className="nav-item" >
                                <NavLink to="register-provider" className="btn btn-outline-danger" >Become Service Provider</NavLink>
                            </li>
                        </ul>
                    }
                        
                </div>
            </div>
        </nav>
        <div>
            
        </div>
      </Fragment>
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
