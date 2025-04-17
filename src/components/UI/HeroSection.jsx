import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from 'react';

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Explore the world with us</h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            <Navlink to='/country'>
            Start Exploring <FaLongArrowAltRight />
            </Navlink>
           
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world is beautiful"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
