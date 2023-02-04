import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='flex justify between'>
        <div>
            <form className='w-60 h-70 max-w-sm
             bg-gray-100 rounded-mdsm:max-w-md 
             pr-10 text-sm px-6 py-10 mt-8 rounded-md'>
                <p className='my-6 text-pink-500'>Subscribe to our Newsletter</p>
                <div className='mb-3 text-blue-400'>
                    <label>Enter your name:</label>
                    <input className='p-2 rounded-full' 
                     type='text'
                     name='text' 
                     />
                </div>
                <div className='text-blue-400'>
                    <label>Enter your email:</label>
                    <input className='p-2 rounded-full'
                     type='text'
                     name='text' 
                     />
                </div>
                <button className='border-solid
                     border-2 bg-pink-500 py-1.5
                     px-12 rounded-full text
                     -white my-2 ml-4'>Submit
                </button>
            </form>
        </div>
        <div className='mx-40 my-20'>
            <h6 className=' mb-4 text-pink-500'>Important Links</h6>
            <ul>
                <li className='mb-2'><Link to='/home'>{'Home'}</Link></li>
                <li className='mb-2'><Link className='pr-4' to='/login'>{'Login'}</Link></li>
                <li className='mb-2'><Link to='/signup'>{'Sign Up'}</Link></li>
            </ul>
        </div>
        <div className='my-20'>
            <h6 className='mb-4 text-pink-500'>Social Media</h6>
            <ul>
                <li className='mb-2'>Facebook</li>
                <li className='mb-2'>Twitter</li>
                <li className='mb-2'>Instagram</li>
                <li className='mb-2'>LinkedIn</li>
            </ul>
        </div> 
    </div>
    
  )
}

export default Footer;
