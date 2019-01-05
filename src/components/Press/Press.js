import React, {Component} from 'react';
import './Press.css';
import crowSprite from '../../assets/crow_dance.png';

import asScore from '../../assets/logos/score.svg';
import asSector from '../../assets/logos/Sector.svg';
import asIGN from '../../assets/logos/IGN.svg';
import asVortex from '../../assets/logos/Vortex.svg';
import asBn from '../../assets/logos/Branding news.svg';
import asRomero from '../../assets/logos/John Romero Twitter.svg';
import asNivelOculto from '../../assets/logos/Nivel Occulto.svg';
import asGamology from '../../assets/logos/Gamology.svg';
import asBehance from '../../assets/logos/Behance.svg';
import as80lvl from '../../assets/logos/80.LVL.svg';
import {EPage} from "../MainPage";
import SpriteSheet from "../utils/Spritesheet";


class Press extends Component {

    render() {

        return (
            <div id={EPage.Press} className='Press_root'>
                <div className='Content_wrapper'>
                    <div className='Press_preTitle'>who said what <span className='bold'>&middot;</span> and other
                        irrelevant things
                    </div>
                    <div className='Press_texts'>
                        <div className='Press_title'>PRESS</div>
                        <div className='Press_list'>
                            <div className='Press_list_item'>
                                <p>“Stylish graphics, logical puzzles, pleasant gameplay”</p>
                                <img src={asScore} alt='Score magazine'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“Best Game at Game Access 2018”</p>
                                <img src={asSector} alt='Sector'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“MoB, Best gameplay award”</p>
                                <img src={asIGN} alt='IGN'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“An unexpected surprise from Czechia”</p>
                                <img src={asVortex} alt='Vortex'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“From Pixel Art to Collectable Art”</p>
                                <img src={asBn} alt='Branding news'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“Congrats on the award! Great job on the game, it’s fun and fu</p>
                                <img src={asRomero} alt='John Romero'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“MoB - The televised dystopia”</p>
                                <img src={asNivelOculto} alt='Nivel Oculto'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“An indie game with unique atmosphere”</p>
                                <img src={asGamology} alt='Gamology'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>Featured in<br/>Game Design</p>
                                <img src={asBehance} alt='Behance'/>
                            </div>
                            <div className='Press_list_item'>
                                <p>“An awesome new game, with killer animations”</p>
                                <img src={as80lvl} alt='80Lvl'/>
                            </div>
                        </div>
                        <div className='Press_wishList_wrapper'>
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
                                         className='Press_wishList_crow'/>
                            <button className='Press_wishList_button'
                                onMouseEnter={() => {if (this.crowSheet) this.crowSheet.goToAndPlay(0)}}
                                onMouseOut={() => {if (this.crowSheet) this.crowSheet.goToAndPause(0)}}
                            >
                                VIEW THE PRESS KIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Press;