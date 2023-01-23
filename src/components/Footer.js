import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <div>
            <form>
                <p>Subscribe to our Newsletter</p>
                <div>
                    <input type='text' name='text' placeholder='Enter your name' />
                    <input type='text' name='text' placeholder='Enter your email' />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
        <div>
            <Link to='/login'>{'Login'}</Link>
            <Link to='/signup'>{'Sign Up'}</Link>
        </div>
        
    </div>
  )
}

export default Footer;

// create_table :users do |t|
// t.string :username
// t.string :password_digest
// end

// ActiveRecord::RecordInvalid