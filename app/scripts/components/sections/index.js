import React from 'react';

export class Sections extends React.Component{
    render(){
        return(
            <section className="row">
                {this.props.extraBgElements}
                <div className={this.props.containerType}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

module.exports = Sections;
