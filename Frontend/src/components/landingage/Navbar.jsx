import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="bg-black flex items-center justify-between px-6 py-6 text-white sticky top-0 z-30" style={{ boxShadow: "0px 4px 12px #9333ea" }}>
  <div>
    <img src={logo} alt="Logo" className="h-10 w-[200px]" />
  </div>
  <ul className="flex space-x-6">
  <li className='text-[20px] hover:text-[#FFD700] text-white inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10  py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
        <NavLink to="/">Home</NavLink>
      </li>
    <li className="text-[20px] hover:text-[#FFD700] text-white inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10  py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
    <NavLink to="/about">About</NavLink>
    </li>
    <li className="text-[20px] hover:text-[#FFD700] text-white inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10  py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
    <NavLink to="/contact">Contact</NavLink>
    </li>
    <li className="text-[20px] hover:text-[#FFD700] text-white inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10  py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
    <NavLink to="/features">Features</NavLink>
    </li>
    <li className="text-[20px] hover:text-[#FFD700] text-white inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10  py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
    <NavLink to="/signin">Signin</NavLink>
    </li>
    <li className="text-[20px] hover:text-[#FFD700] text-white inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10  py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
    <NavLink to="/signup">Signup</NavLink>
    </li>
  </ul>
</div>

  )
}

export default Navbar
