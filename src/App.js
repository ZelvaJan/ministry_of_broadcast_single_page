import React, {Component} from 'react';
import MainPage from "./components/MainPage";
import {version} from '../package.json';

class App extends Component {

    constructor() {
        super();

        const thankYou = !!getURLParameter("thankYou");

        this.state = {
            width: window.innerWidth,
            displayThankYou: thankYou
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.addSnow = this.addSnow.bind(this);
    }

    // TODO on page load scrool to top

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
                <MainPage/>
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