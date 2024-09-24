import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './Home.css'; // Import CSS for additional styling
import cam from "../../assets/cam.png";
import fleet from "../../assets/fleet.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faVideo, faSearch, faDollarSign, faEyeSlash, faLocationDot, faAmbulance, faFileAlt } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [showCookieNotification, setShowCookieNotification] = useState(true);

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

                <div className="top-half">
                    <h2 className="top-heading">Fleets face growing risks</h2>
                    <div className="grid-container">
                        <div className="grid-item">
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

                        <div className="grid-item">
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

                        <div className="grid-item">
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

                <div className="bottom-half">
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
                                                <FontAwesomeIcon className='icon' icon={['fas', 'circle']} style={{ marginRight: '5px' }} />
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
                                                <FontAwesomeIcon className='icon' icon={['fas', 'car']} style={{ marginRight: '5px' }} />
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

            <div className="section4">
                <h5 className="centered-text">LIVE STREAM. LIVE ALERTS.</h5>
                <h1 className="centered-heading">NexDrive Connect</h1>
                <img src={fleet} alt="Fleet" className="centered-image" />
                <h3 className="centered-text">Customers see up to 90% reduction in distracted driving, collisions, and losses.</h3>
            </div>

            <div className="section5">
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
                    <span className="reviews-count">Reviews: <span className="reviews-number">4,341</span></span>
                    <select className="dropdown">
                        <option value="most-recent">Most Recent</option>
                        <option value="highest-rated">Highest Rated</option>
                    </select>
                </div>
            </div>






        </div>
    );
};

export default Home;
