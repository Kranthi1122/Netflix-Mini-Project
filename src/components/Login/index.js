import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', failure: false, error: ''}

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  submitFailure = error => {
    this.setState({failure: true, error})
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  userState = e => {
    this.setState({username: e.target.value})
  }

  passwordState = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {username, password, failure, error} = this.state
    return (
      <div className="main-bg">
        <img
          src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1657426908/lg-devices-logo_rpfa68.png"
          className="main-heading"
          alt="website logo"
        />

        <form onSubmit={this.submitForm} className="login">
          <h1 className="loginheader">Login</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.userState}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.passwordState}
          />
          <button type="submit" className="loginButton">
            Login
          </button>
          {failure && <p className="error">{error}</p>}
        </form>
      </div>
    )
  }
}

export default Login
