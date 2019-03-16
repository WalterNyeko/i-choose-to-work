import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUser, logout} from '../../store/actions/auth/loginAction'
import {Link} from 'react-router-dom'
import { routes } from '../../constants';
import logoutIcon from '../Header/logout-icon.png';

class UserMenu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: []
    }
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
      this.props.getUser();
  }

  logout()
  {
    this.props.logout()
  }
  
  render() {
    return (
      <>
        <div class="header-widget">
                <div class="header-notifications user-menu">
                    <div class="header-notifications-trigger">
                        <a href={routes.DASHBOARD}><div class="user-avatar status-online"><img src="user.png" alt=""/></div></a>
                    </div>
                    
                </div>
            </div>
            <div class="header-widget">
            <div class="header-notifications user-menu">
                    <div class="header-notifications-trigger">
                        <a href="#"><div onClick={this.logout} class="icon-material-outline-power-settings-new"></div></a>
                    </div>
                </div>
            </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    role: state.auth.role
})

export default connect(mapStateToProps, {getUser, logout})(UserMenu);
