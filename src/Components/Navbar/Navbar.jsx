import { useState, useEffect } from "react";
import AllInformations from "../../Informations";
import styles from "./Navbar.module.scss";

export default function Navbar({ historyRef, teamRef }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHistory = () => {
    historyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTeam = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div
        className={`${styles.navbarElement} ${
          scrolling ? styles.navbarElementScrolled : ""
        }`}
      >
        <div className={styles.logoPart}>
          <img src={AllInformations.Logo} alt="Logo Image" />
          <div
            className={`${styles.headerTexts} ${
              scrolling ? styles.showHeaderTexts : styles.hideHeaderTexts
            }`}
          >
            <p>LOS ANGELES</p>
            <p>MOUNTAINS</p>
          </div>
        </div>
        <div className={styles.texts}>
          <p onClick={scrollToHistory}>01.History</p>
          <p onClick={scrollToTeam}>02.Team</p>
        </div>
      </div>
    </nav>
  );
}
