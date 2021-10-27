import React, { useState, useRef } from "react";
import proj1 from "../asset/img/projet1.png";
import proj2 from "../asset/img/projet2.png";
import proj3 from "../asset/img/projet3.png";
import proj4 from "../asset/img/projet4.png";

export default function Carousell() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-text">
        <h4> Massa metus proin </h4>
        <h2> Dolor imperdiet </h2>
        <p>
          Phasellus risus turpis, pretium sit amet magna non, molestie ultricies
          enim. Nullam pulvinar felis at metus malesuada.
        </p>
      </div>

      <div className="buttons">
        <button
          disabled={ scrollX ===0 ? true : false}
          className="prev"
          onClick={() => slide(-250)
          }
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        <button
          disabled={ scrolEnd ? true : false}
          className="next"
          onClick={() => slide(+250)}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="carous" ref={scrl} onScroll={scrollCheck}>
        <div className="projet">
          <a href="/">
          <div className="content-proj">
          <img src={proj1} alt="projet1"></img>
          <h4> Duis porta ligula rhoncus euismod pretium </h4>
          <i className="fas fa-arrow-right"></i>
          </div>
          </a>
        </div>
        <div className="projet">
          <a href="/">
        <div className="content-proj">
          <img src={proj2} alt="projet2"></img>
          <h4> Etiam aliquet congue consequat </h4>
          <i className="fas fa-arrow-right"></i>
          </div>
          </a>
        </div>
        <div className="projet">
          <a href="/">
        <div className="content-proj">
          <img src={proj3} alt="projet3"></img>
          <h4> Maecenas a venenatis enim </h4>
          <i className="fas fa-arrow-right"></i>
          </div>
          </a>
        </div>
        <div className="projet">
          <a href="/">
        <div className="content-proj">
          <img src={proj4} alt="projet4"></img>
          <h4> Sed a magna semper, porta purus eu, ullamcorper ligula </h4>
          <i className="fas fa-arrow-right"></i>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}
