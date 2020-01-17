import React from 'react';
import './HomePage.css';
import {EPage} from "../MainPage";
import asNintendoSwitch from "../../assets/logos/nintendo_switch.svg";
import asSteam from "../../assets/logos/steam.svg";
import ratingM from "../../assets/rating_mature.png";
import snowCleanerAnimations from '../../assets/snow_cleaner_animations_main.png';
import SpriteSheet from "../utils/Spritesheet";

const scs = 1, ecs = 3;
const scl = 5, ecl = 12;
const sce = 14, ece = 16;
const st = 17, et = 22;
const sw = 24, ew = 31;
const sch = 33, ech = 36;

const snowCleanerId = "Snow_cleaner_id";

class HomePage extends React.PureComponent {

    constructor() {
        super();

        this.state = {
            scaleRight: false
        };

        this.counter = 0;
        this.walkPos = 0;
        this.faceLeft = true;
        this.turn = false;
    }

    render() {
        const {scaleRight} = this.state;

        return (
            <div id={EPage.HomePage} className='HomePage_root'>
                <div className='HomePage_background_wall'/>
                <div className='HomePage_background_snow'/>
                <div className='HomePage_bg_poster'/>
                <div className='HomePage_bg_board'/>
                <div className='HomePage_bg_tower'/>
                <img src={ratingM} className='HomePage_rating' alt='Rating - mature'/>

                <SpriteSheet
                    id={snowCleanerId}
                    className={`HomePage_snow_cleaner ${scaleRight ? 'flip' : null}`}
                    image={snowCleanerAnimations}
                    widthFrame={62}
                    heightFrame={41}
                    loop={false}
                    fps={10}
                    startAt={st}
                    endAt={et}
                    steps={36}
                    autoplay={true}
                    onPause={(spriteSheet) => {
                        const frame = spriteSheet.getInfo('frame');
                        let startAt, endAt, random;

                        // Select next animation
                        switch (frame) {
                            case ecs: // End of clean start
                                startAt = scl;
                                endAt = ecl;
                                this.counter = 0;
                                break;
                            case ece:  // End of clean end
                                startAt = sch;
                                endAt = ech;
                                this.counter = 0;
                                break;
                            case ech:   // End of clean shovel
                                this.counter++;
                                if (Math.random() > 0.7 || this.counter >= 4) { // End of shovel clean - 30% chance
                                    startAt = scs;
                                    endAt = ecs;
                                    this.counter = 0;
                                } else {
                                    random = Math.random();
                                    if (random > 0.66) {
                                        // Repeat
                                        startAt = sch;
                                        endAt = ech;
                                    } else if (random > 33 && this.canWalk()) {
                                        // Walk
                                        startAt = sw;
                                        endAt = ew;
                                    } else {
                                        // Turn
                                        startAt = st;
                                        endAt = et;
                                    }
                                }
                                break;
                            case et: // End of turn
                                random = Math.random();
                                if (random > 0.5 && this.canWalk(!this.faceLeft)) {
                                    // Walk
                                    startAt = sw;
                                    endAt = ew;
                                } else {
                                    // Clean start
                                    startAt = scs;
                                    endAt = ecs;
                                }

                                // Character should flip on next frame
                                this.turn = true;
                                break;
                            case ew: // End of walk
                                random = Math.random();
                                if (random > 0.66 && this.canWalk()) {
                                    // Repeat
                                    startAt = sw;
                                    endAt = ew;
                                } else if (random > 33) {
                                    // Turn
                                    startAt = st;
                                    endAt = et;
                                } else {
                                    // Clean
                                    startAt = scs;
                                    endAt = ecs;
                                }
                                break;

                            default: // End of clean cycle = ecl
                                this.counter++;
                                if (Math.random() > 0.7 || this.counter >= 5) { // End of clean cycle - 30% chance
                                    startAt = sce;
                                    endAt = ece;
                                    this.counter = 0;
                                } else { // Repeat
                                    startAt = scl;
                                    endAt = ecl;
                                }
                                break;
                        }

                        spriteSheet.setStartAt(startAt);
                        spriteSheet.setEndAt(endAt);
                        spriteSheet.setDirection('forward');
                        spriteSheet.goToAndPlay(startAt);
                    }}
                    onEachFrame={(spriteSheet) => {
                        const frame = spriteSheet.getInfo('frame');
                        //console.log("Frame: " + frame);

                        if (this.turn) { // Turn sprite
                            this.turn = false;
                            this.faceLeft = !this.faceLeft;
                            this.setState({scaleRight: !scaleRight});
                        }

                        if (frame >= sw && frame <= ew) { // Move on walk
                            const cleanerEl = document.getElementById(snowCleanerId);
                            if (cleanerEl) {
                                let distance = 3;
                                if (this.faceLeft) {
                                    this.walkPos -= distance;

                                } else {
                                    this.walkPos += distance;
                                }
                                //console.wanr("Face: " + this.faceLeft + ". Position: " + this.walkPos);
                                cleanerEl.style.left = 'calc(50% + ' + this.walkPos + 'px)'
                            }
                        }
                    }}
                />

                <section className='HomePage_release_wrapper'>
                    <div className='HomePage_release_time'>RELEASE JANUARY 30</div>
                    <div className='HomePage_release_platforms'>
                        <img src={asSteam} alt='Steam platform'/>
                        <img src={asNintendoSwitch} alt='Nintendo switch platform'/>
                    </div>
                </section>
            </div>
        )
    }

    /**
     * Determine if cleaner can continue walking
     * @returns {boolean} true if can walk in that direction
     */
    canWalk (faceLeft = this.faceLeft) {
        const walk = (faceLeft && this.walkPos > -80) || (!faceLeft && this.walkPos < 80);
        return !!walk;
    }
}

export default HomePage;