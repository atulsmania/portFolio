import React from "react";
import styles from "./Home.module.css";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sign}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            <span className={styles.name}>Atul Chuahan</span>
            <br />
            <span className={styles.position}>web Developer</span>
          </div>
        </div>
        <div className={styles.social}>
          <a href="https://www.instagram.com/faintd_monk/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/atul-chauhan-5270a6101/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/AtulCHA68694097" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div className={styles.location}>
          <a href="https://goo.gl/maps/e6kH9KbESFeST5DK6" target="_blank">
            <i class="fas fa-map-marker-alt"></i> Noida, India
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
