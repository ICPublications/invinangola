import React from 'react';

export class NavItem extends React.Component{
    handleClick(i, event) {
        event.preventDefault();
        document.querySelector(i).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    render(){
        return(
            <li>
                <a href={this.props.href}  style={{color:'white'}} className="navitemlink" onClick={this.handleClick.bind(this, this.props.href)}>
                    {this.props.children}
                </a>
            </li>            
        )
    }
}

module.exports = NavItem;
