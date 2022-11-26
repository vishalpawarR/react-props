import React from "react";

function Card(props) {
  console.log(props.cardColor);
  const styles = {
    backgroundColor: props.cardColor,
    height: 100,
    width: 100,
  };

  return <div style={styles}></div>;
}

export default Card;
