import AccordionPart from "./Accordion";
import { useState } from "react";
import AllInformations from "../../Informations";
import styles from "./Footer.module.scss";

export default function Footer({ teamRef }) {
  const [activeFirstMountain, setActiveFirstMountain] = useState(true);
  const [activeSecondMountain, setActiveSecondMountain] = useState(false);
  const HandleActiveFirstMountain = () => {
    setActiveFirstMountain(!activeFirstMountain);
    setActiveSecondMountain(false);
  };
  const HandleActiveSecondMountain = () => {
    setActiveSecondMountain(!activeSecondMountain);
    setActiveFirstMountain(false);
  };
  return (
    <footer ref={teamRef}>
      <div className={styles.footerElement}>
        <div className={styles.headerPart}>
          <div className={styles.headerElement}>
            <ul className={styles.upTexts}>
              <li>
                <h2>02.</h2>
                <p>Climb</p>
              </li>
              <li>
                <p>{AllInformations.FooterText}</p>
              </li>
            </ul>
            <AccordionPart />
            <div className={styles.mountainsPart}>
              <div className={styles.onclickPart}>
                <p
                  className={activeFirstMountain ? styles.active : null}
                  onClick={HandleActiveFirstMountain}
                >
                  Mountain 1
                </p>
                <p
                  className={activeSecondMountain ? styles.active : null}
                  onClick={HandleActiveSecondMountain}
                >
                  Mountain 2
                </p>
              </div>
            </div>
          </div>
          <div className={styles.activeMountainPart}>
            {activeFirstMountain && (
              <div className={styles.activeMountain}>
                <p className={styles.scheduleText}>SCHEDULE</p>
                <ul>
                  <li>
                    <p>25 NOV 2016</p>
                    <p>28 NOV 2016</p>
                    <p>18 DEC 2016</p>
                    <p>7 YAN 2017</p>
                  </li>
                  <li>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                  </li>
                </ul>
              </div>
            )}
            {activeSecondMountain && (
              <div className={styles.activeMountain}>
                <p className={styles.scheduleText}>SCHEDULE</p>
                <ul>
                  <li>
                    <p>25 NOV 2017</p>
                    <p>28 NOV 2017</p>
                    <p>18 DEC 2017</p>
                    <p>7 YAN 2018</p>
                  </li>
                  <li>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.footerPart}>
          <div>
            <ul>
              <li>
                <img src={AllInformations.Logo} alt="Logo Image" />
              </li>
              <li>
                <p>LOS ANGELES</p>
                <p>MOUNTAINS</p>
              </li>
            </ul>
            <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
