import React, { useState }from 'react'
import tabjson from './json/tab.json'

function App3() {  
    const [tabnm , setTabnm ] = useState('notice');

    return (
        <div className="tabwrap d-flex container border">
            <ul className="tabs border">
                <li><button onClick={()=>{ setTabnm('notice') }} >{tabjson["notice"]["title"]}</button></li>
                <li><button onClick={()=>{ setTabnm('gallery') }} >{tabjson["gallery"]["title"]}</button></li>
                <li><button onClick={()=>{ setTabnm('qna') }} >{tabjson["qna"]["title"]}</button></li>
            </ul>
            <div className="content col border">
                <ul>
                {
                  tabjson[tabnm]["content"].map(( v, i )=>{
                    return(
                        <li key={`list${i}`} >
                            {
                                v.split("|").map((vv, ii)=>{
                                    return(
                                      
                                     ii === 0 ? <h2>{vv}</h2> : <p>{vv}</p>
                                      
                                     
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
