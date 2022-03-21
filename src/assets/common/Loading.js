import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import RingLoader from "react-spinners/RingLoader";
export default function Loading({ load = false, ...props }) {
  const styles = {
    container: {
      position: "fixed",
      left: "0",
      top: "0",
      zIndex: '10000',
      background: '#00000029',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  };

  const { promiseInProgress } = usePromiseTracker();
  
  if (promiseInProgress) {
    return (
      <div
        style={styles.container}
      >
        <RingLoader color="black" loading="true" css="" size={100} speedMultiplier={1} /> <span className="font-weight-bold">LOADING...</span> 
      </div>
    );
  }
  return null;
}
