import React from 'react'

export class ScheduleItem extends React.Component{
    render(){
        return(
            <div className="scheduleitem col-xs-12">
                <h4>{this.props.itemName} <span>{this.props.itemTime}</span></h4>
                <p>{this.props.itemDescription}</p>
            </div>
        )
    }
}

module.exports = ScheduleItem;
