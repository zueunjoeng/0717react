import React, { useState }from 'react'
import tabjson from "./json/tab.json"


function App3() {
    const [tabnm, setTabnm] = useState('notice');
     return (
        <div className="tabwrap d-flex container border">
            <ul className="tabs border">
                <li><button onClick={()=>{setTabnm('notice')}}>{tabjson["notice"]["title"]}</button></li>
                <li><button onClick={()=>{setTabnm('gallery')}}>{tabjson["gallery"]["title"]}</button></li>
                <li><button onClick={()=>{setTabnm('qna')}}>{tabjson["qna"]["title"]}</button></li>
            </ul>
            <div className="content col border">
                <ul>
                {
                    tabjson[tabnm]["content"].map((v, i)=>{
                        return(
                            <li key={`list${i}`}>
                                {
                                    v.split("|").map((vv, ii)=>{
                                     return(
                                        <>
                                       ii === 0 && <h2>{vv}</h2> && 10
                                     {/* &연산자 - 끝까지 읽고 랜더링되는 친구 /  마지막 && 10은 앞에 친구들이 참일때  */}
                                        </>
                                     )
                                    })
                                }
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
        
    )
}

export default App3

