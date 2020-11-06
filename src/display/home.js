import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import Navbar from './navbar';
import About from './about';
import Profile from './profile';
import Skills from './skills';
import Experiences from './experiences';
import Language from './language';
export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8">
                            <About />
                        </div>
                        <div className="col s12 m4">
                            <Profile />
                        </div>
                       
                 </div>
                 <Skills />   
                 <Experiences /> 
                 <Language /> 

                </div>
            </section>
        )
    }
}