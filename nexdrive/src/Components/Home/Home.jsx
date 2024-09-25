import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './Home.css'; // Import CSS for additional styling
import cam from "../../assets/cam.png";
import fleet from "../../assets/fleet.png";
import news from "../../assets/news.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faVideo, faSearch, faDollarSign, faEyeSlash, faLocationDot, faAmbulance, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import FAQAccordion from './FAQAccordion';
import CustomCarousel from './CustomCarousel';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    const [showCookieNotification, setShowCookieNotification] = useState(true);

    const [thumbsUpCount, setThumbsUpCount] = useState([10, 5, 8]);
    const [thumbsDownCount, setThumbsDownCount] = useState([2, 1, 0]);
    const [thumbsUpClicked, setThumbsUpClicked] = useState([false, false, false]);
    const [thumbsDownClicked, setThumbsDownClicked] = useState([false, false, false]);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation in milliseconds
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should happen only once
        });
      }, []);
    const increaseThumbsUp = (index) => {
        const newCounts = [...thumbsUpCount];
        newCounts[index] += 1;
        setThumbsUpCount(newCounts);
        setThumbsUpClicked((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index]; // Toggle clicked state
            return updated;
        });
    };

    const increaseThumbsDown = (index) => {
        const newCounts = [...thumbsDownCount];
        newCounts[index] += 1;
        setThumbsDownCount(newCounts);
        setThumbsDownClicked((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index]; // Toggle clicked state
            return updated;
        });
    };
    const handleAcceptCookies = () => {
        setShowCookieNotification(false);
    };

    return (
        <div className="home">
            <div className="section1">
                <div className="header">
                    <p className="header-text">Flash Pre-Booking for Limited Time Period</p>
                </div>
                {showCookieNotification && (
                    <div className="cookie-notification">
                        <p className="cookie-title">We drive on cookies</p>
                        <div className="cookie-content">
                            <p className="cookie-description">
                                We use cookies to make sure you have the best experience on our site and platform. Learn more.
                            </p>
                            <div className="cookie-buttons">
                                <button onClick={handleAcceptCookies} className="btn btn-primary">Accept Cookies</button>
                                <button className="btn btn-outline-secondary" disabled>Cookie settings</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="content">
                    <h1 className="content-heading">
                        Next-Gen Fleet Safety with <br />
                        Ai-powered safety technology
                    </h1>
                    <button className="btn-light-green" disabled>Request a demo</button>
                </div>
            </div>
            <div className="section2">

                <div className="top-half"  data-aos="fade-up">
                    <h2 className="top-heading">Fleets face growing risks</h2>
                    <div className="grid-container">
                        <div className="grid-item" data-aos="fade-left">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <h3 className="grid-heading">Live Crash</h3>
                            <h3 className="grid-heading">Location & Alerts</h3>
                            <div className="grid-content">
                                <p>
                                    Instantly access crash locations on a map with live video feeds.
                                    Receive real-time alerts via WhatsApp, email, and in-app notifications
                                    for immediate awareness and action.
                                </p>
                            </div>

                        </div>

                        <div className="grid-item" data-aos="fade-right">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faEyeSlash} />
                            </div>
                            <h3 className="grid-heading">Distracted and</h3>
                            <h3 className="grid-heading">drowsy driving</h3>
                            <div className="grid-content">
                                <p>
                                    Distracted driving is the leading cause of vehicle accidents, resutlting in about 700 injuries every day.
                                </p>
                            </div>

                        </div>

                        <div className="grid-item" data-aos="fade-right">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faDollarSign} />
                            </div>
                            <h3 className="grid-heading">Predictive analysis</h3>
                            <h3 className="grid-heading"></h3>
                            <div className="grid-content">
                                <p>
                                    Harnessing data insights, our technology has the potential to predict accident-prone areas, enabling proactive measures and targeted safety interventions.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bottom-half" data-aos="zoom-in">
                    <div className="left-half">
                        <img src={cam} alt="Camera" className="camera-image" />
                    </div>
                    <div className="right-half">
                        <p className="connected-text">DRIVE CONNECTED</p>
                        <h2 className="right-heading">Introducing Connected Dash Cams</h2>
                        <p className="description">
                            Enhance your driving experience with NexDrive's AI-powered dash cam. Safeguard your vehicle both on the road and in parking with live monitoring, instant emergency alerts, AI-driven incident detection, and additional features.
                        </p>
                        <button className="demo-button">Request a demo</button>
                    </div>
                </div>

            </div>
            <div className="section3">
                <div className="content-wrapper">
                    <div className="blue-background">

                        <div className="content-wrapper">
                            <div className="blue-background">
                                <div className="left-side">
                                    <p className="connected-text">LTE DASH CAMS</p>
                                    <h2 className="right-heading">Connected capabilities and more</h2>
                                </div>
                                <div className="right-side">
                                    <div className="custom-grid-container">
                                        <div className="custom-grid-item">
                                            <div className="icon-container2">
                                                <FontAwesomeIcon icon={faVideo} className="icon" />
                                            </div>
                                            <div className="text-container">
                                                <h3 className="custom-grid-heading">4K & QHD video</h3>
                                                <p className="custom-grid-content">
                                                    Don't miss the details. Capture everything with super crisp video.
                                                </p>
                                                <p className="custom-grid-link">Choose your dash cam →</p>
                                            </div>
                                        </div>

                                        <div className="custom-grid-item">
                                            <div className="icon-container2">
                                                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                                            </div>
                                            <div className="text-container">
                                                <h3 className="custom-grid-heading">Live GPS tracking</h3>
                                                <p className="custom-grid-content">
                                                    Track your vehicle 24/7 directly from your phone when someone else is driving
                                                </p>
                                                <p className="custom-grid-link">Choose your dash cam →</p>
                                            </div>
                                        </div>

                                        <div className="custom-grid-item">
                                            <div className="icon-container2">
                                                <FontAwesomeIcon className='icon' icon={['fas', 'circle']} />
                                                <span>LIVE</span>
                                            </div>
                                            <div className="text-container">
                                                <h3 className="custom-grid-heading">Remote video streaming</h3>
                                                <p className="custom-grid-content">
                                                    Worried about your car? Check in on it anytime, anywhere.
                                                </p>
                                                <p className="custom-grid-link">Choose your dash cam →</p>
                                            </div>
                                        </div>
                                        <div className="custom-grid-item">
                                            <div className="icon-container2">
                                                <FontAwesomeIcon className='icon' icon={['fas', 'car']} />
                                                <span>P</span>
                                            </div>
                                            <div className="text-container">
                                                <h3 className="custom-grid-heading">Parking alerts</h3>
                                                <p className="custom-grid-content">
                                                    Bump? Accident? Scratch? Our connected dash cams will catch it and send you an alert.
                                                </p>
                                                <p className="custom-grid-link">Choose your dash cam →</p>
                                            </div>
                                        </div>

                                        <div className="custom-grid-item">
                                            <div className="icon-container2">
                                                <FontAwesomeIcon icon={faAmbulance} className="icon" />
                                            </div>
                                            <div className="text-container">
                                                <h3 className="custom-grid-heading">Real-time emergency alerts</h3>
                                                <p className="custom-grid-content">
                                                    Always be there for your loved ones. NexDrive alerts your emergency contacts in case of an accident.
                                                </p>
                                                <p className="custom-grid-link">Choose your dash cam →</p>
                                            </div>
                                        </div>
                                        <div className="custom-grid-item">
                                            <div className="icon-container2">
                                                <FontAwesomeIcon icon={faFileAlt} className="icon" />
                                            </div>
                                            <div className="text-container">
                                                <h3 className="custom-grid-heading">Easily share proof</h3>
                                                <p className="custom-grid-content">
                                                    Sending video evidence has never been easier.
                                                </p>
                                                <p className="custom-grid-link">Choose your dash cam →</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <div className="section4" data-aos="fade-up">
                <h5 className="centered-text">LIVE STREAM. LIVE ALERTS.</h5>
                <h1 className="centered-heading">NexDrive Connect</h1>
                <img src={fleet} alt="Fleet" className="centered-image" />
                <h3 className="centered-text">Customers see up to 90% reduction in distracted driving, collisions, and losses.</h3>
            </div>

            <div className="section5" data-aos="fade-up">
                <h1 className='centered-heading'>Feedbacks</h1>
                <div className="rating-container">
                    <span className="rating">4.8</span>
                    <span className="stars">★★★★★</span>
                </div>
                <p>Based on 4,341 Reviews</p>
                <div className="search-bar">
                    <input type="text" placeholder="Search Reviews" className="search-input" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
                <div className="reviews-section">
                    <div className="reviews-tabs">
                        <span className="reviews-count active">Reviews: <span className="reviews-number">4,341</span></span>
                        <select className="dropdown">
                            <option value="most-recent">Most Recent</option>
                            <option value="highest-rated">Highest Rated</option>
                        </select>
                    </div>
                    <div className="underline"></div>

                    <div className="reviews-container">
                        <div className="review-box">
                            <h4 className="reviewer-name">Kendrick T.</h4>
                            <p className="reviewer-nation">United States</p>
                            <span className="verified-buyer">Verified Buyer</span> <span className="review-date">| March 5, 2023</span>
                            <div className="star-rating">★★★★★</div>
                            <p className="highlighted-words">Love the dash cam!</p>
                            <p className="review-content">
                                I’ve been using the NexDrive dash cam for a few months now, and it has significantly improved my driving experience. The clarity is incredible, and it’s very user-friendly. Highly recommend it to everyone!
                            </p>
                            <div className="helpfulness">
                                Was this helpful?
                                <span
                                    className={`thumbs-up ${thumbsUpClicked[0] ? 'clicked' : ''}`}
                                    onClick={() => increaseThumbsUp(0)}
                                >
                                    👍 <span className="thumbs-count">{thumbsUpCount[0]}</span>
                                </span>
                                <span
                                    className={`thumbs-down ${thumbsDownClicked[0] ? 'clicked' : ''}`}
                                    onClick={() => increaseThumbsDown(0)}
                                >
                                    👎 <span className="thumbs-count">{thumbsDownCount[0]}</span>
                                </span>
                            </div>
                        </div>
                        <div className="review-box">
                            <h4 className="reviewer-name">Chrishtopher D.</h4>
                            <p className="reviewer-nation">Canada</p>
                            <span className="verified-buyer">Verified Buyer</span> <span className="review-date">| March 10, 2023</span>
                            <div className="star-rating">★★★★☆</div>
                            <p className="highlighted-words">It's okay!</p>
                            <p className="review-content">
                                The only problem with this camera is it's very slow. Viewing your car when you got a notification or just checking takes more than a minute. Plus, parking mode is useless unless someone hits your car very hard.
                            </p>
                            <div className="helpfulness">
                                <span className="helpfulness-text">Was this helpful?</span>
                                <span
                                    className={`thumbs-up ${thumbsUpClicked[1] ? 'clicked' : ''}`}
                                    onClick={() => increaseThumbsUp(1)}
                                >
                                    👍 <span className="thumbs-count">{thumbsUpCount[1]}</span>
                                </span>
                                <span
                                    className={`thumbs-down ${thumbsDownClicked[1] ? 'clicked' : ''}`}
                                    onClick={() => increaseThumbsDown(1)}
                                >
                                    👎 <span className="thumbs-count">{thumbsDownCount[1]}</span>
                                </span>
                            </div>

                        </div>
                        <div className="review-box">
                            <h4 className="reviewer-name">Ali Khan</h4>
                            <p className="reviewer-nation">UK</p>
                            <span className="verified-buyer">Verified Buyer</span> <span className="review-date">| March 15, 2023</span>
                            <div className="star-rating">★★★★★</div>
                            <p className="highlighted-words">Highly recommended!</p>
                            <p className="review-content">
                                Highly recommended! The NexDrive dash cam has been a game changer for me. It gives me peace of mind knowing that my drives are being recorded. Excellent video quality!
                            </p>
                            <div className="helpfulness">
                                <span className="helpfulness-text">Was this helpful?</span>
                                <span
                                    className={`thumbs-up ${thumbsUpClicked[1] ? 'clicked' : ''}`}
                                    onClick={() => increaseThumbsUp(1)}
                                >
                                    👍 <span className="thumbs-count">{thumbsUpCount[1]}</span>
                                </span>
                                <span
                                    className={`thumbs-down ${thumbsDownClicked[1] ? 'clicked' : ''}`}
                                    onClick={() => increaseThumbsDown(1)}
                                >
                                    👎 <span className="thumbs-count">{thumbsDownCount[1]}</span>
                                </span>
                            </div>

                        </div>

                    </div>
                    <div className="load-more-reviews">
                        <span className="load-more-text">Load More Reviews  →</span>
                    </div>

                </div>

            </div>
            <div className="section6" data-aos="fade-up">
                <h1 className='centered-heading head3'>Real NexDrive Stories</h1>
                <div className="stories-container">
                    <div className="story-box">
                        <img src={news} alt="Story 1" className="story-image" />

                        <p className="story-description">"There are three sides to every story. My story, the other driver;s story and the truth. Nexdrive gives you the truth."</p>
                        <h3 className="story-title">Michael Gargan Merrick, New York</h3>
                    </div>
                    <div className="story-box">
                        <img src={news} alt="Story 1" className="story-image" />

                        <p className="story-description">"I sent the video to the insurane company, they completely reimbursed me for any of my costs."</p>
                        <h3 className="story-title">Sierra Townsend. Cedartown, Georgia.</h3>
                    </div>
                    <div className="story-box">
                        <img src={news} alt="Story 1" className="story-image" />

                        <p className="story-description">"The NexDrive Dash cam video was all the proof I needed to show that I needed to show that I wasn't at fault."</p>
                        <h3 className="story-title">Yorman Sanchez. Miramar, Florida.</h3>
                    </div>
                    <div className="story-box">
                        <img src={news} alt="Story 1" className="story-image" />

                        <p className="story-description">"Incrdibly comforting to know that we're going to find out why it happened, when it happened, how it happened."</p>
                        <h3 className="story-title">William Rivers. Tampa, Florida</h3>
                    </div>
                </div>
            </div>

            <div className="section7" data-aos="fade-up">
                <h1 className='centered-heading head3'>Frequently Asked Questions?</h1>
                <div className="faq-container">
                    <FAQAccordion />
                </div>
            </div>


            <div className="section8" data-aos="fade-up">
                <h1 className='centered-heading head3'>Trusted by over 800 brands</h1>
                <CustomCarousel />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
