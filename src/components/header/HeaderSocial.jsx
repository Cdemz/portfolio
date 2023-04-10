import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https:www.linkedin.com/in/ademola-adepoju-6ab37526b" target='_blank' rel="noreferrer">
            <BsLinkedin />
        </a>
        <a href="https:www.linkedin.com/in/ademola-adepoju-6ab37526b" target='_blank' rel="noreferrer" >
            <BsGithub />
        </a>

        <a href="https:www.linkedin.com/in/ademola-adepoju-6ab37526b" target='_blank' rel="noreferrer">
            <BsDribbble />
        </a>
        </div>
  )
}

export default HeaderSocial