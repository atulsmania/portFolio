import React from "react";
import { Certifications, Connect, Projects, Home } from "./Content";
import styles from "./MainContent.module.css";

function MainContent(props) {
  return (
    <div className={styles.container}>
      {props.render.Home && <Home />}
      {props.render.Projects && <Projects />}
      {props.render.Certifications && <Certifications />}
      {props.render.Connect && <Connect />}
    </div>
  );
}

export default MainContent;
