import React from "react";
import './Offers.css';

const Offers = () => {
  return (
    <section className="section offers" id="offers" aria-label="offers">
      <div className="container">
      <figure className="card-banner img-holder" style={{ "--width": 200, "--height": 200 }}>
          <img src="./assets/images/offers.jpg" width="500" height="500" alt="" className="img-cover" />
      </figure>
        <div className="offers-list">
          <div className="offer-card">
            <h3>Haircut & Beard Trim Combo</h3>
            <p>Get a haircut and beard trim together at a special price of 25%.</p>
          </div>
          <div className="offer-card">
            <h3>Senior Citizen Discount</h3>
            <p>Seniors enjoy 20% off on all grooming services every Monday and Wednesday.</p>
          </div>
          <div className="offer-card">
            <h3>Student Special</h3>
            <p>Show your student ID and get 15% off any haircut or style.</p>
          </div>
          <div className="offer-card">
            <h3>Loyalty Program</h3>
            <p>Sign up for our loyalty program and earn points for every visit to redeem free services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
