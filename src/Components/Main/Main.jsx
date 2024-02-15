import { useState, useEffect, useRef } from "react";
import AllInformations from "../../Informations";
import styles from "./Main.module.scss";

export default function Main({ historyRef }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imagesElementRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imagesElementRef.current) {
      const containerWidth = imagesElementRef.current.offsetWidth;
      const transformValue = -(containerWidth / 4) * activeIndex;
      imagesElementRef.current.style.transform = `translateX(${transformValue}px)`;
    }
  }, [activeIndex]);

  return (
    <div ref={historyRef} className={styles.main}>
      <div className={styles.textsContainer}>
        <h1>01.</h1>
        <p>History</p>
        <p>{AllInformations.MainText}</p>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.imagesContainer}>
          <div className={styles.imagesElement} ref={imagesElementRef}>
            {[
              AllInformations.Slider1,
              AllInformations.Slider2,
              AllInformations.Slider1,
              AllInformations.Slider2,
              AllInformations.Slider1,
              AllInformations.Slider2,
              AllInformations.Slider1,
            ].map((image, index) => (
              <img src={image} alt={`Slide ${index + 1}`} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={
                index === activeIndex ? styles.activeButton : styles.button
              }
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
