import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import PageTitle from '../../components/pagetitle';
import Logo from '../../images/allimg/logo/logo black.png';
import top from '../../images/allimg/top/whitetop.webp';

const BudgetHomestaysInUdupi = () => (
  <Fragment>

    {/* ✅ SEO META TAGS */}
    <Helmet>
      <title>Budget Homestays in Udupi | Affordable & Comfortable Stays</title>
      <meta
        name="description"
        content="Looking for budget homestays in Udupi? Find affordable and comfortable homestays near Udupi Temple, Malpe Beach, and Manipal with direct booking."
      />
    </Helmet>

    <Navbar Logo={Logo} />
    <PageTitle pageTitle="Budget Homestays in Udupi" src={top} />

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
      Budget Homestays in Udupi
    </h1>

    {/* ✅ Visible content */}
    <div className="wpo-project-single-area section-padding">
      <div className="container">

        <div className="wpo-project-single-title">
          <h3>Affordable Budget Homestays in Udupi</h3>
        </div>

        <p>
          These budget homestays in Udupi are ideal for pilgrims, students,
          solo travelers, and families looking for affordable accommodation
          without compromising on comfort. Located close to Udupi Sri Krishna
          Matta, Malpe Beach, Manipal University, and major travel routes.
        </p>

        <p>
          Looking for more choices?
          {' '}
          <Link to="/homestays-in-udupi">Explore all homestays in Udupi</Link>.
        </p>

        <ul style={{ lineHeight: '2.2', marginTop: '20px' }}>
          <li><Link to="/garden-villa">Garden Villa Homestay</Link></li>
          <li><Link to="/CottageHouse">Cottage House Homestay</Link></li>
          <li><Link to="/SunriseHome">Sunrise Home Homestay</Link></li>
        </ul>

      </div>
    </div>

    <Footer ftClass="wpo-site-footer-s2" />
    <Scrollbar />
  </Fragment>
);

export default BudgetHomestaysInUdupi;