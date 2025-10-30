import React, { useState } from 'react'

const CountTime = () => {

  const [ time ,setTime] = useState(0)

const handleInput =(e) =>{
  setTime(parseInt(e.target.value * 60));
}
const formatTime = ()=>{
  const min= String(Math.floor(time/60)).padStart(2,'0');
  const sec = String(time%60).padStart(2,'0');
  return `${min} : ${sec}`;
}
  return (
    <>
        <div className='countdown-timer'>
        <h1>Contdown Timer</h1>
        <div className='timer-display'>

          <input  onChange={handleInput} type="number"  placeholder='Enter Time In Minutes'/>

          <div>{formatTime()}</div>

          <div className='timer-controls'>

            <button>Start</button>
            <button>Pause</button>
            <button>Reset</button>

          </div>
        </div>

        </div>

    </> 
  )  }

    export default CountTime 