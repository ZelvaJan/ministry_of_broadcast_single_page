import React, {Component} from 'react';
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
import {handleErrors} from "../App";
import PressKit from "./PressKit/PressKit";
import PropTypes from "prop-types";

export const EPage = {
    HomePage: 'HomePage',
    About: 'AboutPage',
    Gallery: 'GalleryPage',
    Press: 'PressPage'
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
}
const animDuration = 2000;

class MainPage extends Component {

    static propTypes = {
        isLoaded: PropTypes.bool.isRequired
    };

    constructor() {
        super();

        this.state = {
            page: EPage.HomePage,
            introEnded: false,
            logoUp: false,
            isTrailerVisible: false,
            isAwardsVisible: false,
            isPressKitOpen: false
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
        console.warn("Scroll: ", event);
        event.preventDefault();
        const scrollTop = window.scrollY;

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
            const relativeScrollTop = scrollTop + 300;
            if (relativeScrollTop > document.getElementById(EPage.Press).offsetTop) {
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
        this.setState({isTrailerVisible: true})
    };
    hideTrailer = () => {
        this.setState({isTrailerVisible: false})
    };

    showAwards = () => {
        try {
            document.getElementsByTagName("body")[0].style.overflow = "hidden"
        } catch (e) {
            handleErrors(e);
        }
        this.setState({isAwardsVisible: true})
    };
    hideAwards = () => {
        try {
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        } catch (e) {
            handleErrors(e);
        }
        this.setState({isAwardsVisible: false})
    };

    showPressKit = () => {
        try {
            document.getElementsByTagName("body")[0].style.overflow = "hidden"
        } catch (e) {
            handleErrors(e);
        }
        this.setState({isPressKitOpen: true})
    };
    hidePressKit = () => {
        try {
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        } catch (e) {
            handleErrors(e);
        }
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
                <Gallery/>
                <Press
                    showPressKit={this.showPressKit}
                />
                <Footer
                    showPressKit={this.showPressKit}
                />

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
                        <FA name='stop'/>
                    </button>
                    <iframe className="videoContainer__video" title='Ministry gameplay trailer'
                            src="https://www.youtube.com/embed/a64MUU0RgoQ?modestbranding=1&autoplay=1&controls=0&showinfo=0&disablekb=1"
                            frameBorder="0"/>
                </div>
            )
        } else if (this.state.isAwardsVisible) {
            return (
                <div className='MainPage_awards'>
                    <div className='MainPage_awards_bg_circle'/>
                    <button className='MainPage_awards_button white' onClick={this.hideAwards}>
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
