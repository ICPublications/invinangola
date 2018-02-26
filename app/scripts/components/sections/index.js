import React from 'react';

export class Sections extends React.Component{
    getStyle(){
        var styles;
        if(this.props.bg!=undefined){
            styles = {backgroundImage: 'url(' + this.props.bg + ')'};
        }else{
            styles ={};
        }

        return styles;
    }
    componentDidMount() {
    /*
        window.addEventListener('load', function(){
                var heightsH4 = $(".singlecategory h4").map(function() {
                    return $(this).height();
                }).get(),
            
                maxHeightH4 = Math.max.apply(null, heightsH4);
            
                $(".singlecategory h4").height(maxHeightH4);
    
                var heightsH5 = $(".singlecategory h5").map(function() {
                    return $(this).height();
                }).get(),
            
                maxHeightH5 = Math.max.apply(null, heightsH5);
            
                $(".singlecategory h5").height(maxHeightH5);

                var heightsp = $(".singlecategory p").map(function() {
                    return $(this).height();
                }).get(),
            
                maxHeightp = Math.max.apply(null, heightsp);
            
                $(".singlecategory p").height(maxHeightp);
        });

        */
    }

    render(){
        
        return(
            <section id={this.props.id} className={`${this.props.typeClass} ${this.props.template}`} style={this.getStyle()}>
                {this.props.extraBgElements}
                <div className={`${this.props.containerType}`}>
                    <div className="section-content">
                        {this.props.children}
                    </div>
                </div>
            </section>
            
        )
    }
}

module.exports = Sections;
