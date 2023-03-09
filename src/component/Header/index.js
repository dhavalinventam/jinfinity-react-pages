import React from 'react'
import Logo from '../../assets/images/logo.png'
import '../../component/Header/header.css'

const index = () => {
  return (
   <>
    <div className='header-logo-div'>
        <img src={Logo} alt='Logo' />
    </div>
    </>
  )
}

export default index