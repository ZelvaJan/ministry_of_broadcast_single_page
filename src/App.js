import React, {Component} from 'react';
import MainPage from "./components/MainPage";
import {version} from '../package.json';
import './App.css';

import logo from './assets/logo.png';
import crowSprite from './assets/crow_dance.png';
import pageThumb from './assets/gallery/basecamp.gif';

import SpriteSheet from "./components/utils/Spritesheet";
import {clamp} from "./components/utils/Utils";

class App extends Component {

    constructor() {
        super();

        let isAlreadyLoaded = false;
        if (typeof window !== 'undefined') {
            window.onload = () => {
                window.scrollTo(0, 0);
                this.setState({isLoaded: true});
            };

            window.onbeforeunload = () => {
                window.scrollTo(0, 0);
            };
        } else {
            console.error("Window is missing");
            isAlreadyLoaded = true;
        }

        const thankYou = !!getURLParameter("thankYou");

        this.state = {
            width: window.innerWidth,
            isLoaded: isAlreadyLoaded,
            displayThankYou: thankYou
        };

        this.snowTimeout = null;

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.addSnow = this.addSnow.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.addSnow();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        MainPage.endAnimationCycle = true;

        if (this.snowTimeout) {
            clearTimeout(this.snowTimeout);
        }
        this.snowTimeout = setTimeout(() => {
            this.snowTimeout = null;
            this.addSnow();
        }, 10);

        const newWidth = Math.round(window.innerWidth);
        this.setState({
            width: newWidth
        });
    }


    addSnow = () => {
        console.log("New snow");
        MainPage.canvas = document.getElementById('Snow_canvas');
        if (MainPage.canvas) {
            const $ = MainPage.canvas.getContext("2d");
            MainPage.canvWidth = MainPage.canvas.width = window.innerWidth;
            MainPage.canvHeight = MainPage.canvas.height = window.innerHeight;
            const size = MainPage.canvWidth * MainPage.canvHeight;

            let flake, snow, arr = [];
            let sp = 1, minSp = 0.75, maxSp = 2;    // Speed, minimal and maximal speed
            let num = clamp(size / 2000, 100, 700); // Number of snow flakes between 100 - 1000

            for (let i = 0; i < num; i++) {
                snow = new Flake();
                snow.y = Math.random() * (MainPage.canvHeight + 50);
                snow.x = Math.random() * MainPage.canvWidth;
                snow.size = 1 + 5 * Math.random();
                snow.sp = clamp((Math.pow(snow.size * .5, 2) * .15) * sp, minSp, maxSp);
                arr.push(snow);
            }

            console.warn("Size: " + size);
            console.log('Number of flakes: ', arr.length);
            //console.log('Speed of flakes: ', mv);

            go();

            function go() {
                // End animation cycle or continue with requesting new animation frame
                MainPage.endAnimationCycle ? MainPage.endAnimationCycle = false : window.requestAnimationFrame(go);

                // Clear canvas
                $.clearRect(0, 0, MainPage.canvWidth, MainPage.canvHeight); // Clear canvas

                // Move flakes and draw them
                for (let i = 0; i < arr.length; i++) {
                    flake = arr[i];
                    flake.y += flake.sp;
                    flake.x = flake.x + Math.random() * 1.5;
                    if (flake.y > MainPage.canvHeight) flake.y = -5 + Math.random() * -20;   // When flake fall down of screen
                    if (flake.x > MainPage.canvWidth) flake.x = Math.random() * -10;      // When flake falls to much to right
                    flake.draw();
                }
            }

            function Flake() {
                this.draw = function () {
                    $.moveTo(this.x, this.y);
                    $.fillStyle = 'rgba(246, 249, 232, 1)';
                    $.beginPath();
                    $.rect(this.x, this.y, this.size, this.size);
                    $.fill();
                }
            }
        }
    };

    render() {
        return (
            <div className="App">
                <img id="thumb" src={pageThumb}
                     alt="Ministry of Broadcast - Ministry of Broadcast is a 2D puzzle cinematic platformer with the similar concept to the original *Prince of Persia* (1989) or *Oddworld: Abe’s Exodus*. The story takes place in a country which has been divided by the wall (you can imagine Berlin Wall or Trump’s Wall ), the families were suddenly separated over the night and the only way how to get across the borders to the other (Western, Freedom) side is to win in a TV reality show."/>
                {this.state.displayThankYou
                    ? <div className="App_thankYou_wrapper">
                        <img className='App_thankYou_logo' src={logo} alt=''/>
                        <h2>Thanks you for subscription</h2>
                        <div className='App_button_wrapper'>
                            <SpriteSheet image={crowSprite}
                                         widthFrame={13}
                                         heightFrame={9}
                                         steps={4}
                                         fps={12}
                                         startAt={0}
                                         loop={true}
                                         autoplay={false}
                                         getInstance={(spriteSheet) => {
                                             this.crowSheet = spriteSheet;
                                         }}
                                         className='App_button_crow'/>
                            <button className='App_button'
                                    onClick={() => {
                                        this.setState({displayThankYou: false})
                                    }}
                                    onMouseEnter={() => {
                                        if (this.crowSheet) this.crowSheet.goToAndPlay(0)
                                    }}
                                    onMouseOut={() => {
                                        if (this.crowSheet) this.crowSheet.goToAndPause(0)
                                    }}
                            >
                                CONTINUE
                            </button>
                        </div>
                    </div>
                    : <MainPage
                        isLoaded={this.state.isLoaded}
                        width={this.state.width}
                    />
                }
                <canvas id='Snow_canvas'/>
            </div>
        );
    }
}

export default App;


export function handleErrors(error) {
    console.error(error);
    try {
        window.gtag('event', 'exception', {
            'description': error ? JSON.stringify(error) : error,
            'version': version,
            'fatal': true
        });
    } catch (exception) {
        console.error(exception);
    }
}

/**
 * Parse value from url parameters by name
 * @param name name of url parameter
 * @returns {string|null} value of url parameter
 */
export function getURLParameter(name) {
    try {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    } catch (error) {
        handleErrors(error);
        return null;
    }
}