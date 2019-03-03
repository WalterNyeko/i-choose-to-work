import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {mainLinks, routes} from '../../constants';
import {logout, getUser} from '../../store/actions/auth/loginAction'

class MainNav extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
          name: '',
          pass: '',
          isLogin: false,
      }
  }
  componentWillMount()
  {
    // if(this.props.isLogin === true)
    // {
    //     this.props.getUser(this.props.token)
    // }
  }
  
  handleOnChange(e)
  {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  handleLogout()
  {
    //   this.props.logout()
  }

  onLoginClick(e)
  {
      e.preventDefault();

      const name = this.state.name;
      const pass = this.state.pass;
    //   this.props.login(name, pass);

      this.toggle('login');
      
  }

  render() {

    const links = mainLinks.map((route, index) => <li className="nav-item" key={index} >
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
                        <li className="nav-item" >
                                <a href="https://ichuzz2work.com/" style={{ color: 'red' }} target="blank" className="nav-link">Jobs</a>
                        </li>
                    </ul>

                    {this.props.isLogin === true
                         ? 
                        <ul className = "navbar-nav ml-auto" >
                            <li className="nav-item" onClick={() => this.props.logout()}>
                                <a className="nav-link">Logout</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link dropdown-toggle text-capitalize" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                     {this.props.user === true ? this.props.user.name : 'Account' }
                                        <span className="caret"></span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item"
                                       to={routes.DASHBOARD}>
                                        Dashboard
                                    </NavLink>
                                </div>
                            </li>
                        
                        </ul>
                        : 
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={routes.LOGIN}>Login / Register</NavLink>
                            </li>
                            
                            <li className="nav-item" >
                                <NavLink to={routes.BECOME_PROVIDER} className="btn btn-outline-danger" >Become Service Provider</NavLink>
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
    isLogin: state.auth.isLogin,
    user: state.auth.user,
    token: state.auth.token
})

const styles = {
    pro : {
        color: 'red',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'red',
    }
}

export default connect(mapStateToProps, {logout, getUser})(MainNav);
