import React from 'react';
import './About.css';
import crowSprite from '../../assets/crow_dance.png';
import {EPage} from "../MainPage";
import SpriteSheet from "../utils/Spritesheet";

class About extends React.PureComponent {

    render() {

        return (
            <div id={EPage.About} className='About_root'>
                <section className='Content_wrapper'>
                    <div className='About_preTitle'>the game <span className='bold'>&middot;</span> the team</div>
                    <div className='About_responsive_layout'>
                        <div className='About_title'>ABOUT</div>
                        <div className='About_title_whitespace'/>
                        <div className='About_text'>
                            <span className='bold'>Ministry of Broadcast</span> is a narrative-driven cinematic
                            platformer. Currently being developed in the Czech Republic by four people who share the
                            same ideals, dreams, visions, and love for internet profanity. This is our first game and it
                            is scheduled for release in late-2019 on Nintendo Switch, PS4, and Steam (PC & Mac).
                            Inspired by titles like the original <span className='italic'>Prince of Persia</span> (1989)
                            and <span className='italic'>Oddworld: Abe’s Exoddus</span>, the overall mood and tone is a
                            dark hybrid of Orwell’s <span className='italic'>1984</span> and the hypocritical shine and
                            glamour of modern reality TV. Though both you and the protagonist will struggle under the
                            weight of a dystopian Regime and its subversive tactics, dutiful underlings, and deadly
                            obstacles, we’ve packed the game with challenge, sarcasm, and jokes on all involved. Your
                            crow-friend is going to mock you to your face... a lot.
                            <br/><br/>
                            As the Regime would dictate, we have been very strict and meticulous with Ministry of
                            Broadcast’s creative direction. So that the artstyle is as memorable and recognizable as the
                            story and gameplay, we have combined Russian and Czech avant-garde with beautiful vintage
                            Swiss Alps advertising posters and a very carefully chosen color palette.
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