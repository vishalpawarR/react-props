import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card cardColor="red" />
      {/* With props value */}
      <Card />
      {/* Without prop values we can use the default props to set default values */}
      <Card cardColor="green" />
    </div>
  );
}

export default App;
