import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Modal, Button } from 'react-bootstrap';

const ResponsiveWriting = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container">
            <div className="curosole-container">
                <div className='nav-container'>
                    <p className='logoheading'>Firefly</p>
                </div>
                <div className="hero beej-patakha">
                    <h2>The choice is yours.</h2>
                    <h3>Because they don't have one.</h3>
                    <button className='landingButton'><span>Quick View</span></button>
                </div>
            </div>
            <div className='Content_details'>
                <div className="about-container">
                    <hr className="left-line"/>
                    <h2 className="about-text">About</h2>
                    <hr className="right-line"/>
                </div>
                <div>
                    <div className="left-crack"></div>
                    <p>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their<br/> chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can<br/> be heard louder than their cries for miles. Buy them, burst them, brag about them.<br/><span className='boldtext'>The choice is yours. Because they don’t have one.</span></p>
                    <span className="right-crack"></span>
                </div>
                <div className="about-container2">
                    <hr className="left-line2"/>
                    <h2 className="about-text">Our products</h2>
                    <hr className="right-line2"/>
                </div>
            </div>
            {/* Modal */}
            <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Gift Voucher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1718365826/sai-food%20web/184835-OXJKZ0-324_mxut5k.jpg" className="IMAGE" alt="Gift Voucher" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div className='cards_container'>
                <div className="card-container">
                    <div>
                        <div className="card-image-container">
                        </div>
                        <div className="card-content">
                            <div className="card-title">Raju Rassibomb</div>
                            <button className="quick-view-button" onClick={handleShow}>QUICK VIEW</button>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div>
                        <div className="card-image-container">
                        </div>
                        <div className="card-content">
                            <div className="card-title">Ladiyon ki Rani Chani</div>
                            <button className="quick-view-button" onClick={handleShow}>QUICK VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="products-line"/>
            <div className="footer-container">
                <div className="footer-green-container">
                    <div className="follow-us-container">
                        <div className="follow-us-text">Follow us on</div>
                        <div className="social-media-icons">
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faYoutube} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveWriting;

