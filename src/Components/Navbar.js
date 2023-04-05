import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://images-cdn.brightedge.com/f00000000036389/videos.brightedge.com/assets/website/product/daily_pulse/asset-daily-pulse-logo.png" style={{width: '120px'}}alt="DAILY PULSE" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-color" id="navbarNav">
                        <ul className="navbar-nav">
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/General">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Technology">Technology</Link>
                            </li>
                            
                            
                        
                        </ul>
                    </div>
                </div>
            </nav>
      </div>
    )
  }
}
