import React from 'react'

function UserRegister() {
    return (
        <div className='container border border-primary border-1 p-2 my-2 '>
            <form>
            <h1 className='bg-primary p-3 text-white text-center'> Add User</h1>
                <div className="mb-3">
                    
                    {/* User Id */}
                    <label for="exampleInputEmail1" className="form-label">User Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userId' />
                </div>
                <div className="mb-3">
                    {/* User Name */}
                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userName' />
                </div>
                <div className="mb-3">
                    {/* User Email */}
                    <label for="exampleInputEmail1" className="form-label">User Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userEmail' />
                </div>
                <div className="mb-3">
                    {/* User Password */}
                    <label for="exampleInputEmail1" className="form-label">User Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userPassword' />
                </div>
                <div className="mb-3">
                    {/* User Role */}
                    <label for="exampleInputEmail1" className="form-label">User Role</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userRole' />
                </div>
                <div className="mb-3">
                    {/* User PhoneNumber */}
                    <label for="exampleInputEmail1" className="form-label">User PhoneNumber</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userphoneNumber' />
                </div>
                 {/* Button to submit form */}
                 <button type="submit" className="btn btn-primary" >Submit</button>

            </form>
        </div>
    )
}

export default UserRegister
