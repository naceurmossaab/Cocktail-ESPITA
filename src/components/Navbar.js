import React from 'react'
import logo from '../logo.svg'

const Navbar = ({ view, setView }) => {
  console.log({ view, setView });
  return (
    <nav className='flex flex-row justify-between w-full m-2 border-4'>
      <div>logo</div>
      <div>home</div>
      <div>about</div>
    </nav>
  )
}

export default Navbar
