import './login.css'
import { Link } from 'react-router-dom';
const Signup=()=>{
    return (
          <div className='main-container'>
              <div className='secondary-container'>
                  <form className='form-container'>
                      <h1>Sign up </h1>
              
                      <div className='detail-box'>
                          <input type='text' placeholder='Username'/>
                      </div>
                      <div className='detail-box'>
                          <input type='text' placeholder='E-mail'/>
                      </div>
                      <div className='detail-box'>
                          <input type='password' placeholder='Password'/>
                      </div>
                      <div className='forgot-pass'>
                          <label><input type='checkbox' />I agree to terms and conditions</label>
                      </div>
                      <div className='submitbtn'>
                          <button>Sign up</button>
                      </div>
                      <div className='register'>
                          <p>Already existing user?<Link to={'/login'}>Login</Link></p>
                      </div>
                  </form>
              </div>
          </div>
      );
  }

  export default Signup;