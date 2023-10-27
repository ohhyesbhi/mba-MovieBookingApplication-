import React from 'react'

import logo from "../assets/logo1.png"
import userLogo from "../assets/user.jpg"

function Navbar() {
  return (
  <>
  <div className="navbar bg-base-100 mt-3">
  <div className="flex ml-8 w-[90%]">
      <div className='h-[60%] ml-2 flex items-center '>
        <img className='max-h-[100%] w-14' src={logo} />
        <p className='ml-3 font-serif font-bold text-2xl text-[#9aa3a8] font-mono'>bookingApp</p>
      </div>
      
    <div className="form-control w-[40%] ml-[5rem]">
      <input type="text" placeholder="Search" className="input input-bordered w-[100%] md:w-auto" />
    </div>
  </div>
  <div className="flex-none ">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-[70%]">
        <div className=" w-20 rounded-full">
          <img className='' src={`https://api.dicebear.com/6.x/micah/svg/seed=abhishek`} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  </>
  )
}

export default Navbar
