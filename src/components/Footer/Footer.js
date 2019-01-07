import React, {Component} from 'react';
import './Footer.css';
import asDiscord from '../../assets/logos/Social_Discord.svg';
import asDiscordActive from '../../assets/logos/Social_Discord_active.svg';
import asFacebook from '../../assets/logos/Social_Facebook.svg';
import asFacebookActive from '../../assets/logos/Social_Facebook_active.svg';
import asTwitter from '../../assets/logos/Social_Twitter.svg';
import asTwitterActive from '../../assets/logos/Social_Twitter_active.svg';
import asSteam from '../../assets/logos/Social_Steam.svg';
import asSteamActive from '../../assets/logos/Social_Steam_active.svg';
import PropTypes from "prop-types";

class Footer extends Component {

    static propTypes = {
        showPressKit: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.state = {
            subscriptionText: ''
        };
    }

    srcChange = (e, newImg) => {
        e.target.setAttribute('src', newImg);
    };


    render() {

        return (
            <div className='Footer_root'>
                <div className='Footer_tower'/>

                <div className='Footer_content'>
                    <div className='Footer_subscribe'>
                        <p className='Footer_subscribe_title'>SIGN UP FOR NEWS AND UPDATES:</p>
                        {/*MailChimp signUp form*/}
                        <div id='mc_embed_signup' className="Subscribe__wrapper">
                            <form method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                  action="https://ministryofbroadcast.us18.list-manage.com/subscribe/post?u=3a04c6ba139b2a873a72515e4&amp;id=4ea83437ad"
                                  className="validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">
                                    {/*<label htmlFor="mce-EMAIL">Sign up for news and updates</label>*/}
                                    <input type="email" value={this.state.subscriptionText} name="EMAIL"
                                           className="email" id="mce-EMAIL" placeholder="email address" required
                                           onChange={(event) => this.setState({subscriptionText: event.target.value})}
                                    />
                                    {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                    <div className='Subscribe__hidden' aria-hidden="true">
                                        <input type="text" name="b_3a04c6ba139b2a873a72515e4_4ea83437ad" tabIndex="-1"/>
                                    </div>
                                    <div className="clear">
                                        <input type="submit" value="SUBMIT" name="subscribe"
                                               id="mc-embedded-subscribe" className="button"/>
                                    </div>
                                </div>
                            </form>
                            {/*<img className='Subscribe__warnSign' src={warnSign} alt=''/>*/}
                        </div>
                    </div>
                    <div className='Footer_links'>
                        <a href="mailto:info@ministryofbroadcast.com?subject=MinistryOfBroadcast - Get in touch"
                           target='_blank' rel="noopener noreferrer">GET IN TOUCH</a>
                        <a href="https://twinpetes.com/" target='_blank' rel="noopener noreferrer">DEV BLOG</a>
                        <p onClick={this.props.showPressKit}>PRESS KIT</p>
                    </div>
                    <div className='Footer_social'>
                        <p className='Footer_social_title'>FIND US HERE:</p>
                        <div className='Footer_social_buttons'>
                            <a href="https://discord.gg/QnG3AHg" target='_blank' rel="noopener noreferrer"
                               className='Footer_social_link'>
                                <img onMouseOver={(e) => this.srcChange(e, asDiscordActive)}
                                     onMouseOut={(e) => this.srcChange(e, asDiscord)}
                                     width="40px" height="40px"
                                     src={asDiscord} alt='Discord'/>
                            </a>
                            <a href="https://www.facebook.com/TheWallShow/" target='_blank' rel="noopener noreferrer"
                               className='Footer_social_link'>
                                <img onMouseOver={(e) => this.srcChange(e, asFacebookActive)}
                                     onMouseOut={(e) => this.srcChange(e, asFacebook)}
                                     src={asFacebook} alt='Facebook'/>
                            </a>
                            <a href="https://twitter.com/OfBroadcast" target='_blank' rel="noopener noreferrer"
                               className='Footer_social_link'>
                                <img onMouseOver={(e) => this.srcChange(e, asTwitterActive)}
                                     onMouseOut={(e) => this.srcChange(e, asTwitter)}
                                     className='Footer_twitter' src={asTwitter} alt='Twitter'/>
                            </a>
                            <a href="https://store.steampowered.com/app/874040/Ministry_of_Broadcast/" target='_blank'
                               rel="noopener noreferrer" className='Footer_social_link'>
                                <img onMouseOver={(e) => this.srcChange(e, asSteamActive)}
                                     onMouseOut={(e) => this.srcChange(e, asSteam)}
                                     className='Footer_steam' src={asSteam} alt='Steam'/>
                            </a>
                        </div>
                    </div>
                </div>

                <p className='Footer_copyright'>Copyright © Ministry of Broadcast 2018-2019</p>
            </div>
        )
    }
}

export default Footer;