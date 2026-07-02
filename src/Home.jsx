import "./Home.css";

import imm from "./assets/imm.png";
import cross from "./assets/cross.png"; 
import church from "./assets/church.png";
import church1 from "./assets/church1.png"; 
import champagne from "./assets/champagne.png";
import paradise from "./assets/paradise.png"; 
import countdownBg from "./assets/nkar.png"; 
import { useEffect, useState } from "react";

export default function Home() { 
  const targetDate = new Date("2026-08-23T15:10:00");

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      return;
    }

    setTimeLeft({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
  return (
    <div className="home">
      {/* Առաջին էկրան */}
      <section className="hero">
        <img src={imm} alt="invitation" className="hero-img" />

        <div className="hero-text">
          <img src={cross} alt="cross" className="cross" />

          <h1>Սուրբ Մկրտություն</h1>
          <p className="date">03․08․2026</p>
          <p className="subtitle">Օրհնված սկիզբ</p> 
           <p className="subtitle">Օրհնված Վերադարձ</p> 
        </div>
      </section>

      {/* Երկրորդ էկրան */}
      <section className="invitation-section">
        <h2>ՍԻՐԵԼԻ ՀՅՈՒՐԵՐ</h2>

        <p>Սիրով հրավիրում ենք Ձեզ կիսելու մեզ հետ</p>

        <p className="names">Անահիտի և Կորյունի</p>

        <p>Սուրբ Մկրտության լուսավոր օրը։</p>
        <p>Սպասում ենք Ձեզ</p>

        <div className="date-block">
          <p>23</p>
          <p>Օգոստոսի</p>
          <p>2026</p>
        </div>
      </section> 

      {/* Եկեղեցու հատված */}
<section className="church-section">
  <img src={church} alt="Church" className="church-img" />

  <h2>Մկրտություն</h2>

  <p className="church-time">15:10</p>

  <p className="church-place">
    Մայր Աթոռ <br/>Սուրբ Էջմիածին
  </p>

  <a
    href="https://yandex.com/maps/?text=Mother%20See%20of%20Holy%20Etchmiadzin"
    target="_blank"
    rel="noopener noreferrer"
    className="map-btn"
  >
    <span>Ինչպես հասնել</span> 
  </a> 
   <img src={church1} alt="Map" className="map-icon" />
</section>
 
<section className="party-section">
  <img src={champagne} alt="Champagne" className="party-img" />

  <h2>Խնջույք</h2>

  <p className="party-time">18:00</p>

  <p className="party-place">
    Paradise Hall <br />
    Արմավիր
  </p>

  <a
    href="https://yandex.com/maps/?text=Paradise+Hall+Armavir"
    target="_blank"
    rel="noopener noreferrer"
    className="map-btn"
  >
    Ինչպես հասնել
  </a>

  <img src={paradise} alt="Paradise Hall" className="party-photo" />
</section>
 
  <section className="countdown-section">
  <img src={countdownBg} alt="" className="countdown-bg" />

  <div className="countdown-overlay">
    <h2>ՄԿՐՏՈՒԹՅԱՆԸ ՄՆԱՑ</h2>

    <div className="countdown">

      <div>
        <span>{timeLeft.days}</span>
        <p>Օր</p>
      </div>

      <div>
        <span>{timeLeft.hours}</span>
        <p>Ժամ</p>
      </div>

      <div>
        <span>{timeLeft.minutes}</span>
        <p>Րոպե</p>
      </div>

      <div>
        <span>{timeLeft.seconds}</span>
        <p>Վայրկյան</p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}