import React from 'react';
import enflag from 'images/gbflag.jpg';
import frflag from 'images/frflag.jpg';

export class Flags extends React.Component{
    getFlagSRC(langCode){
        switch(langCode){
            case 'en':
                return enflag;
            case 'fr':
                return frflag;
        }

        //Use this if want to output flags: <img src={this.getFlagSRC(this.props.langCode)} />
    }

    render(){
        return(
            <a target="_blank" href={this.props.flagLink}>
                <p>
                    {this.props.description}
                </p>
            </a> 
        )
    }
} 

module.exports = Flags;