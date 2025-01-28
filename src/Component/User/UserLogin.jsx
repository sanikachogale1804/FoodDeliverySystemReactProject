import React from 'react'

import userlogin from '../CSS/UserLogin.css'

function UserLogin() {
  return (
    <div className="login-form-container">
    <h2>User Login</h2>
    <form>
      <div className="mb-3">
        <label for="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>

    <div className="form-footer">
      <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
  </div>
  )
}

export default UserLogin
