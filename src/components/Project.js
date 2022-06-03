import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import '../style/project.css'
export default function Project({name, description, image, gitHublink, externalLink, tags}) {
  return (
    <div className='project'>
        <div className="left">
            <img src={image} />
        </div>
        <div className="right">
            <div className="right-top">
                <div className="type"><p>Featured project</p></div>
                <h1 className='name'>{name}</h1>
            </div>
            <div className="description">
                {description}
            </div>
            <div className="right-bottom">
                <div className="tags">{tags.map(tag=>(
                    <p className='tag'>{tag}</p>
                ))}</div>
                <h1 className='icons'>
                    <FiGithub 
                    cursor={'pointer'}
                    onClick={()=>window.location.replace(gitHublink)}/>
                    {externalLink && (
                    <FiExternalLink
                    cursor={'pointer'}
                    onClick={()=>window.location.replace(externalLink)} />
                    )}
                </h1>
            </div>
        </div>
    </div>
  )
}
