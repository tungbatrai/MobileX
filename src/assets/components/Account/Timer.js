/** @format */

import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <span style={{ color: "white" }}>
      {minutes === 0 && seconds === 0 ? null : (
        <span>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      )}
    </span>
  );
};

export default Timer;
