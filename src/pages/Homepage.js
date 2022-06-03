import React, { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../App.css';
import particlesOptions from "../particles.json";
import particlesOptions2 from "../particles2.json"
import HeaderInfo from '../components/HeaderInfo';
import { motion } from "framer-motion"
import Socials from '../components/Socials';
import Navbar from '../components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export function Homepage({mode, setMode}) {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    

    return (
        
        <div className="App">

            {mode == "normal" ? (
                <Particles options={particlesOptions} init={particlesInit}/>

            ): 
                <Particles options={particlesOptions2} init={particlesInit}/>
            }
            <motion.div
                animate={{ opacity: [0,1], y: [40, 0]}}
                transition={{ duration: 1 }}
            >
            
                <HeaderInfo />
            </motion.div>
            <motion.div
                animate={{ opacity: [0,1], y: [-40, 0]}}
                transition={{ duration: 1 }}
            >
            <Socials/>
            </motion.div>
            
        </div>
    );
}

export default Homepage;
