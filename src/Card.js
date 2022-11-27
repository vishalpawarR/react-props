import React from "react";

function Card(props) {
  // console.log(props.cardColor);
  // this is to console the values of props recieved from the user
  const styles = {
    backgroundColor: props.cardColor,
    // height: 100,
    // width: 100,
    // making the width and height with Dynamic props
    height: props.height,
    width: props.width
  };

  return <div style={styles}></div>;
}


Card.defaultProps = {
  cardColor: "blue",
  width: 100,
  height: 100
}

export default Card;

/* 
class Card extends React.Component {
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }
    
    render() {
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width
        }
        
        return (
            <div style={styles}></div>
        )
    }
}
*/