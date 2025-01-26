import React from 'react'

function UserRegister() {
    return (
        <div className="register-container">
            <div className="form-wrapper">
                <div className="form-header">
                    <h2>Registration</h2>
                    <p>Create a new account</p>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="userName">Full Name</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            required
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userEmail">Email</label>
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            required
                            placeholder="Email"
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            title="Please enter a valid email address."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userPassword">Password</label>
                        <input
                            type="password"
                            id="userPassword"
                            name="userPassword"
                            required
                            placeholder="Password"
                            minLength="6"
                            title="Password must be at least 6 characters long."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userPhoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="userPhoneNumber"
                            name="userPhoneNumber"
                            required
                            placeholder="Phone Number"
                            pattern="^[0-9]{10}$"
                            title="Please enter a valid 10-digit phone number."
                        />
                    </div>

                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>

                <div className="form-footer">
                    <p>Have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        </div>
    )
}

export default UserRegister
