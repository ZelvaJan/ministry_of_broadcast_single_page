import React from 'react';
import './MainPage.css';
import Intro from "./Intro/Intro";
import HomePage from "./HomePage/HomePage";
import About from "./About/About";
import DisableScroll from "./utils/DisableScroll";
import BezierEasing from "bezier-easing"
import NavigationBar from "./NavigationBar/NavigationBar";
import Gallery from "./Gallery/Gallery";
import Press from "./Press/Press";
import Footer from "./Footer/Footer";
import FA from 'react-fontawesome';

import award1 from '../assets/awards/1.svg';
import award2 from '../assets/awards/2.svg';
import award3 from '../assets/awards/3.svg';
import award4 from '../assets/awards/4.svg';
import award5 from '../assets/awards/5.svg';
import award6 from '../assets/awards/6.svg';
import award7 from '../assets/awards/7.svg';
import award8 from '../assets/awards/8.svg';
import Logo from "./Logo/Logo";
import PressKit from "./PressKit/PressKit";
import PropTypes from "prop-types";
import {setBodyScrollBarVisible} from "./utils/Utils";
import {getURLParameter} from "../App";

export const EPage = {
    HomePage: 'HomePage',
    About: 'AboutPage',
    Gallery: 'GalleryPage',
    Press: 'PressPage',
    Contact: 'Contact'
};
export const ids = {
    NavigationBar: 'NavigationBarId',
    LogoId: 'logoId'
};

let forceScroll = false;
const anim = {
    startPos: 0,
    endPos: 0,
    distance: 0,
    newPos: 0,
    time: 0
};
const animDuration = 2000;

class MainPage extends React.PureComponent {

    static propTypes = {
        isLoaded: PropTypes.bool.isRequired,
        width: PropTypes.number.isRequired
    };

    constructor() {
        super();

        let openPressKit = !!getURLParameter("pressKit");
        if (openPressKit) {
            setBodyScrollBarVisible(false);
        }

        this.state = {
            page: EPage.HomePage,
            hideScrollNotification: false,
            introEnded: false,
            logoUp: false,
            isTrailerVisible: false,
            isAwardsVisible: false,
            isPressKitOpen: openPressKit
        };

        this.forceScrollTimer = null;
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onContentScroll, true);
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.onContentScroll);
        if (this.forceScrollTimer) clearTimeout(this.forceScrollTimer);
    }

    onContentScroll = (event) => {
        event.preventDefault();
        const scrollTop = window.scrollY;

        // Hide scroll notification
        if (!this.state.hideScrollNotification && scrollTop > 100) {
            this.setState({hideScrollNotification: true})
        }

        // Determine if page should be force scrolled
        if (!this.state.introEnded) {
            const homePage = document.getElementById(EPage.HomePage);

            if (forceScroll) {
                window.scrollTo(0, anim.newPos);
            } else {
                if (scrollTop > (homePage.offsetTop - 500)) {
                    console.error("Stick scroll");

                    // Disable scroll
                    forceScroll = true;
                    anim.startPos = scrollTop;
                    anim.endPos = homePage.offsetTop;
                    anim.distance = Math.abs(anim.endPos - anim.startPos);
                    anim.newPos = scrollTop;

                    DisableScroll.on();

                    // Each step calculate new scroll position
                    this.scrollInterval = setInterval(() => {
                        if (anim.newPos === anim.endPos) { // End position reached
                            this.setState({logoUp: true});
                            clearInterval(this.scrollInterval);
                        } else {
                            anim.time += 10 / animDuration;
                            const percentage = BezierEasing(0.785, 0.135, 0.15, 0.86)(anim.time);
                            anim.newPos = anim.startPos + anim.distance * percentage;

                            //console.log("NewPos:" + newPos );
                            window.scrollTo(0, anim.newPos);
                        }
                    }, 5);

                    // Allow scroll after timeout
                    this.forceScrollTimer = setTimeout(() => {
                        clearInterval(this.scrollInterval);
                        forceScroll = false;
                        DisableScroll.off();
                        window.scrollTo(0, 0);

                        this.forceScrollTimer = null;
                        this.setState({introEnded: true, logoUp: true});
                    }, animDuration);
                }
            }
        } else { // Update navigation on scroll position
            const relativeScrollTop = scrollTop + (window.innerHeight / 2);
            if (relativeScrollTop + 120 > (document.getElementById(EPage.Contact).offsetTop) ) {
                this.setState({page: EPage.Contact});
            } else if (relativeScrollTop > document.getElementById(EPage.Press).offsetTop) {
                this.setState({page: EPage.Press});
            } else if (relativeScrollTop > document.getElementById(EPage.Gallery).offsetTop) {
                this.setState({page: EPage.Gallery});
            } else if (relativeScrollTop > document.getElementById(EPage.About).offsetTop) {
                this.setState({page: EPage.About});
            } else {
                this.setState({page: EPage.HomePage});
            }
        }
    };

    /**
     * Update state with new active page
     * @param EPageValue
     */
    changePage = (EPageValue) => {
        this.setState({page: EPageValue});
        const pageRoot = document.getElementById(EPageValue);
        if (pageRoot) {
            window.scroll({top: pageRoot.offsetTop, left: 0, behavior: 'smooth'});
        }
    };

    showTrailer = () => {
        setBodyScrollBarVisible(false);
        this.setState({isTrailerVisible: true})
    };
    hideTrailer = () => {
        setBodyScrollBarVisible(true);
        this.setState({isTrailerVisible: false})
    };

    showAwards = () => {
        setBodyScrollBarVisible(false);
        this.setState({isAwardsVisible: true})
    };
    hideAwards = () => {
        setBodyScrollBarVisible(true);
        this.setState({isAwardsVisible: false})
    };

    showPressKit = () => {
        setBodyScrollBarVisible(false);
        this.setState({isPressKitOpen: true})
    };
    hidePressKit = () => {
        setBodyScrollBarVisible(true);
        this.setState({isPressKitOpen: false})
    };

    render() {
        const isVisible = this.props.isLoaded ? 'visible' : 'hidden';

        return (
            <div className='MainPage' style={{visibility: isVisible}}>
                <h1 className='hidden'>Ministry of Broadcast - The Wall Show</h1>
                <h2 className='hidden'>brought by TwinPetes s.r.o.</h2>

                {this.state.isPressKitOpen
                    ? null
                    : <Logo
                        introEnded={this.state.introEnded}
                        logoUp={this.state.logoUp}
                    />
                }

                {this.state.introEnded
                    ? !this.state.isPressKitOpen
                        ? <NavigationBar
                            activePage={this.state.page}
                            changePage={this.changePage}
                        />
                        : null
                    : <Intro/>
                }

                {this.state.introEnded
                    ? <div>
                        <button className='MainPage_awards_button' onClick={this.showAwards}>
                            Awards
                        </button>
                        <button className='MainPage_awards_button small' onClick={this.showAwards}>
                            <FA name='plus'/>
                        </button>
                        <button className='MainPage_trailer_button' onClick={this.showTrailer}>
                            Trailer
                        </button>
                        <button className='MainPage_trailer_button small' onClick={this.showTrailer}>
                            <FA name='play'/>
                        </button>
                    </div>
                    : null
                }

                <HomePage/>
                <About/>
                <Gallery
                    width={this.props.width}/>
                <Press
                    showPressKit={this.showPressKit}
                />
                <Footer
                    showPressKit={this.showPressKit}
                />

                <div className={`MainPage__scrollText ${this.state.hideScrollNotification ? 'hidden' : null}`}>
                    Scroll to see more...
                </div>
                {this.renderModals()}
            </div>
        )
    }

    renderModals() {
        if (this.state.isTrailerVisible) {
            return (
                <div className='MainPage_trailer'>
                    <div className='MainPage_awards_bg_circle'/>
                    <button className='MainPage_trailer_button white' onClick={this.hideTrailer}>
                        Back
                    </button>
                    <button className='MainPage_trailer_button small white' onClick={this.hideTrailer}>
                        <FA name='times'/>
                    </button>
                    <iframe className="videoContainer__video" title='Ministry gameplay trailer'
                            src="https://www.youtube.com/embed/W_cM3lKUK9Q?modestbranding=1&autoplay=1&controls=1&showinfo=0&disablekb=1"
                            frameBorder="0"/>
                </div>
            )
        } else if (this.state.isAwardsVisible) {
            return (
                <div className='MainPage_awards'>
                    <div className='MainPage_awards_bg_circle'/>
                    <button className='MainPage_awards_button white' onClick={this.hideAwards}>
                        Back
                    </button>
                    <button className='MainPage_awards_button small white' onClick={this.hideAwards}>
                        <FA name='times'/>
                    </button>
                    <div className='MaiPage_awards_list'>
                        {this.renderAward(award1)}
                        {this.renderAward(award2)}
                        {this.renderAward(award3)}
                        {this.renderAward(award4)}
                        {this.renderAward(award5)}
                        {this.renderAward(award6)}
                        {this.renderAward(award7)}
                        {this.renderAward(award8)}
                    </div>
                </div>
            )
        } else if (this.state.isPressKitOpen) {
            return <PressKit
                hidePressKit={this.hidePressKit}
            />
        }
    }

    renderAward(imageSrc) {
        return (
            <div><img src={imageSrc} alt=''/></div>
        )
    }
}

export default MainPage;
