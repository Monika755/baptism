import "./Home.css";

import imm from "./assets/imm.png";
import cross from "./assets/cross.png";
import brother from "./assets/brother.png";

export default function Home() {
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

      <div className="brother-section">
        <img src={brother} alt="brother" className="brother-img" />

        <div className="brother-text">
          Օրհնված Վերադարձ
        </div>
      </div>
    </div>
  );
}