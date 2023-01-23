import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const facebookLogin = 'We removed Facebook login.';
    const loginProblems = 'Having problems logging in?';

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {username, password}),
        })
            .then((res) => res.json())
            .then((data) => (data))
    }

  return (
    <section className='w-60 h-70 max-w-sm bg-gray-100 rounded-md sm:max-w-md
       my-auto mx-auto '>
      <div className='mt-2'>
        <div className='flex justify-around mr-10 mb-2'>
            <div className='border-solid border-2 border-gray-100 bg-white
            p-2 px-2 rounded float-left mr-2'><h6>Create account</h6></div>
            <div className='mt-3'><Link to='/signup'>{'Sign up'}</Link></div>
        </div>
        <form className='mr-10' onSubmit={handleSubmit}>
            <div>
                <label className='capitalize text-left ml-3'>username</label>
                <input className='p-2 rounded-full ml-2'
                  type="text"
                  name="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label className='capitalize text-left ml-3 mt-2'>password</label>
                <input className='p-2 rounded-full ml-2'
                  type="text"
                  name="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='flex justify-evenly m-6'>
                <div>
                    <input 
                      type='checkbox'
                      name='text' 
                      placeholder='' />
                </div>
                <div>
                    <p>Show Password</p>
                </div>  
            </div>
            <div>
                <button className='border-solid border-2 bg-pink-500
                py-2 px-12 rounded-full text-white my-2 ml-4' type='submit'>Sign in</button>
            </div>
            <div className='underline my-2 mx-4'>
                <p>Forgot Password</p>
            </div>
            <div className='ml-4 my-1 text-sm'>
                <p>{facebookLogin}</p>
                <p>{loginProblems}</p>
            </div>
            <div className='pb-4 ml-4'>
                <div>
                    <i></i>
                </div>
                <div>
                    <p>Chat to us</p>
                </div>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Login;


