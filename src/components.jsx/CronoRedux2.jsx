import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementCrono, resetCrono } from '../redux/crono/crono.actions';
import { startCrono, stopCrono } from '../redux/running/running.actions';

const CronoRedux2 = () => {
  const {crono} = useSelector((state)=>state.crono);
  const {running} = useSelector((state)=>state.running);
    const dispatch = useDispatch();
    const cambio = 100;

    useEffect(() => {
      let interval = null;
      if (running) {
        interval = setInterval(() => {
          dispatch(incrementCrono(cambio))
        }, cambio);
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
            <button onClick={() => dispatch(startCrono())}>Resume</button>
            <button onClick={() => dispatch(resetCrono())}>Reset</button>
          </>
        )}
        {!running && crono === 0 && (
          <button onClick={() => dispatch(startCrono())}>Start</button>
        )}
        {running && <button onClick={() => dispatch(stopCrono())}>Stop</button>}
      </>
    );
}

export default CronoRedux2