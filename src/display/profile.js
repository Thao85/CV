import React, { Component } from 'react';
import Img from '../images/hinhanh.jpg';
import {HashLink as Link} from 'react-router-hash-link';

export default class componentName extends Component {
  render() {
    return (
      <div className="card">  
      <div className="card-image">
            <img className="activator" style={{}} src={Img} alt="avatar" />
            <Link to="/CV/" className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="activator material-icons right">more_vert</i>
            </Link>

          </div>
          <div style={{textAlign: 'center'}} className="card-content">
            <span className="card-title blue-text">Van Thi Thao</span>
            <p >Tester</p>
          </div>
      </div>
    );
  }
}
