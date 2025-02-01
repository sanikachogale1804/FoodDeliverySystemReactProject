import React from 'react'

import users from '../CSS/UserRegister.css'
import { addUsers } from '../Services/UserService'
import { toast, ToastContainer } from 'react-toastify';

function UserRegister() {

    const submitHandler = (e) => {
        e.preventDefault();
        addUsers({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value,
            phoneNumber: e.target.phoneNumber.value,
            address: e.target.address.value
        }).then(data => {
            return data;
        }).then(() => {
            toast.success("Registered Succesfully!");
            e.target.reset();
        });

    }
    return (
        <div className="register-container">
            <div className="form-wrapper">
                <div className="form-header">
                    <h2>Registration</h2>
                    <p>Create a new account</p>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Email"
                            // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            title="Please enter a valid email address."
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Password"
                            minLength="6"
                            title="Password must be at least 6 characters long."
                        />
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            required
                            placeholder="Role"
                            minLength="4"
                        />
                    </div>

                    <div className="form-group">
                        <label >Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            required
                            placeholder="Phone Number"
                            pattern="^[0-9]{10}$"
                            title="Please enter a valid 10-digit phone number."
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            id="address"
                            name="address"
                            required
                            placeholder="Enter your address"
                            rows="4"
                            minLength="10"
                            title="Address must be at least 10 characters long."
                        />
                    </div>

                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>

                <div className="form-footer">
                    <p>Have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UserRegister
