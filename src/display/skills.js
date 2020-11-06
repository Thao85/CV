import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
        <div>
        <div className="card">
            <div className="card-content">
                <h6 className="mt-button">
                    <strong>PROFESSION SKILLS</strong>
                </h6>
                <div className="row mt-top">
                    <div className="col s6">
                        <p>HTML</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue lighten-3" style={{width: "90%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>JAVASCRIPT</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue lighten-3" style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>CSS</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue lighten-3" style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>JQUERY</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue lighten-3" style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>PHP</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue lighten-3" style={{width: "55%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>SQL</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue lighten-3" style={{width: "65%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
