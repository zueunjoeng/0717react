import React, { Fragment, useEffect } from 'react'
import qnalist from './json/qna.json'

const {qna} = qnalist;
//구조할당, 같은 표현 > const {qna} = qna.qna;

function Qna(props) {  
    useEffect(()=>{
        const dts = document.querySelectorAll("#qna dt");

        dts[0].addEventListener('click', ()=>{
            dts[0].classList.add('on');

        })
        dts[0].click();
    })
    return (
      
    <dl className='container my-5' id={props.keynm}>
        {
         qna.map((v, i)=>{
                return(
                    <Fragment key={`qnalist${i}`}>
                        <dt className='bg-dark text-white'>{v.Q}</dt>
                        <dd className='py-5'>{v.A}</dd>
                    </Fragment>
                )
            })
        } 
    </dl>
    )
   
}

export default Qna
