import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

// import flashcardsImg from '../assets/flashcards.png';
// import quizImg from '../assets/quiz.png';

const landingPage = (props) => {
    return (
        <div>
            <Navbar store={props.store} studyMode={false} />
            <div className="landing">
                {/* <div className="dashboard"> */}
                    <div className="landing__header">
                        <div className="landing__header--main">
                            Practice Makes Perfect
                        </div>
                        <div className="landing__header--secondary">
                            Study online with digital flashcards
                        </div>
                        <div className="landing__btn-group">
                            <NavLink 
                                to='/dashboard'
                                className="btn btn--landing"
                            >
                                Take a Look
                            </NavLink>
                        </div>
                    </div> 
                {/* </div> */}
            </div>
        </div>
    )
}

export default landingPage;