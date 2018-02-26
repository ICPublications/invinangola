import React from 'react';
import Sections from '../index.js'
//import Logo from 'components/logo/index.js';
import landingbg from 'images/landingbg.png';

export class Landing extends React.Component{
    render(){
        return(
            <Sections id={this.props.id} extraBgElements={this.props.extraBgElements} containerType="container" template={this.props.template} typeClass="landing" bg={landingbg}>
                <p className="introText">{this.props.introText}</p>
                {this.props.children}
            </Sections>
        )
    }
}

module.exports = Landing;