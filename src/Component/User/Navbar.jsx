import React from 'react'

import nav from '../CSS/Navbar.css'
import { Link } from 'react-router-dom'
import image from '../../img/Main_Page_Logo.jpg'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <img
                        src={image}  // Path to logo image inside public folder
                        alt="Logo"
                        style={{ width: '35px', height: '32px', marginRight: '10px' }}
                    />
                    <a class="navbar-brand" href="#">Food Delivery</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to={"/"}>Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/menu" >Menu</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to={"/aboutus"} >About Us</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to={"/contact"}>Contact</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to={"/restaurant"}>Restaurant</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to={"/menu-admin"}>Menu-Admin</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to={"/UserRegister"}>UserRegister</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
