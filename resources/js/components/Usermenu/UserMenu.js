import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUser, logout} from '../../store/actions/auth/loginAction'
import {Link} from 'react-router-dom'
import { routes } from '../../constants';

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
                        <a href="#"><div class="user-avatar status-online"><img src="user.png" alt=""/></div></a>
                    </div>

                    
                    <div class="header-notifications-dropdown">

                        
                        <div class="user-status">

                            
                            <div class="user-details">
                                <div class="user-avatar status-online"><img src="user.png" alt=""/></div>
                                <div class="user-name">
                                    {this.props.user.name} <span>{this.props.role}</span>
                                </div>
                            </div>
                            
                            
                            {/* <div class="status-switch" id="snackbar-user-status">
                                <label class="user-online current-status">Online</label>
                                <label class="user-invisible">Invisible</label>
                                <span class="status-indicator" aria-hidden="true"></span>
                            </div>	 */}
                    </div>
                    
                    <ul class="user-menu-small-nav">
                        <li><Link to={routes.DASHBOARD}><i class="icon-material-outline-dashboard"></i> Dashboard</Link></li>
                        <li><Link to={routes.DASHBOARD}><i class="icon-material-outline-settings"></i> Settings</Link></li>
                        <li><a  onClick={this.logout} ><i class="icon-material-outline-power-settings-new"></i> Logout</a></li>
                    </ul>

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
