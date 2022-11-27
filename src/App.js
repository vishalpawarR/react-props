import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card cardColor="red" />
      {/* With a props value */}
      <Card />
      {/* even if we dont give a prop value it will take a default value of the props  */}
      {/* without a prop value this will cause a issue */}
      <Card cardColor="green" />
    </div>
  );
}

export default App;
