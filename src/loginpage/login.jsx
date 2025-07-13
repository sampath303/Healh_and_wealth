import './login.css';
import { Link } from 'react-router-dom';

const Login=()=>{
  return (
        <div className='main-container'>
            <div className='secondary-container'>
                <form className='form-container'>
                    <h1>Login </h1>
            
                    <div className='detail-box'>
                        <input type='text' placeholder='Username'/>
                    </div>
                    <div className='detail-box'>
                        <input type='password' placeholder='Password'/>
                    </div>
                    <div className='forgot-pass'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#'>Forgot password</a>
                    </div>
                    <div className='submitbtn'>
                        <button>Login</button>
                    </div>
                    <div className='register'>
                        <p>Don't have an account?<Link to={'/signup'}>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
