import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CronoRedux = () => {
    const {crono, running} = useSelector((state)=>state);
    const dispatch = useDispatch();
    const cambio = 100;

    useEffect(() => {
      let interval = null;
      if (running) {
        interval = setInterval(() => {
          dispatch({type: 'addTime', payload: cambio})
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
            <button onClick={() => dispatch({type: 'resume'})}>Resume</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
          </>
        )}
        {!running && crono === 0 && (
          <button onClick={() => dispatch({type: 'start'})}>Start</button>
        )}
        {running && <button onClick={() => dispatch({type: 'stop'})}>Stop</button>}
      </>
    );
}

export default CronoRedux