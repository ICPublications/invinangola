import React from 'react';

export class SplitSectionEmpty extends React.Component{
    render(){
        return(
            <div id={this.props.id} className={`splitsection-empty`}>
                {this.props.children}
            </div>    
        )
    }
}

module.exports = SplitSectionEmpty;
