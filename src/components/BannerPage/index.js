import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const BannerPage = (props) => {
    const isMobile = window.innerWidth <= 768; // Check if the screen is mobile-sized

    return (
        <div className="wpo-about-area-s4 banner-container">
            <div className="container" style={{ maxWidth: '1200px', width: '100%', padding: '20px' }}>
                <div
                    className="row align-items-center banner-row"
                    style={{
                        justifyContent: 'center',
                        flexWrap: 'wrap', // Ensure items wrap on smaller screens
                    }}
                >
                    <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 banner-img-container">
                        <div className="wpo-about-img">
                            <div className="left-shape">
                                <div className="square-shape"></div>
                                <div className="shape-top" >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="shape-left" >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-10 col-lg-12 col-md-12 col-sm-12 banner-text-container"
                        style={{
                            textAlign: 'center', // Center text on smaller screens
                        }}
                    >
                        <div
                            className="wpo-about-text banner-text"
                            style={{
                                marginTop: isMobile ? '-24px' : '-30px',
                                padding: isMobile ? '29px' : '30px',
                            }}
                        >
                            <div
                                className="wpo-about-title banner-title"
                                style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '15px' : '20px',
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row', // Row for desktop, column for mobile
                                    gap: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center', // Center items in the container
                                    borderRadius: '4px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: isMobile ? '18px' : '24px',
                                        color: '#0D0845',
                                        margin: 0, // Remove default margin
                                    }}
                                >
                                    Contact Us On WhatsApp For Pricing
                                </p>
                                <a
                                    href="https://wa.me/918971220576?text=Hello, I would like to inquire about pricing."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme-btn whatsapp-btn"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#849826',
                                        color: 'white',
                                        textDecoration: 'none',
                                        padding: isMobile ? '10px 15px' : '15px 20px',
                                        borderRadius: '3px',
                                        fontSize: isMobile ? '16px' : '18px',
                                    }}
                                >
                                    <FaWhatsapp
                                        style={{
                                            marginRight: '10px',
                                            fontSize: isMobile ? '18px' : '20px',
                                        }}
                                    />
                                    ENQUIRE NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPage;
