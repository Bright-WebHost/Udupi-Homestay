import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../api/PopUp';
import videoFile from '../../images/video/Sunrise.mp4'; // Ensure the video file is in the correct path.

const SunriseHomeVideo = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-12 col-12`}>
                        <div className="wpo-blog-content">
                            {blogs.slice(0, 4).map((blog, bitem) => (
                                <div className={`post ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media video-holder">
                                        {/* Inline styles for the <video> element */}
                                        <video
                                            src={videoFile}
                                            autoPlay
                                            loop
                                            muted
                                            controls
                                            playsInline
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '10px',
                                            }}
                                        ></video>
                                    </div>
                                    {/* Uncomment if additional details are needed */}
                                    {/* <div className="entry-details">
                                        <h3>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <p>
                                            Law is a great career path if you want to build a broad skill set that
                                            includes everything from critical thinking and strategic planning to
                                            communications. If you love rising to a challenge.
                                        </p>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`} className="read-more">
                                            READ MORE...
                                        </Link>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SunriseHomeVideo;
