import React from 'react';
import './Intro.css';

class Intro extends React.PureComponent {

    render() {

        return (
            <div className='Intro_root'>
                <div className='Intro_section Intro_section_right'>
                    <p id='firstTitleAnim' className='Intro_text'>A COUNTRY DIVIDED<br/>BY THE WALL.</p>
                </div>

                <div className='Intro_section Intro_section_left'>
                    <p className='Intro_text'>TO CROSS IT AND REACH YOUR FAMILY,</p>
                </div>

                <div className='Intro_section Intro_section_right'>
                    <p className='Intro_text'>YOU MUST<br/>COMPETE ON...</p>
                </div>

                <div className='Intro_section Intro_section_left'>
                    <p className='Intro_text'>AND WIN A REALITY<br/>TV SHOW</p>
                </div>

                <div className='Intro_section Intro_section_right'>
                    <p className='Intro_text'>BROADCAST BY THE REGIME.</p>
                </div>
            </div>
        )
    }
}

export default Intro;