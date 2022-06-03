import React, { useState } from 'react'
import '../style/navbar.css'
import {AiOutlineArrowsAlt} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Button, useColorMode } from '@chakra-ui/react'
import {GiMeshBall} from 'react-icons/gi'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Navbar({mode, setMode}) {
    const location = useLocation();
    
  return (
    <div className='navbar'>
        {location.pathname == "/projects" ? (
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><div><span id='at'>@</span>home</div></Link>
        ):
            <Link style={{ textDecoration: 'none', color: 'white' }} to="projects"><div><span id='at'>@</span>projects</div></Link>

        }
        {mode == "normal" ? (
            <AiOutlineArrowsAlt onClick={()=>setMode("baloon")} cursor={'pointer'}/>
        ): 
            <GiMeshBall onClick={()=>setMode("normal")} cursor={'pointer'}/>
        }
        {/*{mode == "dark" ? (
            <motion.div
            animate={{ opacity: [0,1]}}
            >
                <FiMoon onClick={()=>setMode("light")}/>
            </motion.div>
        ):
            <motion.div
            animate={{ opacity: [0,1]}}
            >
                <FiSun onClick={()=>setMode("dark")}/>
            </motion.div>
        }
        */}
        

        </div>
  )
}
