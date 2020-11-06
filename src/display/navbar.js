import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
export default class navbar extends Component {
    render() {
        return (            
            <nav style={{backgroundColor: 'blue'}}>
                <div className="container">
            <div className="nav-wrapper">
              <Link to='/CV/' className='brand-logo'>My CV</Link>
              <Link to='/CV/' data-target="side-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
              </Link>
             <ul className='sidenav' id='side-nav'>
              <li>
                <Link to='/CV/'>
                  <i className="fas fa-home"></i>Home
                  </Link>
              </li>
              
              
              <li>
                <Link to="/CV/educations">
                  <i className="fas fa-graduation-cap"></i>Educations
                  </Link>
              </li>
              <li>
                <Link to="/CV/contacts">
                  <i className="fas fa-address-card"></i>Contact
                  </Link>
              </li>
              <li>
                  <a href='https://drive.google.com/file/d/1nHUtIUZJh6L-xmHdAtfHnfZJf1ekLJMz/view?usp=sharing' target="blank">
                    <i className="fas fa-download"></i> Download CV
                    </a>
                </li>
           </ul>
        
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to='/CV/'>
                    <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                
                
                <li>
                  <Link to='/CV/educations'>
                    <i className="fas fa-graduation-cap"></i> Educations
                    </Link>
                </li>
                <li>
                  <Link to='/CV/contacts'>
                    <i className="fas fa-address-card"></i> Contact
                    </Link>
                </li>
                <li>
                  <a href='https://drive.google.com/file/d/1AdJdGoNmLrzahcd-xMTsfKe6midRotbA/view?usp=sharing' target="blank">
                    <i className="fas fa-download"></i> Download CV
                    </a>
                </li>
              </ul>
              
            </div>
          </div>
            </nav>
        )
    }
}