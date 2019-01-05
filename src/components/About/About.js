import React, {Component} from 'react';
import './About.css';
import crowSprite from '../../assets/crow_dance.png';
import {EPage} from "../MainPage";
import SpriteSheet from "../utils/Spritesheet";

class About extends Component {

    render() {

        return (
            <div id={EPage.About} className='About_root'>
                <section className='Content_wrapper'>
                    <div className='About_preTitle'>the game <span className='bold'>&middot;</span> the team</div>
                    <div className='About_responsive_layout'>
                        <div className='About_title'>ABOUT</div>
                        <div className='About_title_whitespace'/>
                        <div className='About_text'>
                            The Ministry of Broadcast is narrative-drive indie game, currently being developed in the Czech
                            Republic,
                            by 4 people who share the same ideals, dreams, visions and love for internet profanity. It is
                            scheduled for release in mid 2019 on Windows, Mac and Nintendo Switch. This single-player pixel
                            art
                            platformer is inspired by the cinematic pieces like the original Prince of Persia (1989) and
                            Oddworld: Abe’s Exoddus. The overall mood and tone is dark like Orwell’s 1984 combined with the
                            hypocritical shine and glamour of the modern TV reality shows. Even though it is touching some
                            of
                            the dark themes, this game is fun, sarcastic and it plays a joke not just on the game
                            characters,
                            but also on the gamers.<br/><br/>
                            MoB Creative direction, as Regime, is very strict and well thought through. In order to make it
                            strongly recognisable and in line with the story - we have combined Russian and Czech
                            avant-garde
                            with beautiful vintage art from advertising posters for Swiss Alps and its color codes.
                        </div>
                    </div>
                </section>
                <div className='About_subscribe_wrapper'>
                    <SpriteSheet image={crowSprite}
                                 widthFrame={13}
                                 heightFrame={9}
                                 steps={4}
                                 fps={12}
                                 autoplay={false}
                                 loop={true}
                                 getInstance={(spriteSheet) => {
                                     this.crowSheet = spriteSheet;
                                 }}
                                 className='About_subscribe_crow'/>
                    <a className='About_subscribe_button'
                       onMouseEnter={() => {
                           if (this.crowSheet) this.crowSheet.goToAndPlay(0)
                       }}
                       onMouseOut={() => {
                           if (this.crowSheet) this.crowSheet.goToAndPause(0)
                       }}
                       href="https://store.steampowered.com/app/874040/Ministry_of_Broadcast/" target='_blank'
                       rel="noopener noreferrer"
                    >
                        WISHLIST OUR GAME ON STEAM
                    </a>
                </div>

            </div>
        )
    }
}

export default About;