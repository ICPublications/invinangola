import React from 'react';

export class ContactBox extends React.Component{
    render(){
        return(
            <div className="col-xs-12 col-sm-6 col-md-4 contact-box col-centered">
                <img className="icon" src={this.props.contactIcon} />
                <h5>{this.props.contactType}</h5>
                <p>{this.props.contactEmail}</p>
            </div>
        )
    }
}

module.exports = ContactBox;