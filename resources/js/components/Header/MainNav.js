import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {mainLinks, routes} from '../../constants';
import {logout, getUser} from '../../store/actions/auth/loginAction'
import UserMenu from '../Usermenu/UserMenu';

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

    const links = mainLinks.map((route, index) => <li  key={index} >
                                                        <a href={route.path} activeClassName="current" >{route.label}</a>
                                                  </li>);
    return (
        <>
            <header id="header-container" class="fullwidth">

                
                <div id="header">
                    <div class="container">
                        
                        
                        <div class="left-side">
                            
                           
                            <div id="logo">
                                <a href="/"><img src="weblogo.png" alt=""/></a>
                            </div>

                            
                            <nav id="navigation">
                                <ul id="responsive">
                                    {links}
                                    <li>
                                        <a href="https://ichuzz2work.com/" target="blank">Jobs</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="clearfix"></div>
                           
                            
                        </div>
                        
                        
                        <div class="right-side">
                            {this.props.isLogin === false ?
                            <>
                                <div class="header-widget">
                                    <NavLink to={routes.LOGIN} class="log-in-button"><i class="icon-feather-log-in"></i> <span>Log In / Register</span></NavLink>
                                </div>
                                <div class="header-widget">
                                    <NavLink to={routes.BECOME_PROVIDER} class="log-in-button"><i class="icon-material-outline-monetization-on"></i> <span>Become Service Provider</span></NavLink>
                                </div>
                            </>
                            :
                            <UserMenu/>
                            }

                            
                            <span class="mmenu-trigger">
                                <button class="hamburger hamburger--collapse" type="button">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </span>

                        </div>
                    
                    </div>
                </div>
               

            </header>
            <div class="clearfix"></div>
        </>   
    )
  }
}

const mapStateToProps = state => ({
    isLogin: state.auth.isLogin,
    user: state.auth.user,
    token: state.auth.token,
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
