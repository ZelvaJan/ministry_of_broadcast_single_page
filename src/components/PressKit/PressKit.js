import React, {Component} from 'react';
import './PressKit.css';
import FA from 'react-fontawesome';

import logo from '../../assets/logo.png';
import icon from '../../assets/icon.png';

import MoB_press_kit from '../../assets/PressKit/MoB_press_kit.zip';

// Images
import img1 from '../../assets/gallery/Gallery_1.png';
import img2 from '../../assets/gallery/Gallery_2.png';
import img3 from '../../assets/gallery/Gallery_3.png';
import img4 from '../../assets/gallery/Gallery_4.png';
import img5 from '../../assets/gallery/Gallery_5.png';
import img6 from '../../assets/gallery/Gallery_6.png';
import img7 from '../../assets/gallery/Gallery_7.png';
import img8 from '../../assets/gallery/Gallery_8.png';
import img9 from '../../assets/gallery/Gallery_9.png';
import img10 from '../../assets/gallery/Gallery_10.jpg';
import img11 from '../../assets/gallery/Gallery_11.png';
import img12 from '../../assets/gallery/Gallery_12.png';

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
            element.scrollIntoView({behavior: 'smooth'});
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
                                    <p className='PressKit_story_text'><span
                                        className='bold'>Ministry of Broadcast</span> is a narrative-driven cinematic
                                        platformer, currently being developed in the Czech Republic by four people who
                                        share the same ideals, dreams, visions, and love for internet profanity. This is
                                        our first game and we have been working it for a long time, and it is now
                                        finally scheduled for release in late-2019 on Nintendo Switch, PS4, and Steam
                                        (PC & Mac). Inspired by titles like the original <span className='italic'>Prince of Persia</span> (1989)
                                        and <span className='italic'>Oddworld: Abe’s Exoddus</span>, the overall mood and
                                        tone is a dark hybrid of Orwell’s <span className='italic'>1984</span> and the
                                        hypocritical shine and glamour of modern reality TV. Though both
                                        you and the protagonist will struggle under the weight of a dystopian Regime and
                                        its subversive tactics, dutiful underlings, and deadly obstacles, we’ve packed
                                        the game with challenge, sarcasm, and jokes on all involved. Your crow-friend is
                                        going to mock you to your face… a lot.<br/><br/>Seemingly built overnight, The
                                        Wall has divided both a country in two and a man from his family. To see them
                                        again, our ginger-haired protagonist has decided to become a contestant on “The
                                        Wall Show”, a Regime-organized TV show allowing competitors the opportunity to
                                        escape to freedom on the other side. On his way through the camp though, he
                                        realises how the Regime and the show operate. The promise of freedom is not
                                        exactly what it seems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='PressKit_section'>
                            <div id={ids.CreativeDir} className='PressKit_box PressKit_creativeDir'>
                                <h3>CREATIVE DIRECTION</h3>
                                <p>The totalitarian system is not something new, but our approach to it is. In today’s
                                    world, a government like this would hire a good PR agency to rebrand itself. Instead
                                    of a classically intimidating deep-red, the Regime has adopted a much softer, more
                                    inviting baby blue. So that the artstyle is as memorable and recognizable as the
                                    story and gameplay, we maintain a self-imposed limit with the color palette that
                                    combines Russian and Czech avant-garde with beautiful vintage Swiss Alps advertising
                                    art. In execution, this allows for Ministry of Broadcast’s clean level design, with
                                    high legibility, and vibrant storytelling.</p>
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
                            <div className='PressKit_section_column'>
                                <div id={ids.Trailer} className='PressKit_box flex_1 flex_v'>
                                    <h3>TRAILER</h3>
                                    <div className='PressKit_trailer_wrapper'>
                                        <iframe className="PressKit_trailer" title='Ministry gameplay trailer'
                                                src="https://www.youtube.com/embed/W_cM3lKUK9Q?modestbranding=1&autoplay=0&controls=1&showinfo=0&disablekb=1"
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
                                        <a href="https://discord.gg/hitcents" target='_blank'
                                           rel="noopener noreferrer">Discord</a>
                                    </div>
                                </div>
                            </div>

                            <div id={ids.Images} className='PressKit_box PressKit_images'>
                                <h3>IMAGES</h3>
                                <div className='PressKit_images_list'>
                                    {PressKit.renderImage(img1)}
                                    {PressKit.renderImage(img12)}
                                    {PressKit.renderImage(img2)}
                                    {PressKit.renderImage(img11)}
                                    {PressKit.renderImage(img3)}
                                    {PressKit.renderImage(img4)}
                                    {PressKit.renderImage(img5)}
                                    {PressKit.renderImage(img6)}
                                    {PressKit.renderImage(img7)}
                                    {PressKit.renderImage(img8)}
                                    {PressKit.renderImage(img9)}
                                    {PressKit.renderImage(img10)}
                                </div>
                            </div>
                        </div>

                        <div className='PressKit_section'>
                            <div id={ids.Team} className='PressKit_box PressKit_team '>
                                <h3>THE TEAM</h3>
                                <h4>Core Team:</h4>
                                <a href="https://www.linkedin.com/in/petr-melicher%C3%ADk-96a75198/" target='_blank'
                                   rel="noopener noreferrer">Petr Melicherík</a>
                                <p>Development, Mechanics, Game & Level design, Dialogues, Story</p>
                                <a href="https://www.linkedin.com/in/skornok/" target='_blank'
                                   rel="noopener noreferrer">Petr Škorňok</a>
                                <p>Development, Story, Game & Level design</p>
                                <a href="https://www.fuchsdachs.com" target='_blank' rel="noopener noreferrer">Sanja
                                    Čežek</a>
                                <p>Art direction, Branding, UX/UI, Story, Illustration, Game & Level design</p>
                                <a href="https://www.fuchsdachs.com" target='_blank' rel="noopener noreferrer">Dušan
                                    Čežek</a>
                                <p>Creative direction, Illustration, Animation, Story, Game & Level design</p>

                                <h4>Collaborators:</h4>
                                <a href="https://www.artstation.com/pyrohyper" target='_blank'
                                   rel="noopener noreferrer">Marko Stanojević</a>
                                <p>Animation</p>
                                <a href="https://www.linkedin.com/in/emilgasparec" target='_blank'
                                   rel="noopener noreferrer">Emil Gašparec</a>
                                <p>Development, Level design</p>
                                <a href="https://bandzone.cz/ambit" target='_blank' rel="noopener noreferrer">Anita
                                    Kudličková, Ambit</a>
                                <p>Sound design, SFX</p>
                                <a href="https://bandzone.cz/ambit" target='_blank' rel="noopener noreferrer">Radek
                                    Nikl, Ambit</a>
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
                                        target='_blank' rel="noopener noreferrer">IGN CZ</a></p>
                                    <p>”The televised dystopia”, <a
                                        href="https://niveloculto.com/ministry-of-broadcast-la-distopia-televisada/"
                                        target='_blank' rel="noopener noreferrer">NIVEL OCULTO</a></p>
                                    <p>”An awesome new game, with killer animations”, <a
                                        href="https://80.lv/articles/ministry-of-broadcast-pixel-totalitarianism/"
                                        target='_blank' rel="noopener noreferrer">80.lvl</a>
                                    </p>
                                    <p>”From Pixel Art to Collectable Art”, <a
                                        href="https://www.branding.news/2018/10/24/ministry-of-broadcast-from-pixel-art-to-collectable-art/"
                                        target='_blank' rel="noopener noreferrer">BRANDING NEWS</a></p>
                                    <p>”An unexpected surprise coming from the Czech Republic”, <a
                                        href="https://www.vortex.cz/databaze/ministry-of-broadcast/"
                                        target='_blank' rel="noopener noreferrer">VORTEX</a>
                                    </p>
                                    <p>”A brand new indie game with unique atmosphere”, <a
                                        href="https://www.facebook.com/GamologyTrailers.Kelinetwork/videos/ministry-of-broadcast-gamology-news/938208233049795/"
                                        target='_blank' rel="noopener noreferrer">GAMOLOGY</a>
                                    </p>
                                    <p>Featured in Game Design, <a
                                        href="https://www.behance.net/gallery/70251671/Ministry-of-Broadcast-Collectable-Art-figure"
                                        target='_blank' rel="noopener noreferrer">Behance</a>
                                    </p>
                                </div>
                                <div className='PressKit_box PressKit_download'>
                                    <a href={MoB_press_kit} download="MoB_press_kit">DOWNLOAD PRESS KIT</a>
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