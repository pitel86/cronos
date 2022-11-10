import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [num, setNum] = useState(0)
    useEffect(()=>{
        
        let interval = setInterval(() => {
            setNum((num) => num + 1);
        }, 100);
        

        return ()=> clearInterval(interval)
    },[])
  return (
    <div>{num}</div>
  )
}

export default UseEffect