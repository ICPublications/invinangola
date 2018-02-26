import React from 'react';
import OwlCarousel from 'components/OwlCarousel/index.js';

export class PhotoCarousel extends React.Component{
    getCarouselOptions(){
        var carouselOptions = {    
            center:true,
            margin:0,
            autoplay: true,
            autoplaySpeed: 4000,
            loop: true,
            nav: false,
            dots:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }
        return carouselOptions;
    }
    render(){
        return(
            <div id="photocarousel">
                <OwlCarousel carouselNo='1' carouselOptions={this.getCarouselOptions()}>
                    <img src='http://ic-events.net/wordpress/wp-content/uploads/2016/11/34899958700_dde0bd4b29_k.jpg' />
                    <img src='http://ic-events.net/wordpress/wp-content/uploads/2016/11/35157346651_8fd313c534_k-1.jpg' />
                    <img src='http://ic-events.net/wordpress/wp-content/uploads/2016/11/35157294831_81cd22798a_k.jpg' />
                    <img src='http://ic-events.net/wordpress/wp-content/uploads/2016/11/35287028735_2c824912e0_k.jpg' />
                    <img src='http://ic-events.net/wordpress/wp-content/uploads/2016/11/35157214851_00f4930456_k.jpg' />
                    <img src='http://ic-events.net/wordpress/wp-content/uploads/2016/11/35157319681_46e4d91ed5_k.jpg' />
                </OwlCarousel>
            </div>
        )
    }
    
}

module.exports = PhotoCarousel;