import React from 'react';
import './App.css';
import list from './json/list.json'



function hovereffect (num){
    document.querySelectorAll(".list li").item(num).classList.add('red');
}
const leaveeffect = (num) =>{
  document.querySelectorAll(".list li").item(num).classList.remove('red');
}

function App() {
 

  return (
    <div className="list">
      {
        list.notice.map((listvalue, idx)=>{
          return(
            <li onMouseEnter={()=>{ hovereffect (idx)}}
                onMouseLeave={()=>{ leaveeffect(idx)}}
            >{
              listvalue.split("|").map((v, i)=>{
                return(
                  
                  //어레이 중 하나는 h2 그외는 span으로 -> 삼항식
                  i=== 0 ? <h2>{v}</h2> : <span>{v}</span>
                )
              })
              }</li>
          )
        })
      }
      <li></li>
      
    </div>
  );
}

export default App;
