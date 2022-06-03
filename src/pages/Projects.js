import React, { useCallback }from 'react'
import { FiCode } from 'react-icons/fi';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../style/projects.css'
import particlesProjectPage from "../particlesProjectPage.json";
import Project from '../components/Project';
import techTalk from '../images/techTalk.jpg'
import minecraftGenerator from '../images/minecraftGenerator.jpg'
import musicPlayer from '../images/musicPlayer.jpg'
import RSAchat from '../images/RSAchat.jpg'
import { motion } from 'framer-motion';
export default function Projects() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
  return (
      <div className="projects">
    
        <Particles options={particlesProjectPage} init={particlesInit}/>

        <motion.div className="projectsContainer"
        animate={{ opacity: [0,1], y: [40, 0]}}
                transition={{ duration: 1 }}>
            <div className="top">
                <FiCode size={'1.8rem'} />
                <h2>Some things i've built</h2>

            </div>
            <div className="projectsContent">
            <Project
            name ={'TechTalk'}
            description={['TechTalk is a ', <span id='colored'> chat </span>,' focused on tech topics (coding, system administration, robotics and much more..)']}
            image={techTalk}
            gitHublink={'https://github.com/Marcozaa/techtalk'}
            externalLink={'https://techtalk-9f0c7.web.app/'}
            tags={['React', 'Firebase', 'Chakra UI']}
            />
            <Project
            name ={'Map Generator'}
            description={['Procedural world generation with', <span id='colored'> perlin noise</span>,'']}
            image={minecraftGenerator}
            gitHublink={'https://github.com/Marcozaa/minecraft-proceduralmap-generator'}
            externalLink={null}
            tags={['Three.js', 'Perlin Noise']}
            />
            <Project
            name ={'Music player'}
            description={[ <span id='colored'> Music player </span>,'implemented in react.js using chillhop.com songs']}
            image={musicPlayer}
            gitHublink={'https://github.com/Marcozaa/react_musicPlayer'}
            externalLink={'https://react-music-player-pi-seven.vercel.app/'}
            tags={['ReactJS', 'APIs', 'SASS']}
            />
            <Project
            name ={'RSA online chat'}
            description={['Online chat with', <span id='colored'> RSA encryption </span>, 'implemented in javascript with ', <span id='colored'> multithreading </span>]}
            image={RSAchat}
            gitHublink={'https://github.com/Marcozaa/chat_crittografia'}
            externalLink={null}
            tags={['Socket.io', 'Cryptography']}
            />
            </div>

            <div className="bottom">
                <p>If you want to see all my projects, take a look at my <span 
                style={{
                    cursor: 'pointer'
                }} 
                onClick={()=>window.location.href = "https://github.com/Marcozaa"}
                id='colored'>
                    GitHub page
                </span>
                </p>
            </div>
        </motion.div>

     </div>
            
  )
}
