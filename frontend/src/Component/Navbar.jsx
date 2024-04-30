import React from 'react'
import logo from './images/logo.png' 


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light  navbar-bg fixed-top">
            <div className="container-fluid">
                <img className='img-fluid logo mx-5 p-2' src={logo } alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul>

                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active text-white fw-bold" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-bold" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-bold" href="#">Solution</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-bold " href="#">Why Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  text-white fw-bold" href="#"> Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-bold" href="#"> Testimonial</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  text-white fw-bold" href="#"> About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-bold mx-5" >  <button className='cssbuttons-io-button'>Login</button></a>
                </li>

                
                </ul>
                
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar