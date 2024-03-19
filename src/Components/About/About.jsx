import React from "react";
import "./about.scss";
import { HiMiniArrowRight } from "react-icons/hi2";

const About = () => {
  console.log(window.innerWidth);
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-content__header">
          <p className="heading">About Bitcoin</p>
          <p className="about-sec_head">What is Bitcoin?</p>
          <p className="about-content">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <div className="about-content__description">
          <p className="about-sec_head">Lorem ipsum dolor sit amet</p>
          <p className="about-content">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="about-content">
            Diam present massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros done cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p className="about-content">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            conque ipsum fames amer aul. Purus ultrices tinciaunt volutpat In
            ecer. Unlamcorper aui
          </p>
        </div>
        <div className="about-content__services">
          <p className="heading pb-0">Already Holding Bitcoin ?</p>
          <div className="services-des">
            <div className="des-content content-1">
              <img src="src/assets/about-img1.jpeg" alt="img1" />
              <div>
                <p>Calculate your Profits</p>
                <button>
                  Check Now
                  <HiMiniArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="des-content content-2">
              <img src="src/assets/about-img2.jpeg" alt="img2" />
              <div>
                <p>Calculate your tax liability</p>
                <button>
                  Check Now
                  <HiMiniArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content__end">
          <p className="about-content">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
