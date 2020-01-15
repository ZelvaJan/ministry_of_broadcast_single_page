import React from 'react';
import './Press.css';
import crowSprite from '../../assets/crow_dance.png';

import {EPage} from "../MainPage";
import SpriteSheet from "../utils/Spritesheet";
import PropTypes from "prop-types";
import {
    svg80lvl,
    svgBehance,
    svgBN,
    svgGamology,
    svgIGN,
    svgRomero,
    svgScore,
    svgSector,
    svgVortex,
    svgTheGamer
} from "../utils/logos";


class Press extends React.PureComponent {

    static propTypes = {
        showPressKit: PropTypes.func.isRequired
    };

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
                            <a className='Press_list_item link' target='_blank' rel="noopener noreferrer"
                               href="https://cz.ign.com/game-access-2018/7989/feature/game-access-2018-je-za-nami-a-ukazal-nam-nadherne-veci">
                                <p>“MoB, Best gameplay award”</p>
                                <label>IGN</label>
                                {svgIGN()}
                            </a>
                            <a className='Press_list_item link' target='_blank' rel="noopener noreferrer"
                               href="https://www.facebook.com/watch/?v=938217273048891">
                                <p>“An indie game with unique atmosphere”</p>
                                <label>Gamology</label>
                                {svgGamology()}
                            </a>
                            <a className='Press_list_item link' target='_blank' rel="noopener noreferrer"
                               href="https://www.branding.news/2018/10/24/ministry-of-broadcast-from-pixel-art-to-collectable-art/">
                                <p>“From Pixel Art to Collectable Art”</p>
                                <label>Branding news</label>
                                {svgBN()}
                            </a>
                            <a className='Press_list_item link' target='_blank' rel="noopener noreferrer"
                               href="https://twitter.com/romero/status/1003266679458156544">
                                <p>“Great job on the game, it’s fun and funny!”</p>
                                <label>John Romero</label>
                                {svgRomero()}
                            </a>
                            <a className='Press_list_item Press_list_item_wider link' target='_blank' rel="noopener noreferrer"
                               href="https://www.thegamer.com/ministry-of-broadcast-preview/">
                                <p>“Shaping to be one of the best indie games of the year”</p>
                                <label>The Gamer</label>
                                {svgTheGamer()}
                            </a>
                            <a className='Press_list_item link' target='_blank' rel="noopener noreferrer"
                               href="https://www.vortex.cz/databaze/ministry-of-broadcast/">
                                <p>“An unexpected surprise from Czechia”</p>
                                <label>Vortex</label>
                                {svgVortex()}
                            </a>
                            <a className='Press_list_item link' target='_blank' rel="noopener noreferrer"
                               href="https://www.behance.net/gallery/70251671/Ministry-of-Broadcast-Collectable-Art-figure">
                                <p>Featured in<br/>Game Design</p>
                                <label>Behance</label>
                                {svgBehance()}
                            </a>
                            <a className='Press_list_item link' target='_blank' rel="noopener noreferrer"
                               href="https://80.lv/articles/ministry-of-broadcast-pixel-totalitarianism/">
                                <p>“An awesome new game, with killer animations”</p>
                                <label>80Lvl</label>
                                {svg80lvl()}
                            </a>
                            <div className='Press_list_item'>
                                <p>“Stylish graphics, logical puzzles, pleasant gameplay”</p>
                                <label>Score magazine</label>
                                {svgScore()}
                            </div>
                            <div className='Press_list_item'>
                                <p>“Best Game at Game Access 2018”</p>
                                <label>Sector</label>
                                {svgSector()}
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
                                    onClick={this.props.showPressKit}
                                    onMouseEnter={() => {
                                        if (this.crowSheet) this.crowSheet.goToAndPlay(0)
                                    }}
                                    onMouseOut={() => {
                                        if (this.crowSheet) this.crowSheet.goToAndPause(0)
                                    }}
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