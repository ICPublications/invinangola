import React from 'react';

export class SplitSection extends React.Component{
    render(){
        return(
            <section id={this.props.id} className={`splitsection`}>
                {this.props.children}
            </section>    
        )
    }
}

module.exports = SplitSection;