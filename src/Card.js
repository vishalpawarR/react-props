import React from "react";

function Card(props) {
  // console.log(props.cardColor);
  // this is to console the values of props recieved from the user
  const styles = {
    backgroundColor: props.cardColor,
    height: 100,
    width: 100,
  };

  return <div style={styles}></div>;
}


Card.defaultProps = {
  cardColor: "blue"
}

export default Card;
