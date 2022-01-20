import './App.scss';
import React from "react";
import { useState } from "react";
import Progressbar from './components/progressbar/progressbar.component';
function App() {
  // const [percent, setpercent] = useState(0);

  // const handleClick =  (e) => {
  //   setpercent(e.target.value);
  //   const counter = document.querySelector('.counter');
  //   const circle = document.querySelector('circle');

  //   const result = (percent * 360 / 100 * 3.14 / 180 * circle.r.baseVal.value);
  //   const circleoffset = circle.getTotalLength() - result;




  //   const css = window.document.styleSheets[0];
  //   css.insertRule(`
  //    @keyframes newframes{
  //     0%{
  //       stroke-dashoffset: ${circle.getTotalLength()}
  //     }
  //     100%{
  //       stroke-dashoffset : ${circleoffset};
  //     }
  //   }`, css.cssRules.length);
  //   circle.style.strokeDashoffset = `${circle.getTotalLength() - result.toFixed()}`;
  //   circle.style.animation =  'newframes 2s';

  //   counter.textContent = `${percent}% `;
  // }

  return (
    <div className="App">
      {/* <div className='circle-container'>
        <input type="text" name="percent" onChange={e => { setpercent(e.target.value) }}></input>
        <button type="submit" onClick={handleClick}> click</button>
        <svg>
          <circle cx="60" cy="60" r="50" stroke='blue' fill="green" strokeDasharray='' strokeWidth='10' ></circle>
        </svg>
        <div className="counter">0</div>
        <div className="stop"></div>
        <div className="progressbar">Progress Bar</div>
      </div> */}
      <Progressbar></Progressbar>

    </div>
  );
}

export default App;
