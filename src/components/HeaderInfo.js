import React from 'react'
import '../style/headerInfo.css'
import { Typewriter } from 'react-simple-typewriter'
import {MdLocationSearching} from 'react-icons/md'
export default function HeaderInfo() {
  return (
    <div className='headerInfo'>
        <h1>hi, i'm <span id='bold'>marco!</span></h1>
        <p>cs student <span id='bold'>+ </span> 
        <Typewriter
            words={['designer', 'developer']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={270}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </p>
        {/*<div className="location">
            <><MdLocationSearching /> </><>italy</>
        </div>*/}

    </div>
  )
}
