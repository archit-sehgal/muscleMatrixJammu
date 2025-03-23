import React from "react";
import namelogo from "../assets/namelogo.png";
import logocenter from "../assets/logocenter.png";
import ImageSlider from "./Slider.jsx";
const Home = () => {
  return (
    <div className="homemain flex">
      <div className="nav flex">
        <div className="leftnav flex">
          <div className="logo flex">
           
            <img src={namelogo} className="namelogo" alt="" />
          </div>
        </div>
        <div className="rightnav flex">
          <a href="/">Home</a>
          <a href="tel:+917380629555">Contact Now</a>
        </div>
      </div>
      <div className="heronew flex">
        <div className="hero-black flex">
          <div className="hero-black-content flex">
            <img src={logocenter} alt="" />
            <h1>Muscle Matrix</h1>
            <p>💪 Unlock Your Strength 💪</p>
          </div>
          <button onClick={() => window.scrollBy(0, 500)}>Explore 👇🏻</button>
        </div>
      </div>
      <div className="tours flex">
        <div className="shrivaishnomata  tr flex">
          <div className="ch-img pt">
          </div>
          <div className="ch-desc flex">
            <h2>Personal Training</h2>
            <p>
              Get customized workout plans and one-on-one coaching from
              certified trainers to accelerate your fitness journey.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+917380629555")}
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="shrivaishnomata  tr flex">
          <div className="ch-img sc">
          </div>
          <div className="ch-desc flex">
            <h2> Strength & Conditioning</h2>
            <p>
              Enhance muscle strength, endurance, & performance with
              our structured training programs.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+917380629555")}
            >
              Book Now
            </button>
          </div>
        </div>
        {/* Ayodhya Tour */}
        <div className="ayodhya tr flex">
          <div className="ch-img cardio">
            
          </div>
          <div className="ch-desc flex">
            <h2> Cardio & HIIT</h2>
            <p>
              Burn fat, boost stamina, and improve heart health with
              high-intensity interval training and cardio sessions.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+917380629555")}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Prayagraj Tour */}
        <div className="prayagraj tr flex">
          <div className="ch-img dng">
          </div>
          <div className="ch-desc flex">
            <h2>Diet & Nutrition Guidance</h2>
            <p>
              Fuel your body the right way with personalized meal plans designed
              to complement your workouts.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+917380629555")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <ImageSlider/>
      <div className="services flex">
        <div className="servicesimg flex">
          <h3>Start Your Fitness Journey Now</h3>
          <button
            onClick={() => (window.location.href = "tel:+917380629555")}
          >
            CONTACT US
          </button>
        </div>
      </div>
      <div className="footer flex">
        <div className="contact_sec flex">
          <a href="mailto:musclematrix@gmail.com">
            📩 musclematrix@gmail.com
          </a>
        </div>
        <div className="lastline">
          Copyright 2025 || Muscle Matrix Gym || Developed by{" "}
          <a href="https://www.digitaleditz.com/" target="_blank">
            DigitalEditz
          </a>
          <br />
          <div className="smlinksFooter flex">
            <a href="https://maps.app.goo.gl/5qZrxXeXp21ZX3d57" target="_blank"><i class="fa-solid fa-map-location-dot"></i> 
            <i> Location</i></a>
            <a
              className="SmLink"
              href="https://www.instagram.com/musclematrix_jammu/?hl=en"
              target="_blank"
            >
              <i className="fa-brands fa-square-instagram"></i> Instagram
            </a>
            <a
              className="SmLink smwb"
              href="https://wa.me/917889881847"
              target="_blank"
            >
              <i className="fa-brands fa-square-instagram"></i> Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
