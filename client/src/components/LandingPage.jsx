import React from 'react';
import Navbar from './Navbar';
import flashcardsImg from '../assets/flashcards.png';
import quizImg from '../assets/quiz.png';

const landingPage = (props) => {
    return (
        <div>
            <Navbar store={props.store} studyMode={false} />
            <div className="dashboard">
                <div className="landing__header">
                </div>
                <div className="landing__operation">
                    <div className="landing__operation">
                        <div className="landing__operation--screenshot--left">
                            <img src={flashcardsImg} />
                        </div>
                        <div className="landing__operation--screenshot--right">
                            <img src={quizImg} style={{ height: '100%' }}/>
                        </div>
                    </div>
                    <div className="landing__features">
                        <div>Features:</div>
                        <ul>
                            <li>Create your own stacks</li>
                            <li>Study publicly shared stacks</li>
                            <li>Bookmark questions for later study</li>
                            <li>Prepare yourself for your next quiz</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default landingPage;