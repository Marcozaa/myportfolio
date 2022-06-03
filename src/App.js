import React, { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import particlesOptions2 from "./particles2.json"
import HeaderInfo from './components/HeaderInfo';
import { motion } from "framer-motion"
import Socials from './components/Socials';
import Navbar from './components/Navbar';
import { Button, useColorModeValue } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const Skills = React.lazy(() => import('./pages/Skills'));
const Homepage = React.lazy(() => import('./pages/Homepage'));
const BookShelf = React.lazy(() => import('./pages/BookShelf'));
const Projects = React.lazy(() => import('./pages/Projects'));

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const [mode, setMode] = useState("normal")

    return (
        <>
    <Navbar setMode={setMode} mode={mode}/>
    <Routes>

      <Route 
      path="/" 
      element={
        <React.Suspense fallback={<>...</>}>
            <Homepage setMode={setMode} mode={mode}/>
        </React.Suspense>
      } />
      <Route path="bookshelf" element={<React.Suspense fallback={<>Loading...</>}>
            <BookShelf />
        </React.Suspense>} />

      <Route path="projects" element={<React.Suspense fallback={<>Loading...</>}>
            <Projects />
      </React.Suspense>} />

      <Route path="skills" element={<React.Suspense fallback={<>Loading...</>}>
            <Skills />
        </React.Suspense>} />
      <Route path="invoices" element={<p> inv</p>} />
    </Routes>
    </>
    );
}

export default App;
