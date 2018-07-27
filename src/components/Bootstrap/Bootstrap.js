import React from "react";

const styles = {
  img: {
    width: "50%",
  },
  rightNav: {
    float: "right",
    textAlign: "center",
    width: "50%",
    paddingTop: 34,
    fontSize: 24,
    fontWeight: "bold",
  },
};

const Bootstrap = (props) => (
  <div className="container">
    <div className="alert alert-primary" role="alert">
      <img src="https://www.returndates.com/backgrounds/bobsburgers.logo.png" alt="Bob's Burgers" style={styles.img} />

      <div className="rightNav" style={styles.rightNav}>
        <p>Current Score: {props.currentScore}</p>

        <p>Top Score: {props.topScore}</p>

        <p>{props.message}</p>
      </div>
    </div>
  </div>
);

export default Bootstrap;
