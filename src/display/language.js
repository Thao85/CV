import React, { Component } from 'react';

export default class Language extends Component {
  render() {
    return (
        <div className="card" >
        <div className="card-content">
          <h6 className="mt-button">
            <strong>
                Language level
            </strong>
            <hr />
            <div className="row">
              <div className="col s8 m10 l10">
                <p> - English</p>
                <br></br>
                <p> - Japanese </p>
              </div>
              <div className="col s4 m2 l2">
                <p>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star "></i>
                </p>
                <br></br>
                <p>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star "></i>
                <i className="fas fa-star "></i>
                </p>
              </div>
            </div>
          </h6>
        </div>
      </div>
    );
  }
}
