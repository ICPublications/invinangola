import React from 'react';
import Sections from '../index.js'
//import Logo from 'components/logo/index.js'

export class Landing extends React.Component{
    render(){
        return(
            <Sections extraBgElements={this.props.extraBgElements} containerType="container">
                <p className="introText">{this.props.introText}</p>
                {this.props.children}
            </Sections>
        )
    }
}

module.exports = Landing;