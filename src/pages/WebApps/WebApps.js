import React from 'react';
import Scheduler from '../../images/workday-scheduler.png';
import FashionFusion from '../../images/fashion-fusion.png';
import NoteTaker from '../../images/pastel-note-taker.png';
import CodingQuiz from '../../images/quiz-screenshot.png';
import './webapps.css';

function WebApps() {
    return (
        <div className="examples">
            <h2>Examples of My Work</h2>
            <div className="images">
                <a href="https://otmorales23.github.io/work-day-scheduler/" target="_blank">
                    <img src={Scheduler} alt="a pink-themed work day scheduler" />
                    <div className="image-container">
                        <div>Work Day Scheduler</div>
                    </div>
                </a>
                <a href="https://fashion-fusion-fdbc9c87836b.herokuapp.com/" target="_blank">
                    <img src={FashionFusion} alt="a screenshot of the homepage of a sample eCommerce webpage" />
                    <div className="image-container">
                        <div>eCommerce Page</div>
                    </div>
                </a>
                <a href="https://pastel-note-taker-fd1adcb5eb12.herokuapp.com/" target="_blank">
                    <img src={NoteTaker} alt="a screenshot of a simple, pink-themed note taker application" />
                    <div className="image-container">
                        <div>Note Taker App</div>
                    </div>
                </a>
                <a href="https://github.com/otmorales23/example-employee-tracker" target="_blank">
                    <img src={CodingQuiz} alt="a screenshot of a simple, pink-themed coding quiz application"/>
                    <div className="image-container">
                        <div>Coding Quiz App</div>
                    </div>
                </a>
            </div>
        </div >
    );
}


export default WebApps;