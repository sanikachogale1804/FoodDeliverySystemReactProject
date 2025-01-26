import React from 'react'

function UserLogin() {
  return (
    <div class="login-form-container">
    <h2>User Login</h2>
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>

    <div class="form-footer">
      <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
  </div>
  )
}

export default UserLogin
