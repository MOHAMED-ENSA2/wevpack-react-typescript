import React from "react";
import Button from "./components/button/Button";
import Image from "./images/a.jpg";

const App = (): JSX.Element => {
  return (
    <div>
      mais component
      <Button />
      <img src={Image} />
      {process.env.name}
    </div>
  );
};

export default App;
