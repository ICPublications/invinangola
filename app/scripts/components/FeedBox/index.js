import React from 'react';

export class FeedBox extends React.Component{
    render(){
        return(
            <div id={this.props.id} className="col-xs-12">
                {this.props.children}
            </div>
        )
        
    }
}

module.exports = FeedBox;