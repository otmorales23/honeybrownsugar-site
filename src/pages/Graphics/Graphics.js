import React from 'react';
import JustChatting from '../../images/JustChattingOverlay.png';
import BQCLogo from '../../images/BQC-Logo.png';
import Starting from '../../images/starting-soon.gif';
import BRB from '../../images/be-right-back.gif';
import Ending from '../../images/thanks.gif';
import DiscordLogo from '../../images/discord-logo.png';
import './graphics.css';

function Graphics () {
    return (
        <div className="graphics">
            <h2>Graphics I've Designed</h2>
            <p>
                Below is a sampling of graphics I've made. This selection includes logos, Twitch graphics and animated gifs. Enjoy!
            </p>
            <div className="images">
                <img src={JustChatting} alt="A pink and yellow, bee and honey themed just chatting twitch overlay."/>
                <div className="image-container">
                    <div>Just Chatting Overlay - Twitch</div>
                </div>
                <img src={BQCLogo} alt="A logo with a strawberry in the center with a rainbow circle around it that says Berry Queer Crafts"/>
                <div className="image-container">
                    <div>Sample Shop Logo</div>
                </div>
                <img src={Starting} alt="a pink and yellow bee themed stream starting scene for twitch"/>
                <div className="image-container">
                    <div>Starting Soon Scene - Twitch</div>
                </div>
                <img src={BRB} alt="a pink and yellow bee themed be right back starting scene for twitch"/>
                <div className="image-container">
                    <div>Be Right Back Scene - Twitch</div>
                </div>
                <img src={Ending}  alt="a pink and yellow bee themed stream ending scene for twitch" />
                <div className="image-container">
                    <div>Stream Ending Scene - Twitch</div>
                </div>
                <img src={DiscordLogo}  alt="a graphic of a beehive made out of pancakes with a whole in the center with bees coming out that says Honey's Busy Bees at the top"/>
                <div className="image-container">
                    <div>Discord Server Logo</div>
                </div>
            </div>
            <div className="disclaimer">
                <p>
                All of these graphics were made in either Adobe Illustrator, Adobe Express or Canva and are all for my personal use only. 
                Please do not distribute or copy any of these graphics without giving me proper credit.
                </p>
            </div>
        </div>
    )
}

export default Graphics;