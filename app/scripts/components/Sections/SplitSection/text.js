import React from 'react';

export class SplitSectionText extends React.Component{
    render(){
        return(
            <div id={this.props.id} className={`splitsection-text`}>
                <div className="col-md-10 col-md-offset-1 text-content">
                    {this.props.children}
                </div>
            </div>    
        )
    }
}

module.exports = SplitSectionText;
