import React from 'react';
import './Intro.css';

class Intro extends React.PureComponent {

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
}

export default Intro;