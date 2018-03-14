import React from 'react';
import ReactDOM from 'react-dom';
// import style from 'css/main.css';
//import Sections from 'components/Sections/index.js';
import bootstrap from 'bootstrap-loader';
import Landing from 'components/Sections/Landing/index.js'
import style from 'sass/main.scss';
import landingcornerpiece from 'images/landingcornerpiece.png';
import logo from 'images/logo.png';
import CompanyCarousel from 'components/Sections/CompanyCarousel/index.js';
import PhotoCarousel from 'components/Sections/PhotoCarousel/index.js';
import SplitSection from 'components/Sections/SplitSection/index.js';
import SplitSectionText from 'components/Sections/SplitSection/text.js';
import SplitSectionImage from 'components/Sections/SplitSection/image.js';
import SplitSectionEmpty from 'components/Sections/SplitSection/empty.js';
import SSI from 'images/ssi.jpg';
import SponsorsByCategory from 'components/SponsorsByCategory/index.js';
import Sections from 'components/Sections/index.js';
import FeedBox from 'components/FeedBox/index.js';
import ContactBox from 'components/ContactBox/index.js';
import SingleCategory from 'components/SingleCategory/index.js';
import ScheduleItem from 'components/ScheduleItem/index.js';
import SSI2 from 'images/busan.jpg';
import mapPlaceholder from 'images/busanmapgrey.jpg';
import Navbar from 'components/Navbar/index.js';
import NavItem from 'components/Navbar/NavItem/index.js';
import ScrollingDownload from 'components/ScrollingDownload/index.js';
import PreviousWinners from 'components/PreviousWinners/index.js';
import { WSAEHOSTDOWN } from 'constants';
import Covington from 'images/covington-logo.gif';
import AB from 'images/abm-logo.png';
import ABk from 'images/abk-logo.svg';
import Events from 'images/events.png';

const categoriesArray = 
[
    {categoryName:'African Bank of the Year', lastYearsWinner:'GT Bank Group', engLink: 'https://icpublications.formstack.com/forms/african_bank_of_the_year_2018', frLink: '', postID:'1', description: 'This award goes to the bank in Africa that has demonstrated a high performance across various metrics. It will have considerably changed the banking landscape by reaching out to new customers, offering new services, adopting inclusiveness by bringing the unbanked into the banking space, making use of new technologies, and helping to drive growth through a stronger financial sector'}, 
    {categoryName:'African Banker of the Year', lastYearsWinner:'Dr Benedict Okey Oramah, President, Afrexim Bank', engLink: 'https://icpublications.formstack.com/forms/african_banker_of_the_year_2018', frLink: '', postID:'12121', description: 'Through their leadership and vision, the winner will have overseen strong financial performance within their organisation and will have successfully guided their institution to new heights in the industry.'}, 
    {categoryName:'Central Bank Governor of the Year', lastYearsWinner:'Rameswurlall Basant Roi (Mauritius)', engLink: '', frLink: '', postID:'21121', description: ' This award goes to the central bank governor who has successfully reformed and transformed the financial sector, through proper regulation and policies, as well as created a stable and predictable environment for investment and growth.'}, 
    {categoryName:'Investment Bank of the Year', lastYearsWinner:'Rand Merchant Bank (South Africa)', engLink: 'https://icpublications.formstack.com/forms/investment_bank_of_the_year_2018', frLink: '', postID:'21211', description: 'The winner will have changed the landscape of investment banking and finance by encouraging and increasing deal and transaction flow in the continent, and by delivering pioneering solutions for investors and African clients alike.'},
    {categoryName:'Best Regional Bank in Africa*', lastYearsWinner:'Attijariwafa Bank - Maroc', engLink: 'https://icpublications.formstack.com/forms/best_regional_bank_2018', frLink: '', postID:'21212', description: 'This award goes to a bank operating either across a specific region or in one country within a region (North, East, South, West or Central Africa). The winner will have excelled in the banking industry in its region by reaching out to new customers, offering new services, adopting inclusiveness by bringing the unbanked into the banking space, making use of new technologies and contributing to a stronger financial sector.'},
    {categoryName:'Best Retail Bank in Africa', lastYearsWinner:'Equity Bank (Kenya)', engLink: 'https://icpublications.formstack.com/forms/best_retail_bank_in_africa_2018', frLink: '', postID:'21213', description: 'The winner of this category will have expanded its retail services through new products, new facilities, and a wider consumer network, and improved access to financial services, particularly savings and checking accounts, mortgages, personal loans, and debit or credit cards. The bank’s application should demonstrate strong corporate governance and its wider corporate social policy impact on the community it serves.'},
    {categoryName:'Innovation in Banking', lastYearsWinner:'Ecobank Mastercard', engLink: 'https://icpublications.formstack.com/forms/award_for_innovation_in_banking_2018', frLink: '', postID:'21214', description: 'This award goes to the African bank that has demonstrated original and practical uses of technology to provide customer convenience, improved and more affordable services, and greater access to the financial services industry in Africa.'},
    {categoryName:'Lifetime Achievement Award*', lastYearsWinner:'City', engLink: '', frLink: '', postID:'21215', description: 'This award goes to an African banker who throughout his or her career has worked tirelessly to strengthen and promote banking as well as the role of the financial services sector on the African continent.'},
    {categoryName:'Finance Minister of the Year*', lastYearsWinner:'SE Amadou Ba (Senegal)', engLink: '', frLink: '', postID:'21216', description: 'This award goes to the African minister of finance who has carried through prudent macro economic policies and, through reforms and his or her actions, has shown skill and dexterity to create the conditions of an appealing investment climate.'},
    {categoryName:'African Banker Icon*', lastYearsWinner:'Waheed A. Olagunju, Bank of Industry', engLink: '', frLink: '', postID:'21217', description: ' The ‘Icon’ category is awarded to an individual or institution for their outstanding contribution in the field of business, banking and finance. They are chosen by the awards committee, who will have noted excellence in their area of expertise and for their work in helping to change the perception of Africa as well as contributing to the establishment of best global practice in the continent. This award in the past has been given to outstanding individuals such as Dr Ngozi Okonjo-Iweala, who needs no introduction, Adebayo Ogunlesi, one of Wall Street’s most eminent financiers, and Eleni Gabre-Madhin, founder of the Ethiopian Commodities Exchange.'},
    {categoryName:'Infrastructure Deal of the Year', lastYearsWinner:'AFC and Harith Asset Merger (Africa Finance Corporation)', engLink: 'https://icpublications.formstack.com/forms/infrastructure_deal_of_the_year_2018', frLink: '', postID:'21218', description: 'This will be awarded for the deal which has had the most significant impact. The committee will take into consideration the complexity of the deal, its size, its structure and the groundbreaking role it may have played (ie ‘replicability’). The deal may provide a template for such future transactions and will have highlighted new possibilities and new solutions within the sector or industry it relates to. '},
    {categoryName:'Deal of the Year - Debt', lastYearsWinner:'Helios Towers, $600m debut High Yield Offering (Standard Bank)', engLink: 'https://icpublications.formstack.com/forms/deal_of_the_year_2018_debt', frLink: '', postID:'21219', description: 'This winning deal may provide a template for such future transactions and will have highlighted new opportunities and raised country sector or regional investment profiles, or some other innovation in debt deal financing within Africa.'},
    {categoryName:'Deal of the Year - Equity', lastYearsWinner:'OGP sale to Helios (Argentil)', engLink: 'https://icpublications.formstack.com/forms/deal_of_the_year_2018_equity', frLink: '', postID:'21210', description: 'The winning deal will have highlighted new opportunities and raised sector or regional investment profiles. The judges will consider the size, complexity and impact in terms of changing perceptions of Africa as a place to do business. '},
    {categoryName:'Award for Financial Inclusion', lastYearsWinner:'Caisse Centrale de Garantie (Morocco)', engLink: 'https://icpublications.formstack.com/forms/award_for_financial_inclusion_2018', frLink: '', postID:'2121', description: 'This category has been widened to include more than just microfinance. The winner will have best succeeded in delivering financial products and services to wider parts of society, particularly to the most disadvantaged and low income segments, ultimately contributing to financial inclusion, development and growth.'},
    {categoryName:'Socially Responsible Bank of the Year', lastYearsWinner:'Groupe Crédit Agricole (Morocco)', engLink: 'https://icpublications.formstack.com/forms/socially_responsible_bank_of_the_year_2018', frLink: '', postID:'21222', description: 'The panel of judges will be seeking concrete examples of projects and initiatives within the institutions that have had a sustainable impact on the communities they are geared towards. The award is aimed at companies that go beyond the philanthropic use of funds to use their overall knowledge, resources and reputation to improve the lives of the less advantaged in society.'}
];
const categoriesMatrix = categoriesArray.map((category) =>
   <SingleCategory key={category.postID} categoryName={category.categoryName} lastYearsWinner={category.lastYearsWinner} engLink={category.engLink} frLink={category.frLink} description={category.description}></SingleCategory>
);

const scheduleItemsArray = [{postID:'23232', name:'Banking in Africa: 2020', time:'9:00am - 5:00pm', desctription: 'Banking in Africa is big business etc. etc.'}, {postID:'231142', name:'Banking in Africa: 2020', time:'9:00am - 5:00pm', desctription: 'Banking in Africa is big business etc. etc.'}, {postID:'211112', name:'Banking in Africa: 2020', time:'9:00am - 5:00pm', desctription: 'Banking in Africa is big business etc. etc.'}];
const scheduleItems = scheduleItemsArray.map((scheduleItem) => 
    <ScheduleItem key={scheduleItem.postID} itemName={scheduleItem.name} itemTime={scheduleItem.time} itemDescription={scheduleItem.desctription}></ScheduleItem>
);

const sponsors = 
[
    {sponsorName: 'afdb', sponsorCategory: 'highpatron', companyLogoURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/02/logos-abka-.png',companyLightLogoURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/02/adf-light.png', companyURL:'https://www.afdb.org/', postID:'229290'},
    {sponsorName: 'agf', sponsorCategory: 'platinum', companyLogoURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/02/agf-1.png',companyLightLogoURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/02/adf-light.png', companyURL:'http://www.africanguaranteefund.com', postID:'229292'}
];
const sponsorTypes = 
[
    {categoryType:'highpatron', categoryName: 'High Patron', catID:'1234'},
    {categoryType:'platinum', categoryName: 'Platinum Sponsor', catID:'1235'}
]
let allSponsors = [];
const sponsorHeadings = sponsorTypes.map((sponsorType) => 

{
    let associatedSponsors=[];
    allSponsors = [];

    for (var i = 0; i<sponsors.length; i++){
        if(sponsors[i].sponsorCategory==sponsorType.categoryType){
            associatedSponsors.push(sponsors[i]);
        }
        allSponsors.push(sponsors[i]);
    }   
    return <SponsorsByCategory key={sponsorType.catID} sponsorCategoryType={sponsorType.categoryType} sponsorCategoryDisplayName={sponsorType.categoryName} sponsorArray={associatedSponsors}></SponsorsByCategory> 
});


let extraHTML = <img className="col-xs-12 col-md-4" src={landingcornerpiece} style={{position:'absolute', top:'0', right:'0', paddingRight:'0'}} />

ReactDOM.render(
    <div>
        <Navbar height='100px' bgColor='white'>
            <NavItem href="#firstsplitsection">About</NavItem>
            <NavItem href="#mainsponsor-section">Menu1</NavItem>
            <NavItem href="#contact-section">Menu2</NavItem>
        </Navbar>
        
        <Landing id="landing-section" template="threequarter-screen-left">
            <div className="col-xs-12 col-sm-8 col-md-6" style={{backgroundColor:'red'}}>
                <h1><img src={logo} className="img-responsive" style={{width: '250px', marginLeft: '290px'}}/></h1>
                <h5 style={{marginLeft: '290px', marginTop:'50px', color:'white', fontWeight:'bold'}}>New York, Semptember 2018</h5> 
            </div>
        </Landing>
        <Sections id="about-section" typeClass="normal" containerType="container-fluid" style={{marginLeft:'170px'}}>
            <h3 className="col-xs-12 col-sm-7">
            The Invest in Angola Forum, organised by IC Publications and hosted by Covington, will convene the business and investment community in New York City, in September 2018. 
With a clear focus on bringing the best projects into the table, the Invest in Angola Forum will focus on showcasing the most recent business opportunities in the country. 
Angola has been undertaking ambitious reforms to foster greater investment and private sector participation in key economic areas, namely: IT & Telecoms, Banking, Energy and Agribusiness.
Underpinned by a renewed confidence, strong & stable government and a friendly business environment, the Invest in Angola Forum is hosted at the right time. 

            </h3>
            <ul className="col-xs-12 col-sm-4 col-sm-offset-1" style={{listStyleType:'none'}}>
                <li><h4>Programme Highlights</h4></li>
                <li style={{borderTop:'1px solid', marginBottom:'10px', paddingTop: '5px'}}>The new government reforms</li>
                <li style={{borderTop:'1px solid', marginBottom:'10px', paddingTop: '5px'}}>Privatisation and partnerships with Angola public companies</li>
                <li style={{borderTop:'1px solid', marginBottom:'10px', paddingTop: '5px'}}>Powering Angola - Sustainable Energy Mix</li>
                <li style={{borderTop:'1px solid', marginBottom:'10px', paddingTop: '5px'}}>Presentation of 5 bankable projects in Angola (Energy, Infrastructure, and Agribusiness)</li>
            </ul>
        </Sections>
        <SplitSection id="firstsplitsection">
            <SplitSectionText>
                <h2>Meet New Partners</h2>
                <img className="mobile-image img-responsive" src={SSI} alt="An image from the African Banker Awards 2013" />
                <p>
                Sponsors will benefit from networking opportunities with government officials, current and potential investors, private sector companies, intergovernmental and multilateral organisations, consultancies and advisory firms, and other stakeholders, including high level speakers. Opportunities for scheduled or impromptu meetings are also available and can be facilitated in line with sponsors’ objectives. 
                </p>
                <ul>
                    <li>Sovereign and corporate issuers (current and prospective)</li>
                    <li>Government organisations </li>
                    <li>Leading Angolan and International Private Sector players</li>
                    <li>Angolan leading public companies (banking, Telecom, Oil & Gas)</li>
                    <li>Institutional investors (asset managers, sovereign wealth funds, pension funds)</li>
                    <li>Investment bankers </li>
                </ul>
            </SplitSectionText>
            <SplitSectionImage imageURL={SSI}>
            </SplitSectionImage>
        </SplitSection>
        <Sections id="info-section" typeClass="normal" containerType="container" style={{backgroundColor:'white'}}>
            <h2 className="col-xs-12" style={{color:'red'}}>Sponsorship Opportunities</h2>
            <div  className="col-xs-12">
                
                <p>
                    Sponsoring this Forum offers wide-ranging benefits, giving your institution a unique platform at the conference, as well as through our publications African Business, New African and African Banker, enhancing your corporate profile to influential participants. Our dedicated team will work closely with the sponsors to tailor their involvement in the summit and maximise media exposure.
                </p>
                <h4>Exposure & Visibility</h4>
                    <p>
                        Exposure & Visibility: Pre, during and post-event marketing exposure is offered across bespoke Diamond, Platinum, Gold and Silver packages. At the event, sponsors will benefit from branding and signage featuring corporate logos displayed prominently. Post event communication with delegates and the wider business community will include sponsor logos. Sponsors will also benefit from extensive media coverage in our business and current affairs magazines African Banker, African Business, and New African, as well as from international media covering the event.
                    </p>
            </div>
        </Sections>
        <Sections id="footer-section" typeClass="normal" containerType="container" style={{backgroundColor:'#ededed'}}>
            <div className="col-xs-12 col-sm-4">
                <h4>Media Partners</h4>
                <img src={AB} className="col-xs-6" />
                <img src={ABk} className="col-xs-6" />
            </div>
            <div className="col-xs-12 col-sm-4">
                <h4>Organised By</h4>
                <img src={Events} className="col-xs-6" />
            </div>
            
            <div className="col-xs-12 col-sm-4">
                <h4>Hosted By</h4>
                <img src={Covington} className="col-xs-6" />
            </div>
        </Sections>
    </div>, 
  
    document.getElementById('app')
)