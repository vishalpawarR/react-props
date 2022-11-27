import React from "react";
import PropTypes from "prop-types";

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

// This is just a dev tool so we will not get the errors after react build

// React Docs on PropTypes:
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

Card.propTypes = {
  cardColor: PropTypes.string.isRequired,
  // cardColor: PropTypes.oneOf(["red", "blue"]) to make it taken from the given options
  height: PropTypes.number,
  width: PropTypes.number.isRequired
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