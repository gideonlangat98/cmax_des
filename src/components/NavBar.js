import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
  
    return (
        <nav className="border-solid border-2 border-pink-500
        bg-gray-300 border-l-transparent border-r-transparent border-t-transparent
         py-6">
            <div>
                <Link className='mx-4 text-xl text-pink-700' to='/'>{'ShowMax'}</Link>
                <ul className='mb-6'>
                    <div className='flex justify-between float-right mr-10'>
                        <div className='pb-4'>
                            <li className='bg-white py-2 px-6
                            relative rounded-full mr-4'>
                                <Link to='/login'>{'Login'}</Link>
                            </li>
                        </div>
                        <div>
                            <li className='bg-white py-2 px-6 rounded-full'>
                                <Link to='/signup'>{'Signup'}</Link>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;