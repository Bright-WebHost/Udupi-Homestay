import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../api/PopUp';

const WhiteVideo = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="" style={{ marginBottom: '80px' }}>
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-12 col-12`}>
                        <div className="wpo-blog-content">
                            <div className="post">
                                <div className="entry-media video-holder" style={{ position: 'relative', paddingBottom: '56.25%' }}>
                                    {/* Embed YouTube video with controls */}
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/PpzhQhWP0XM?autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=1&rel=0`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '10px',
                                        }}
                                    ></iframe>
                                </div>
                            </div>
                            {/* Optional additional content */}
                            {/* <div className="entry-details">
                                <h3>
                                    <Link onClick={ClickHandler} to={`/blog-single/${blogs[0].id}`}>
                                        {blogs[0].title}
                                    </Link>
                                </h3>
                                <p>
                                    Law is a great career path if you want to build a broad skill set that
                                    includes everything from critical thinking and strategic planning to
                                    communications. If you love rising to a challenge.
                                </p>
                                <Link onClick={ClickHandler} to={`/blog-single/${blogs[0].id}`} className="read-more">
                                    READ MORE...
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhiteVideo;
