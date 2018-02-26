import React from 'react';
import SingleSponsor from './SingleSponsor/index.js';

export class SponsorsByCategory extends React.Component{
    getSponsorHeading(){
        if(this.props.sponsorArray.length>1){
            return 's';
        }else{
            if(this.props.sponsorArray.length==1){
                return '';
            }
        }    
    }

    
    getSponsors(){
        return this.props.sponsorArray.map((sponsor) => <SingleSponsor key={'byCategory'+ sponsor.postID} companyURL={sponsor.companyURL} companyLogoURL={sponsor.companyLogoURL}></SingleSponsor>);
    }

    render(){
        return(
            <div id={this.props.sponsorCategoryType} className="sponsor-section col-md-12">
                <h3>{this.props.sponsorCategoryDisplayName + this.getSponsorHeading()}</h3>
                {this.getSponsors()}
            </div>
        )
    }
}
module.exports = SponsorsByCategory;