import { useState } from "react";
import styles from "./Accordion.module.scss";

export default function AccordionPart() {
  const [activeFirstMountain, setActiveFirstMountain] = useState(true);
  const [activeSecondMountain, setActiveSecondMountain] = useState(true);
  const [rotateFirts, setRotateFirst] = useState(false);
  const [rotateSecond, setRotateSecond] = useState(false);
  const HandleActiveFirstMountain = () => {
    setActiveFirstMountain(!activeFirstMountain);
    setActiveSecondMountain(true);
    setRotateFirst(!rotateFirts);
  };
  const HandleActiveSecondMountain = () => {
    setActiveSecondMountain(!activeSecondMountain);
    setActiveFirstMountain(true);
    setRotateSecond(!rotateSecond);
  };
  return (
    <div className={styles.accordionContainer}>
      <div className={styles.onclickPart}>
        <div className={styles.firstPart}>
          <div
            className={styles.mountainButton}
            onClick={HandleActiveFirstMountain}
          >
            <p>Mountain 1</p>
            <img
              className={rotateFirts ? styles.activeImg : ""}
              src="/src/assets/Images/ArrowDown.svg"
              alt="arrow-down"
            />
          </div>
          {!activeFirstMountain && (
            <div className={styles.activeMountain}>
              <div className={styles.active}>
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
            </div>
          )}
        </div>
        <div className={styles.firstPart}>
          <div
            className={styles.mountainButton}
            onClick={HandleActiveSecondMountain}
          >
            <p>Mountain 2</p>
            <img
              className={rotateSecond ? styles.activeImg : ""}
              src="/src/assets/Images/ArrowDown.svg"
              alt="arrow-down"
            />
          </div>
          {!activeSecondMountain && (
            <div className={styles.activeMountain}>
              <div className={styles.active}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
