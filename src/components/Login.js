import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='ui form segment'>
                <div className='field'>
                    <label>Username</label>
                    <input placeholder='Username' name='username' type='text' />
                </div>
                <div className='field'>
                    <label>Password</label>
                    <input placeholder='Password' name='password' type='password' />
                </div>
                <div className='inline field'>
                    <div className='ui checkbox'>
                        <input name='terms' type='checkbox' />
                        <label>I agree to the terms and conditions</label>
                    </div>
                </div>
                <div className='ui primary submit button'>
                    <Link to="/Header" style={{ color: 'white' }}>Submit</Link>
                </div>
                <div className='ui reset button'>Reset</div>
            </form>
        </div>
    );
};

export default Login;
