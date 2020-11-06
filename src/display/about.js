import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="card">
            <div className="card-content">
              <h6>
                  <strong>PERSONAL INFORMATION</strong>
              </h6>
              <div className="row">
                  <div className="col s12 m6">
                      <p>
                          <strong>FullName: </strong> Van Thi Thao
                      </p>
                      <p>
                      <strong>Gender: </strong> Female
                      </p>
                      <p>
                      <strong>Date of birthday: </strong> 08-05-1999
                      </p>
                      <p>
                      <strong>Email: </strong> thaovan8599@gmail.com
                      </p>
                  </div>
                  <div className="col s12 m6">
                      <p>
                          <strong>Address: </strong> Dai Hoa- Dai Loc- Quang Nam
                      </p>
                      <p>
                      <strong>Phone: </strong> 0379838029
                      </p>
                      <p>
                      <strong>Main Language: </strong> Vietnamese
                      </p>
                      <p>
                      <strong>Second Language: </strong> English
                      </p>
                  </div>
              </div>
            </div>
            <div className="card-action">
                <h6><strong>Introduce Yourself</strong></h6>
                <p>Hi ! My name is Thao and I am 21 years old. I am from Danang.  I have experience in web design in which I am good
                 at front end and back end, I am a cheerful person with everyone.  If I work at your company I will do my best</p>
            </div>
        </div>
        
    );
  }
}
