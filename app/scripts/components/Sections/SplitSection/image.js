import React from 'react';

export class SplitSectionText extends React.Component{
    render(){
        return(
            <div id={this.props.id} className={`splitsection-image`} style={{backgroundImage:'url(' + this.props.imageURL + ')'}}>
                {this.props.children}
            </div>    
        )
    }
}

module.exports = SplitSectionText;