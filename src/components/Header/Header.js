import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Hyph } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'


export default class Header extends Component {
  static contextType = UserContext
 
  handleLogoutClick = () => {
    this.context.processLogout()
    this.renderLoginLink()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <span>Welcome! {this.context.user.username}</span>{' '}
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/register'>Register</Link>
        <Hyph />
        <Link to='/login'>Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/journals'>TIDE</Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}