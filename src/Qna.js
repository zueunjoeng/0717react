import React, { Fragment, useEffect } from 'react'
import qnalist from './json/qna.json'

const {qna} = qnalist;
//구조할당, 같은 표현 > const {qna} = qna.qna;

function Qna(props) {  

        const dts = document.querySelectorAll("#qna dt");
        //대상을 저장하는 것은 useEffect에 넣지 않아도 실행
        //실행식은 useEffect안에 넣어줘야 한다.

        // dts[0].addEventListener('click', ()=>{
        //     dts[0].classList.add('on');
        // })
        // dts[0].click();

        const dtsclick = (num)=>{
            dts.forEach((v, i)=>{
                v.classList.remove('on');

            })
            dts[num].classList.add('on')
        }

        useEffect(()=>{   
            dtsclick(0) //실행식
           }, [])
        

    return (
      
    <dl className='container my-5' id={props.keynm}>
        {
         qna.map((v, i)=>{
                return(
                    <Fragment key={`qnalist${i}`}>
                        <dt className='bg-dark text-white' onClick={()=>{dtsclick(i)}}>{v.Q}</dt>
                        <dd className='py-5'>{v.A}</dd>
                    </Fragment>
                )
            })
        } 
    </dl>
    )
   
}

export default Qna
