import React from 'react';
import './Logo.css';
import PropTypes from "prop-types";
import SpriteSheet from "../utils/Spritesheet";

import eyeAnimations from "../../assets/logo/eye_animations.png";

import eyeBack from "../../assets/logo/eye_back.png";
import eyeRibbon from "../../assets/logo/eye_ribbon.png";
import titleLeft from "../../assets/logo/title_left.png";
import titleRight from "../../assets/logo/title_right.png";

import {getRandomInt} from "../utils/Utils";


const sb = 45, eb = 52;
const sf = 30, ef = 44;
const sd = 53, ed = 59;
const sl = 60, el = 66;
const sr = 68, er = 74;

class Logo extends React.PureComponent {

    static propTypes = {
        introEnded: PropTypes.bool.isRequired,
        logoUp: PropTypes.bool.isRequired,
    };

    constructor() {
        super();

        this.state = {
            addBackground: false
        };

        this.initBackground = true;
    }

    render() {
        const {introEnded, logoUp} = this.props;

        return (
            <div className={`Logo_root ${logoUp ? 'LogoUp' : null} `}>
                <div className='Logo_wrapper'>
                    {this.state.addBackground
                        ? <SpriteSheet
                            className='Logo_eye'
                            image={eyeBack}
                            widthFrame={250}
                            heightFrame={250}
                            loop={false}
                            autoplay={false}
                            fps={8}
                            steps={12}
                            getInstance={(spriteSheet) => {
                                this.eyeBackground = spriteSheet;
                            }}
                        />
                        : null
                    }

                    {introEnded ? this.renderRibbons() : null}

                    {this.renderEye()}
                </div>
            </div>
        )
    }

    renderEye() {
        return (
            <SpriteSheet
                className='Logo_eye'
                image={eyeAnimations}
                widthFrame={250}
                heightFrame={250}
                loop={false}
                fps={12}
                startAt={0}
                endAt={24}
                steps={75}
                autoplay={true}
                onPause={(spriteSheet) => {
                    setTimeout(() => {
                        const frame = spriteSheet.getInfo('frame');
                        const direction = spriteSheet.getInfo('direction');

                        // Reverse animation or continue with next one
                        if (direction === 'forward' && (frame === ef || frame === ed || frame === el || frame === er)) {
                            spriteSheet.setDirection('rewind');
                            if (frame === ef) spriteSheet.setEndAt(sf);
                            else if (frame === ed) spriteSheet.setEndAt(sd);
                            else if (frame === el) spriteSheet.setEndAt(sl);
                            else if (frame === er) spriteSheet.setEndAt(sr);

                            spriteSheet.play();
                        } else {
                            // Random select next animation
                            const index = getRandomInt(0, 4);
                            let startAt, endAt;
                            switch (index) {
                                case 1: // eyeFocus
                                    startAt = sf;
                                    endAt = ef;
                                    break;
                                case 2:  // eyeMoveDown
                                    startAt = sd;
                                    endAt = ed;
                                    break;
                                case 3:  // eyeMoveLeft
                                    startAt = sl;
                                    endAt = el;
                                    break;
                                case 4: // eyeMoveRight
                                    startAt = sr;
                                    endAt = er;
                                    break;
                                default: // eyeBlink
                                    startAt = sb;
                                    endAt = eb;
                                    break;
                            }

                            spriteSheet.setStartAt(startAt);
                            spriteSheet.setEndAt(endAt);
                            spriteSheet.setDirection('forward');
                            spriteSheet.goToAndPlay(startAt);
                        }
                    }, getRandomInt(1000, 3000));
                }}
                onEachFrame={(spriteSheet) => {
                    //console.log("Frame: " + spriteSheet.getInfo('frame'));

                    // Initialize background
                    if (this.initBackground) {
                        if (spriteSheet.getInfo('frame') === 10) {
                            this.setState({addBackground: true});
                        } else if (spriteSheet.getInfo('frame') === 24) {
                            if (this.eyeBackground) {
                                this.eyeBackground.play();
                            }
                            this.initBackground = false;
                        }
                    }
                }}
            />
        )
    }

    renderRibbons() {
        const show = this.state.showText;
        return (
            [
                <SpriteSheet
                    key='logo_left_ribbon'
                    className='Logo_eye_ribbon_right'
                    image={eyeRibbon}
                    widthFrame={450}
                    heightFrame={64}
                    loop={false}
                    fps={12}
                    steps={14}
                    autoplay={true}
                />,
                <SpriteSheet
                    key='logo_right_ribbon'
                    className='Logo_eye_ribbon_left'
                    image={eyeRibbon}
                    widthFrame={450}
                    heightFrame={64}
                    loop={false}
                    fps={12}
                    steps={14}
                    onPause={(spriteSheet) => {
                        this.setState({showText: true})
                    }}
                />,
                <img key='logo_left_title' src={titleLeft} alt=''
                     className={`Logo_eye_left_title ${show ? 'visible' : null}`}/>,
                <img key='logo_right_title' src={titleRight} alt=''
                     className={`Logo_eye_right_title ${show ? 'visible' : null}`}/>
            ]
        )
    }
}

export default Logo;