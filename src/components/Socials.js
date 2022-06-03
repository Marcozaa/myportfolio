import React from 'react'
import {AiFillGithub, AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import '../style/socials.css'
export default function Socials() {
  function redirectTo(link){ // Used to redirect to the desired webèage based on clicked icon
    window.location.replace(link);
  }
  return (
    <div className='socialsContainer'>
        <AiFillGithub 
        size={'2rem'} 
        cursor={'pointer'} 
        onClick={()=>redirectTo('https://github.com/Marcozaa')} />
        <AiOutlineInstagram 
        size={'2rem'} 
        cursor={'pointer'} 
        onClick={()=>redirectTo('https://www.instagram.com/mmarcozanchin/')}
        />
        <AiOutlineTwitter 
        size={'2rem'} 
        cursor={'pointer'} 
        onClick={()=>redirectTo('https://twitter.com/Marco42982395')}
        />
        <FiMail 
        size={'2rem'} 
        cursor={'pointer'} 
        onClick={()=>window.open('mailto:marcozanchin2@gmail.com')}
        />
    </div>
  )
}
