import React from "react";
import styles from "./AboutUs.module.css"; // Import CSS module for styling

const AboutUs = () => {
  return (
    <div
      className={styles["about-us-container"]}
      style={{ marginTop: "100px" }}
    >
      <div className={styles["about-us-content"]}>
        <h2>OUR MISSION</h2>
        <p>
          Awaiting Tours is your gateway to unforgettable travel experiences
          around the globe. Founded by a team of passionate travelers, we are
          dedicated to helping adventurers from all walks of life discover the
          wonders of the world.
        </p>
        <p>
          Our mission is simple: to inspire and empower travelers to embark on
          life-changing journeys. We believe that travel has the power to
          broaden horizons, foster cultural understanding, and create lifelong
          memories. With Awaiting Tours, every trip is an opportunity for
          adventure, exploration, and personal growth.
        </p>
        <p>
          Whether you're seeking thrilling adventures, serene getaways, or
          cultural immersion, we've got you covered. From exotic destinations to
          hidden gems, our carefully curated tours offer something for every
          traveler. At awaiting tours we always endeavour to organize group
          tours as much as we can so that journey will be pocket friendly , it
          forces you to meet strangers and make new friends by losing sight of
          all familiar comforts but we also aspire to inspire solo travellers
          who seek peace and privacy for finding themselves by getting lost. .
          we have a large number of domestic as well as international
          itineraries avalible to choose from , for the families and selected
          romantic gateways for couples.
        </p>
        <p>
          At Awaiting Tours, we prioritize customer satisfaction and safety
          above all else. Our experienced team works tirelessly to ensure that
          every aspect of your journey is seamless and memorable. From
          personalized itineraries to expert guidance, we go above and beyond to
          make your travel dreams a reality.
        </p>
        <br />
        <br />

        <h3>Contact Us</h3>
        <p>
          Email: info@awaitingtours.com
          <br />
          Phone: 9370286499
          <br />
          Address: 123 Street ,Thane East.
        </p>
      </div>
      <div className={styles["about-us-images"]}>
        <img
          src="\imgs\img1DOM.jpg"
          alt=" 1"
          style={{ height: "200px", marginBottom: "30px" }}
        />
        <br />
        <img
          src="\imgs\instagram.png"
          alt=" 2"
          style={{ height: "200px", marginBottom: "30px" }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
