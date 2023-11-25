import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const Counter = () => {
  const [counter, setcounter] = useState(1);
  const [stop, setStop] = useState(null);

  var CounterTimer;

  useEffect(() => {
    if (stop === false) {
      CounterTimer = setInterval(() => setcounter((per) => per + 1), 1000);
    }
    console.log(CounterTimer)

    return () => clearInterval(CounterTimer);
  });

  const submitHandler = () => setStop(false);

  const resetHandler = () => {
    setcounter(1);
    setStop(true);
  };

  const stopHandler = () => {
    setStop(true);
  };

  return (
    <div>
      <h1 style={{"color":"green"}}>{counter}</h1>
      <Button  variant="success" onClick={submitHandler}>
        STAR
      </Button>{" "}
      <Button  variant="primary" onClick={resetHandler}>
      RESET
      </Button>{" "}
      <Button variant="danger" onClick={stopHandler}>
      STOP
      </Button>{" "}
    </div>
  );
};

export default Counter;
