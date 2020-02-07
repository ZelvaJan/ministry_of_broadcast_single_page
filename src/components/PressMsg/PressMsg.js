import React, {Component} from 'react';
import './PressMsg.css';
import FA from 'react-fontawesome';

import icon from '../../assets/icon.png';

import PropTypes from "prop-types";

class PressMsg extends Component {

    static propTypes = {
        hidePressMsg: PropTypes.func.isRequired
    };


    render() {
        return (
            <div className='PressMsg_root'>
                <div className='PressMsg'>
                    <div className='PressMsg_content'>
                        <div className='PressMsg_box PressMsg_header'>
                            <button className='PressMsg_close_button' onClick={this.props.hidePressMsg}><FA
                                name='times'/></button>
                            <h2 className='PressMsg_title'>MINISTRY OF BROADCAST</h2>
                        </div>

                        <div className='PressMsg_section PressMsg_box'>
                            <div className='PressMsg_text_wrapper'>
                                <div className='PressMsg_text_title'>
                                    OVERVIEW
                                </div>
                                <div className='PressMsg_intro'>
                                    Ministry of Broadcast is a narrative-driven single player cinematic platformer
                                    mixing Orwellian world with the hypocritical shine and glamour of modern reality TV
                                    shows. Rife with dark humor, sarcastic quips, and a general absurdity of the system.
                                </div>

                                <div className='PressMsg_paragraph'>
                                    Inspired by games such as Prince of Persia (1989) and Oddworld: Abe’s Exoddus,
                                    Ministry of Broadcast revives the spirit of classic cinematic platformers where
                                    players need nimble run-and-jump reflexes as well as a healthy aversion to falling
                                    from precarious heights. Both you and the protagonist will struggle under the weight
                                    of a dystopian Regime and its subversive tactics, dutiful underlings, and deadly
                                    obstacles, we’ve packed the game with challenge, sarcasm, and jokes on all involved.
                                    Your crow-friend is going to mock you to your face... a lot.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    The gameplay of Ministry of Broadcast is as unforgiving as the totalitarian regime
                                    it portraits. The controls and physics are designed to feel like you are navigating
                                    a real man made of flesh and bones. Every mistake makes you feel the weight of your
                                    actions and how they impact the main character both metaphorically and literally as
                                    each mistake usually leads to gruesome death for which there are more than 30 unique
                                    animations each looking as much fun as horrifying.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    But gravity and precise movements is not the only thing that's in your way.
                                    Totalitarian regimes strive for your moral corruption which is an imperative to
                                    maintain their rule. And so players will be often asked to step out of your comfort
                                    zone to find the right solutions to regime's morally twisted puzzles.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    As the Regime would dictate, we have been very strict and meticulous with the
                                    Ministry of Broadcast’s creative direction. So that the artstyle is as memorable and
                                    recognizable as the story and gameplay, we have combined Russian and Czech
                                    avant-garde with beautiful vintage Swiss Alps advertising posters and a very
                                    carefully chosen color palette.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    The characters are modeled with as little pixels as possible in order for the
                                    players to be able to project on them what they feel as if the characters were a
                                    blank page. Basically we could say that to a certain degree the game says more about
                                    its players than about its creators.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    The Ministry of Broadcast is a debut game made by a team from Czech Republic who
                                    share the same ideals, dreams, visions, and love for internet profanity. It was
                                    released January 30th, 2020 on Steam and GOG (PC & Mac) for 14.99 $. Digital and
                                    physical release on Nintendo Switch is scheduled for April 28th, 2020.
                                </div>
                            </div>
                        </div>

                        <div className='PressMsg_section PressMsg_box'>
                            <div className='PressMsg_text_wrapper'>
                                <div className='PressMsg_text_title'>
                                    FEATURES
                                </div>
                                <div className='PressMsg_paragraph'>
                                    <span className='bold'>Cinematic platformer:</span> Run, jump, crash, and climb your
                                    way through each Arena as the narrative unfolds around you. Much of the story is
                                    unveiled via smoothly integrated animation sequences, within the environment, or
                                    from NPCs muttering bits of dialogue as you dive and dodge around them.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    <span className='bold'>Environmental HUD:</span> Rather than having a screen
                                    cluttered with overlaid indicators, HP bars, and minimaps, any information the
                                    player will need is incorporated into the environment. Hints and clues are meshed
                                    into the game’s art, subtle and specific, players will need a keen eye if they want
                                    to survive each Arena without breaking their legs.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    <span className='bold'>Puzzle-solving:</span> Use your wits, and at times a dash of
                                    ruthlessness, to advance through the Arenas. You’ll have to interact with the
                                    environment itself to solve most of the puzzles: use the protagonist’s momentum to
                                    move platforms, flip the occasional lever, and sometimes you might have to sacrifice
                                    an NPC or two to cross a particularly spiky pit.
                                </div>
                                <div className='PressMsg_paragraph'>
                                    <span className='bold'>Story and Personality:</span> Featuring lots of impish humor,
                                    Grade A sarcasm, and comic mischief, all balanced perfectly with the dark, heavy
                                    themes presented in this dystopian world.
                                </div>
                            </div>
                        </div>

                        <div className='PressMsg_section PressMsg_box'>
                            <div className='PressMsg_text_wrapper'>
                                <div className='PressMsg_text_title'>
                                    GAME BY
                                </div>
                                <div className='PressMsg_names'>
                                    Petr Melicherík & Petr Škorňok & Dušan Čežek & Sanja Čežek
                                </div>

                                <div className='PressMsg_text_title_small'>
                                    Collaborators
                                </div>
                                <div className='PressMsg_paragraph'>
                                    Emil Gašparec - Level design<br/>
                                    Ben McCulloh - Music composition, Sound design<br/>
                                    Jiří Huska - Scenario, Social Media Marketing<br/>
                                    Melike Huška - Social Media Marketing<br/>
                                    Marko Stanojević  - Animation
                                </div>

                                <div className='PressMsg_text_title_small'>
                                    Publishers
                                </div>
                                <div className='PressMsg_paragraph'>
                                    Hitcents, USA/EU<br/>
                                    PLAYISM, Japan
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End of content*/}

                    <img className='PressMsg_eye' src={icon} alt=''/>
                </div>
            </div>
        )
    }
}

export default PressMsg;