import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <div className='ml-8 mt-10 text-white text-xl'>
        <div>
            <p>Entertainment for everyone</p>
            <p>Stream or download series, movies, kid's <br></br> shows and more from just ksh 300pm</p>
        </div>
        <div className='my-8'>
            <Link to='/signup' className='bg-pink-500 rounded-full px-6 py-2
             mb-2 ml-14'>{'Sign Up'}</Link>
            <p className='text-sm ml-8 mt-4'>No contracts. Cancel anytime.</p>
        </div>

        {/* <div className='my-60'>
          <footer className=''>
            <Footer />
          </footer>
        </div> */}
    </div>
  )
}

export default Home;
