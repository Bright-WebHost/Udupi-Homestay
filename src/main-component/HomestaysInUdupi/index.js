import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import PageTitle from '../../components/pagetitle';
import Logo from '../../images/allimg/logo/logo black.png';
import top from '../../images/allimg/top/whitetop.webp';

const HomestaysInUdupi = () => {
  return (
    <Fragment>

      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Homestays in Udupi | Budget & Family Homestays Near Malpe Beach</title>
        <meta
          name="description"
          content="Book the best homestays in Udupi near Malpe Beach, Krishna Temple & Manipal. Budget and family-friendly stays with direct booking."
        />
      </Helmet>

      <Navbar Logo={Logo} />
      <PageTitle pageTitle="Homestays in Udupi" src={top} />

      {/* ✅ SEO H1 (hidden but safe) */}
      <h1
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        Homestays in Udupi – Best Local Homestay Listings
      </h1>

      {/* ✅ Visible, helpful content */}
      <div className="wpo-project-single-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="wpo-project-single-wrap">
                <div className="wpo-project-single-item">

                  <div className="wpo-project-single-title">
                    <h3>Best Homestays in Udupi</h3>
                  </div>

                  <p>
                    Explore the best homestays in Udupi offering comfortable,
                    affordable, and family-friendly accommodation. These
                    homestays are located near popular attractions such as
                    Malpe Beach, Kapu Beach, Udupi Sri Krishna Matta,
                    Manipal University, and St. Mary’s Island.
                  </p>

                  <p>
                    Browse by category:
                    {' '}
                    <Link to="/homestays-near-malpe-beach">Homestays near Malpe Beach</Link>,
                    {' '}
                    <Link to="/family-homestays-in-udupi">Family Homestays in Udupi</Link>,
                    {' '}
                    <Link to="/budget-homestays-in-udupi">Budget Homestays in Udupi</Link>
                  </p>

                  <div className="wpo-project-single-title" style={{ marginTop: '30px' }}>
                    <h3>Available Homestays</h3>
                  </div>

                  <ul style={{ lineHeight: '2.2' }}>
                    <li><Link to="/Whitehouse">White House Homestay</Link></li>
 	            <Link to="/GardenVilla">Garden Villa Homestay</Link>
                    <li><Link to="/CottageHouse">Cottage House Homestay</Link></li>
                    <li><Link to="/SunriseHome">Sunrise Home Homestay</Link></li>
                    <li><Link to="/TopVilla">Top Villa Homestay</Link></li>
                    <li><Link to="/ChaletLabonne">Chalet La Bonne Vie</Link></li>
                    <li><Link to="/ViewPoint">ViewPoint Oasis</Link></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer ftClass="wpo-site-footer-s2" />
      <Scrollbar />
    </Fragment>
  );
};

export default HomestaysInUdupi;