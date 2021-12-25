import React from 'react'
import '../index.css'

const Login = () => {
    return (
        <div className='container login-container mt-5'>
            <div className='child-container'>
                <div className='margin_div'>
                    <label>Login</label>
                </div>
                <div className='margin_div'>
                    <input type="text" placeholder='Enter Username' name='firstname'></input>
                </div>
                <div className='margin_div'>
                    <input type="password" placeholder='Enter Password' name='password'></input>
                </div>
                <div className='margin_div'>
                    <input type="Submit" ></input>
                </div>
            </div>
        </div>

    )
}

export default Login
