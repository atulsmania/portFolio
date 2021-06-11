import React from "react";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const input = [
      ["Home", "fi-rr-home"],
      ["Projects", "fi-rr-laptop"],
      ["Certifications", "fi-rr-diploma"],
      ["Connect", "fi-rr-link"],
    ];
    console.log(this.props.highlight);

    return (
      <div className={styles.navContainer}>
        <i className={`fi-rr-caret-up ${styles.arrow}`}></i>
        {/* links */}
        <div className={styles.linksContainer}>
          {input.map((ele) => (
            <h3
              key={ele[0]}
              id={ele[0]}
              onClick={() => this.props.handleClick(ele[0])}
              className={this.props.highlight[ele[0]] ? styles.linkActive : ""}
            >
              <i className={ele[1]}></i>
            </h3>
          ))}
        </div>
      </div>
    );

    // return (
    //   <div className={styles.navContainer}>
    //     <div className={styles.timeLine}>
    //       {/* Logo */}
    //       {/* <div className={styles.timelineLogo}>
    //         <h3>TimeLine</h3>
    //       </div> */}
    //       {/* button */}
    //       <i className={`fi-rr-angle-double-right ${styles.arrow}`}></i>
    //     </div>
    //     {/* links */}
    //     <div className={styles.linksContainer}>
    //       {input.map((ele) => (
    //         <h3
    //           key={ele[0]}
    //           id={ele[0]}
    //           onClick={() => this.props.handleClick(ele[0])}
    //           className={this.props.highlight[ele[0]] ? styles.linkActive : ""}
    //         >
    //           <i className={ele[1]}></i>
    //           <span>{ele[0]}</span>
    //         </h3>
    //       ))}
    //     </div>
    //   </div>
    // );
  }
}

export default Navbar;
