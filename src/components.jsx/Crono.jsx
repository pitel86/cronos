import React, { useEffect, useState } from "react";

export const Crono = () => {
  const [crono, setCrono] = useState(0);
  const [running, setRunnig] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setCrono((crono) => crono + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div>
        <>
          <span>{("0" + Math.floor((crono / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((crono / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((crono / 10) % 100)).slice(-2)}</span>
        </>
      </div>
      
      {!running && crono > 0 && (
        <>
          <button onClick={() => setRunnig(true)}>Resume</button>
          <button onClick={() => setCrono(0)}>Reset</button>
        </>
      )}
      {!running && crono === 0 && (
        <button onClick={() => setRunnig(true)}>Start</button>
      )}
      {running && <button onClick={() => setRunnig(false)}>Stop</button>}
    </>
  );
};
