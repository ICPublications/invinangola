import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import 'owl.carousel';

export class OwlCarousel extends React.Component{
    componentDidMount(carouselNo, carouselOptions){
        $(document).ready(function(){
            var windowWidth = $( window ).width();
            $('#carouselno' + carouselNo + ' .owl-wrapper').css('width', windowWidth);
            $('#carouselno' + carouselNo).owlCarousel(carouselOptions);
        })
        return;
    }

    render(){
        return(
            <div id={'carouselno' + this.props.carouselNo} className="owl-carousel owl-theme" >
                {this.props.children}
                {this.componentDidMount(this.props.carouselNo, this.props.carouselOptions)}
            </div>
        )
    }
}

module.exports = OwlCarousel;