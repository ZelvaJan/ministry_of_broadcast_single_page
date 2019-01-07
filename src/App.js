import React, {Component} from 'react';
import MainPage from "./components/MainPage";
import {version} from '../package.json';
import './App.css';

import logo from './assets/logo.png';
import crowSprite from './assets/crow_dance.png';

import SpriteSheet from "./components/utils/Spritesheet";

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
        MainPage.canvas.width = MainPage.canvWidth = window.innerWidth;
        MainPage.canvas.height = MainPage.canvHeight = window.innerHeight;
        MainPage.endAnimationCycle = true;
        this.addSnow();

        const newWidth = Math.round(window.innerWidth);
        console.warn("New width: " + newWidth);
        this.setState({
            width: newWidth
        });
    }

    addSnow = () => {
        MainPage.canvas = document.getElementById('Snow_canvas');
        if (MainPage.canvas) {
            const $ = MainPage.canvas.getContext("2d");
            MainPage.canvWidth = MainPage.canvas.width = window.innerWidth;
            MainPage.canvHeight = MainPage.canvas.height = window.innerHeight;
            let f;

            const width = this.state.width;

            let snow, arr = [];
            let num = 600, sp = 1;
            let sc = 1.3, mv = 10, min = 0.5, max = 2;
            if (width < 800) {
                num = 200;
                mv = 5;
            }

            for (let i = 0; i < num; ++i) {
                snow = new Flake();
                snow.y = Math.random() * (MainPage.canvHeight + 50);
                snow.x = Math.random() * MainPage.canvWidth;
                snow.t = Math.random() * (Math.PI * 2);
                snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
                snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
                snow.sp = snow.sp < min ? min : snow.sp;
                snow.sp = snow.sp > max ? max : snow.sp;
                // console.log(snow.sp);
                arr.push(snow);
            }
            go();

            function go() {
                if (!MainPage.endAnimationCycle) {
                    window.requestAnimationFrame(go);   // Request another animation step
                } else {
                    MainPage.endAnimationCycle = false;
                }

                $.clearRect(0, 0, MainPage.canvWidth, MainPage.canvHeight); // Clear canvas

                for (let i = 0; i < arr.length; ++i) { // Move flakes and draw them
                    f = arr[i];
                    f.t += .05;
                    f.t = f.t >= Math.PI * 2 ? 0 : f.t;
                    f.y += f.sp;
                    f.x = f.x + Math.random() * 1.5;
                    if (f.y > MainPage.canvHeight + 50) f.y = -10 - Math.random() * mv;
                    if (f.x > MainPage.canvWidth + mv) f.x = -mv;
                    if (f.x < -mv) f.x = MainPage.canvWidth + mv;
                    f.draw();
                }
            }

            function Flake() {
                this.draw = function () {
                    $.moveTo(this.x, this.y);
                    $.fillStyle = 'rgba(246, 249, 232, 1)';
                    $.beginPath();
                    if (this.sz > 8) {
                        this.sz = 8;
                    }
                    $.rect(this.x, this.y, this.sz, this.sz);
                    $.fill();
                }
            }
        }
    };

    render() {
        return (
            <div className="App">
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