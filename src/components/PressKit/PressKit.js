import React, {Component} from 'react';
import './PressKit.css';
import FA from 'react-fontawesome';

import logo from '../../assets/logo.png';
import icon from '../../assets/icon.png';

import MoB_press_kit from '../../assets/PressKit/MoB_press_kit.zip';

// Images
import img1 from '../../assets/gallery/1.png';
import img2 from '../../assets/gallery/2.png';
import img3 from '../../assets/gallery/3.png';
import img4 from '../../assets/gallery/4.png';
import img5 from '../../assets/gallery/5.png';
import img51 from '../../assets/gallery/5.jpg';
import img6 from '../../assets/gallery/6.png';
import img7 from '../../assets/gallery/7.png';
import img8 from '../../assets/gallery/8.jpg';
import img9 from '../../assets/gallery/9.png';
import img20 from '../../assets/gallery/20.jpg';
import basecampGif from '../../assets/gallery/basecamp.gif';
import figure from '../../assets/gallery/figure.jpg';
import PropTypes from "prop-types";
import {handleErrors} from "../../App";

const ids = {
    Factsheet: 'FactsheetId',
    Story: 'StoryId',
    CreativeDir: 'CreativeDirId',
    LogoIcon: 'LogoIconId',
    Trailer: 'TrailerId',
    Images: 'ImagesId',
    OnlineAct: 'OnlineActId',
    Team: 'TeamId',
    Awards: 'AwardsId',
    Articles: 'ArticlesId'
};

class PressKit extends Component {

    static propTypes = {
        hidePressKit: PropTypes.func.isRequired
    };

    moveTo = (elementId) => {
        try {
            const element = document.getElementById(elementId);
            element.scrollIntoView({ behavior: 'smooth' });
        } catch (e) {
            handleErrors(e);
        }
    };

    render() {
        return (
            <div className='PressKit_root'>
                <div className='PressKit'>
                    <div className='PressKit_content'>
                        <div className='PressKit_box PressKit_header'>
                            <button className='PressKit_close_button' onClick={this.props.hidePressKit}><FA
                                name='times'/></button>
                            <h2 className='PressKit_title'>MINISTRY OF BROADCAST</h2>
                            <p className='PressKit_subtitle'>PRESS KIT</p>
                        </div>
                        <div className='PressKit_section'>
                            <div className='PressKit_box PressKit_content_wrapper'>
                                <h3>CONTENT</h3>
                                <div className='flex_v just_center flex_1'>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.Factsheet)}>Factsheet</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.Story)}>Story</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.CreativeDir)}>Creative
                                        Direction</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.LogoIcon)}>Logo &
                                        Icon</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.Trailer)}>Trailer</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.Images)}>Images</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.OnlineAct)}>Online
                                        Activity</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.Team)}>Team</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.Awards)}>Award &
                                        Recognition</p>
                                    <p className='margin_small' onClick={() => this.moveTo(ids.Articles)}>Selected
                                        Articles</p>
                                </div>
                            </div>
                            <div className='PressKit_section_column PressKit_factSheet_wrapper'>
                                <div id={ids.Factsheet} className='PressKit_box'>
                                    <h3>FACTSHEET</h3>
                                    <div className='flex_h PressKit_factSheet_list'>
                                        <div>
                                            <h4>Developers:</h4>
                                            <a href="https://ministryofbroadcast.com/" target='_blank'
                                               rel="noopener noreferrer">Ministry of
                                                Broadcast</a>
                                            <p>Czech Republic</p>
                                        </div>
                                        <div>
                                            <h4>Release Date:</h4>
                                            <p>End 2019</p>
                                        </div>
                                        <div>
                                            <h4>Platforms:</h4>
                                            <p>Steam</p>
                                            <p>Nintendo Switch</p>
                                        </div>
                                        <div>
                                            <h4>Created with:</h4>
                                            <p>GameMaker</p>
                                        </div>
                                        <div>
                                            <h4>Contact:</h4>
                                            <a href="mailto:press@hitcents.com?subject=MinistryOfBroadcast"
                                               target='_blank' rel="noopener noreferrer">press@hitcents.com</a>
                                        </div>
                                        <div>
                                            <h4>Publisher:</h4>
                                            <p><a href="https://hitcents.com/" target='_blank'
                                                  rel="noopener noreferrer">Hitcents</a>,
                                                LA, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <div id={ids.Story} className='PressKit_box'>
                                    <h3>STORY</h3>
                                    <p className='PressKit_story_text'>The Ministry of Broadcast is narrative-drive
                                        indie game, currently being
                                        developed in the Czech Republic and it is scheduled for release in mid 2019 on
                                        Windows, Mac and Nintendo Switch. This single-player pixel art platformer is
                                        inspired by the cinematic pieces like the original Prince of Persia (1989) and
                                        Oddworld: Abe’s Exoddus. The overall mood and tone is dark like Orwell’s 1984
                                        combined with the hypocritical shine and glamour of the modern TV reality shows.
                                        Even though it is touching some of the dark themes, this game is fun, sarcastic
                                        and it plays a joke not just on the game characters, but also on the gamers. The
                                        main Protagonist is a character who has entered the ‘Wall show’ in order to win
                                        and get back together with his family. However on his way through the camp, he
                                        realises how The Regime works, and how it can ‘play’ with one’s mind, pun
                                        intended.</p>
                                </div>
                            </div>
                        </div>

                        <div className='PressKit_section'>
                            <div id={ids.CreativeDir} className='PressKit_box PressKit_creativeDir'>
                                <h3>CREATIVE DIRECTION</h3>
                                <p>The totalitaristian system is not something new, but our approach to it can be. In
                                    the world of today, a system like this would hire a good PR agency to rebrand
                                    itself. Instead of scary red visuals, they would use inviting baby blue. We have
                                    limited ourselves with the strict color palette, by combining Russian and Czech
                                    avant-garde with beautiful vintage art from advertising posters for Swiss Alps and
                                    its color codes. We have a clean level design with high readability and color
                                    storytelling.</p>
                            </div>
                            <div id={ids.LogoIcon} className='PressKit_box PressKit_logo_wrapper'>
                                <h3>LOGO</h3>
                                <div className='PressKit_logo'>
                                    <img src={logo} alt="Logo" onClick={() => {
                                        window.open(logo)
                                    }}/>
                                </div>
                            </div>
                            <div className='PressKit_box PressKit_icon_wrapper'>
                                <h3>ICON</h3>
                                <div className='PressKit_icon'>
                                    <img src={icon} alt="Icon" onClick={() => {
                                        window.open(icon)
                                    }}/>
                                </div>
                            </div>
                        </div>

                        <div className='PressKit_section'>
                            <div className='PressKit_section_column flex_1'>
                                <div id={ids.Trailer} className='PressKit_box flex_1 flex_v'>
                                    <h3>TRAILER</h3>
                                    <div className='PressKit_trailer_wrapper'>
                                        <iframe className="PressKit_trailer" title='Ministry gameplay trailer'
                                                src="https://www.youtube.com/embed/a64MUU0RgoQ?modestbranding=1&autoplay=0&controls=0&showinfo=0&disablekb=1"
                                                frameBorder="0"/>
                                        <div className='PressKit_trailer_overlay'/>
                                    </div>
                                </div>
                                <div id={ids.OnlineAct} className='PressKit_box'>
                                    <h3>ONLINE ACTIVITY</h3>
                                    <div className='PressKit_online_list'>
                                        <a href="https://store.steampowered.com/app/874040/Ministry_of_Broadcast/"
                                           target='_blank' rel="noopener noreferrer">Steam</a>
                                        <a href="https://twitter.com/OfBroadcast" target='_blank'
                                           rel="noopener noreferrer">Twitter</a>
                                        <a href="https://www.facebook.com/TheWallShow/" target='_blank'
                                           rel="noopener noreferrer">Facebook</a>
                                        <a href="https://twinpetes.com/" target='_blank'
                                           rel="noopener noreferrer">DevBlog</a>
                                        <a href="https://discord.gg/QnG3AHg" target='_blank'
                                           rel="noopener noreferrer">Discord</a>
                                    </div>
                                </div>
                            </div>

                            <div id={ids.Images} className='PressKit_box flex_1'>
                                <h3>IMAGES</h3>
                                <div className='PressKit_images_list'>
                                    {PressKit.renderImage(basecampGif)}
                                    {PressKit.renderImage(img7)}
                                    {PressKit.renderImage(img8)}
                                    {PressKit.renderImage(img9)}
                                    {PressKit.renderImage(img1)}
                                    {PressKit.renderImage(img2)}
                                    {PressKit.renderImage(img3)}
                                    {PressKit.renderImage(img4)}
                                    {PressKit.renderImage(img5)}
                                    {PressKit.renderImage(img51)}
                                    {PressKit.renderImage(img6)}
                                    {PressKit.renderImage(img20)}
                                    {PressKit.renderImage(figure)}
                                </div>
                            </div>
                        </div>

                        <div className='PressKit_section'>
                            <div id={ids.Team} className='PressKit_box PressKit_team '>
                                <h3>THE TEAM</h3>
                                <h4>Core Team:</h4>
                                <h5>Petr Melicherík</h5>
                                <p>Development, Mechanics, Game & Level design, Dialogues, Story</p>
                                <h5>Petr Škorňok</h5>
                                <p>Development, Story, Game & Level design</p>
                                <h5>Sanja Čežek</h5>
                                <p>Art direction, Branding, UX/UI, Story, Illustration, Game & Level design</p>
                                <h5>Dušan Čežek</h5>
                                <p>Creative direction, Illustration, Animation, Story, Game & Level design</p>

                                <h4>Collaborators:</h4>
                                <h5>Marko Stanojević</h5>
                                <p>Animation</p>
                                <h5>Emil Gašparec</h5>
                                <p>Development, Level design</p>
                                <h5>Anita Kudličková, Ambit</h5>
                                <p>Sound design, SFX</p>
                                <h5>Radek Nikl, Ambit</h5>
                                <p>Music composition, Sound design, SFX</p>
                            </div>
                            <div id={ids.Awards} className='PressKit_box PressKit_awards'>
                                <h3>AWARDS AND RECOGNITION</h3>
                                <h4>Awards:</h4>
                                <p>Best Gameplay ‘18, <a href="https://game-access.com/conference/" target='_blank'
                                                         rel="noopener noreferrer">Game
                                    Access, CZ</a></p>

                                <h4>Nominations:</h4>
                                <p>Best Art ‘18, <a href="https://game-access.com/conference/" target='_blank'
                                                    rel="noopener noreferrer">Game Access,
                                    CZ</a></p>
                                <p>Best Gameplay ‘18, <a href="https://game-access.com/conference/" target='_blank'
                                                         rel="noopener noreferrer">Game
                                    Access, CZ</a></p>
                                <p>Best Desktop ‘18, <a
                                    href="https://www.game-connection.com/game-connection-europe-2018-development-awards/"
                                    target='_blank' rel="noopener noreferrer">Game
                                    Connection, FR</a></p>
                                <p>Most Original ‘18, <a
                                    href="https://www.game-connection.com/game-connection-europe-2018-development-awards/"
                                    target='_blank' rel="noopener noreferrer">Game
                                    Connection, FR</a></p>
                                <p>Best Story ’18, <a
                                    href="https://www.game-connection.com/game-connection-europe-2018-development-awards/"
                                    target='_blank' rel="noopener noreferrer">Game
                                    Connection, FR</a></p>
                                <p>Official Selection ‘18, <a href="https://www.indiecade.com/2018-games/"
                                                              target='_blank' rel="noopener noreferrer">Indiecade,
                                    USA</a></p>
                                <p>Official Selection ‘18 <a href="https://indiecade-europe.eu/en/programme/jeux"
                                                             target='_blank' rel="noopener noreferrer">Indiecade,
                                    FR</a></p>
                            </div>
                            <div id={ids.Articles} className='PressKit_section_column PressKit_articles_wrapper'>
                                <div className='PressKit_box flex_1'>
                                    <h3>SELECTED ARTICLES</h3>

                                    <p>”Best Gameplay Award winner”, <a
                                        href="https://cz.ign.com/game-access-2018/7989/feature/game-access-2018-je-za-nami-a-ukazal-nam-nadherne-veci"
                                        target='_blank'
                                        rel="noopener noreferrer">IGN CZ</a></p>
                                    <p>”The televised dystopia”, <a
                                        href="https://niveloculto.com/ministry-of-broadcast-la-distopia-televisada/"
                                        target='_blank'
                                        rel="noopener noreferrer">NIVEL OCULTO</a></p>
                                    <p>”An awesome new game, with killer animations”, <a
                                        href="https://80.lv/articles/ministry-of-broadcast-pixel-totalitarianism/"
                                        target='_blank'
                                        rel="noopener noreferrer">80.lvl</a>
                                    </p>
                                    <p>”From Pixel Art to Collectable Art”, <a
                                        href="https://www.branding.news/2018/10/24/ministry-of-broadcast-from-pixel-art-to-collectable-art/"
                                        target='_blank'
                                        rel="noopener noreferrer">BRANDING
                                        NEWS</a></p>
                                    <p>”An unexpected surprise coming from the Czech Republic”, <a
                                        href="https://www.vortex.cz/databaze/ministry-of-broadcast/"
                                        target='_blank'
                                        rel="noopener noreferrer">VORTEX</a>
                                    </p>
                                    <p>”A brand new indie game with unique atmosphere”, <a
                                        href="https://www.facebook.com/GamologyTrailers.Kelinetwork/videos/ministry-of-broadcast-gamology-news/938208233049795/"
                                        target='_blank'
                                        rel="noopener noreferrer">GAMOLOGY</a>
                                    </p>
                                </div>
                                <div className='PressKit_box PressKit_download'>
                                    <a href={MoB_press_kit} download="MoB_press_kit">DOWNLOAD THE WHOLE PRESS
                                        KIT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of content*/}

                    <img className='PressKit_eye' src={icon} alt=''/>
                </div>
            </div>
        )
    }

    static renderImage(img) {
        return <div className='PressKit_image_wrapper' onClick={() => {
            window.open(img);
        }}>
            <img className='PressKit_image' src={img} alt=''/>
            <div className='PressKit_image_overlay'/>
        </div>
    }
}

export default PressKit;