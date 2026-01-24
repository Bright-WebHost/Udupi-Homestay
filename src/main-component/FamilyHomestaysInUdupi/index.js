import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import PageTitle from '../../components/pagetitle';
import Logo from '../../images/allimg/logo/logo black.png';
import top from '../../images/allimg/top/whitetop.webp';

const FamilyHomestaysInUdupi = () => (
  <Fragment>

    {/* ✅ SEO META TAGS */}
    <Helmet>
      <title>Family Homestays in Udupi | Spacious & Safe Stays for Families</title>
      <meta
        name="description"
        content="Find the best family homestays in Udupi with spacious rooms and a safe environment. Ideal for family vacations near temples, beaches, and Manipal."
      />
    </Helmet>

    <Navbar Logo={Logo} />
    <PageTitle pageTitle="Family Homestays in Udupi" src={top} />

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
      Family Homestays in Udupi
    </h1>

    {/* ✅ Visible content */}
    <div className="wpo-project-single-area section-padding">
      <div className="container">

        <div className="wpo-project-single-title">
          <h3>Best Family Homestays in Udupi</h3>
        </div>

        <p>
          Planning a family trip to Udupi? These family-friendly homestays
          offer spacious accommodation, comfort, and a peaceful environment.
          Ideal for families visiting Udupi Sri Krishna Matta, Malpe Beach,
          Manipal University, and nearby attractions.
        </p>

        <p>
          Want to see all options?
          {' '}
          <Link to="/homestays-in-udupi">Explore all homestays in Udupi</Link>.
        </p>

        <ul style={{ lineHeight: '2.2', marginTop: '20px' }}>
          <li><Link to="/Whitehouse">White House Homestay</Link></li>
          <li><Link to="/CottageHouse">Cottage House Homestay</Link></li>
          <li><Link to="/SunriseHome">Sunrise Home Homestay</Link></li>
          <li><Link to="/TopVilla">Top Villa Homestay</Link></li>
        </ul>

      </div>
    </div>

    <Footer ftClass="wpo-site-footer-s2" />
    <Scrollbar />
  </Fragment>
);

export default FamilyHomestaysInUdupi;