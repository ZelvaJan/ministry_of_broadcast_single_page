import React, {Component} from 'react';
import './Intro.css';

class Intro extends Component {

    render() {

        return (
            <div className='Intro_root'>
                <div className='Intro_section Intro_section_right'>
                    <p id='firstTitleAnim' className='Intro_text'>A STORY ABOUT THE COUNTRY WHICH HAS BEEN DIVIDED BY THE WALL</p>
                </div>

                <div className='Intro_section Intro_section_left'>
                    <p className='Intro_text'>TO CROSS, YOU WILL HAVE TO WIN IN A TV REALITY SHOW BROADCASTED BY THE
                        STRICT REGIME</p>
                </div>

                <div className='Intro_section Intro_section_right'>
                    <p className='Intro_text'>A NARRATIVE DRIVEN SINGLE PLAYER</p>
                </div>

                <div className='Intro_section Intro_section_left'>
                    <p className='Intro_text'>WHEN YOU MIX ORWELL 1984 WITH TV REALITY SHOWS...</p>
                </div>

                <div className='Intro_section Intro_section_right'>
                    <p className='Intro_text'>YOU GET...</p>
                </div>
            </div>
        )
    }

    /* TODO what about text animations
    animateText () {
        // Initialize
        var txt = new window.TextFx(document.getElementById('firstTitleAnim'));

        // Show letters:
        // txt.show([effect] [,callback]);
        // If nothing is passed, then there's no animation.
        // ´effect´ can either be one of the predefined effects: ['fx1',...,'fx17'] or
        // an object literal representing both, in and out animations (anime.js based).

        // Example:
                const effect = {
                    in: {
                        duration: 500,
                        delay: function(el, index) {
                            return 250+index*40;
                        },
                        easing: 'easeOutExpo',
                        opacity: 1,
                        translateY: ['1000%','0%']
                    },
                    out: {
                        duration: 500,
                        delay: function(el, index) {
                            return index*40;
                        },
                        easing: 'easeOutExpo',
                        opacity: 0,
                        translateY: '-1000%'
                    }
                }
        // ´callback´ is the callback function, after all the letters finished the animation.

        // Hide letters:
        txt.show(effect);
        // txt.hide([effect] [,callback]); (same logic of show)
    }
    */
}

export default Intro;