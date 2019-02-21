import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/authAction'
import {Redirect} from 'react-router-dom';
import {Alert} from 'reactstrap';

class LoginContainer extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          name: '',
          pass: '',
          visible: true,
      }

      this.onLoginClick = this.onLoginClick.bind(this);
      this.handleOnChange = this.handleOnChange.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  handleOnChange(e)
  {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  onLoginClick(e) {
      e.preventDefault();

      const name = this.state.name;
      const pass = this.state.pass;
      this.props.login(name, pass);
  }


  render() {
    let authRedirect = null;
    if (this.props.isLoginedin) {
        authRedirect = <Redirect to={this.props.authRedirectPath}/>
    }

    if (this.props.isLoginedin && this.props.location.state !== undefined) {
        return (
            <Redirect to={this.props.location.state.from} />
        );
    }

    const alert = <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
        {this.props.errors[0]}
      </Alert>
    return (
      <div className="container">
         {authRedirect}
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div class="card-header">Login</div>
                    <div className="card-body">
                        {this.props.errors.length ? alert : null }
                        <form onSubmit={this.onLoginClick}>
                            <div className="form-group row">
                                <label  className="col-md-4 col-form-label text-md-right">Email</label>
                                <div className="col-md-6">
                                    <input name="name" type="email" onChange={this.handleOnChange} value={this.state.name} className="form-control" placeholder="email"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label  className="col-md-4 col-form-label text-md-right">Password</label>
                                <div className="col-md-6">
                                    <input name="pass" type="password" onChange={this.handleOnChange} value={this.state.pass} className="form-control" placeholder="your user password"/>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                    
                                    <a class="btn btn-link" href="">
                                        Forgot Your Password?
                                    </a>
                                   
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    isLoginedin: state.auth.isAutheticate,
    errors: state.auth.errors,
    authRedirectPath: state.auth.authRedirectPath,
})

export default connect(mapStateToProps, {login})(LoginContainer);
