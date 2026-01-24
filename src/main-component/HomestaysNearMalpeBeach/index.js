import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import PageTitle from '../../components/pagetitle';
import Logo from '../../images/allimg/logo/logo black.png';
import top from '../../images/allimg/top/whitetop.webp';

const HomestaysNearMalpeBeach = () => (
  <Fragment>

    {/* ✅ SEO META TAGS */}
    <Helmet>
      <title>Homestays Near Malpe Beach | Beachside Stays in Udupi</title>
      <meta
        name="description"
        content="Discover the best homestays near Malpe Beach in Udupi. Ideal beachside stays for families, couples, and travelers with direct booking."
      />
    </Helmet>

    <Navbar Logo={Logo} />
    <PageTitle pageTitle="Homestays Near Malpe Beach" src={top} />

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
      Homestays Near Malpe Beach in Udupi
    </h1>

    {/* ✅ Visible, helpful content */}
    <div className="wpo-project-single-area section-padding">
      <div className="container">

        <div className="wpo-project-single-title">
          <h3>Best Homestays Near Malpe Beach</h3>
        </div>

        <p>
          Stay close to the coast with the best homestays near Malpe Beach in
          Udupi. These homestays are perfect for beach lovers, families, and
          couples looking for peaceful stays near Malpe Beach, Kapu Beach,
          St. Mary’s Island, and other popular coastal attractions.
        </p>

        <p>
          Looking for more options?
          {' '}
          <Link to="/homestays-in-udupi">Explore all homestays in Udupi</Link>.
        </p>

        <ul style={{ lineHeight: '2.2', marginTop: '20px' }}>
          <li><Link to="/Whitehouse">White House Homestay</Link></li>
          <li><Link to="/garden-villa">Garden Villa Homestay</Link></li>
          <li><Link to="/ViewPoint">ViewPoint Oasis</Link></li>
        </ul>

      </div>
    </div>

    <Footer ftClass="wpo-site-footer-s2" />
    <Scrollbar />
  </Fragment>
);

export default HomestaysNearMalpeBeach;