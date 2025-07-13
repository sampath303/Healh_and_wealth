import './footer.css'
import Instalogo from './instalogo.png'
import Facebooklogo from './facebooklogo.jpeg'
import Maillogo from './Maillogo.png'
function footer(){
    return(
       <div className='footercontainer'>
        <div className='container'>
            <div className='row'>
              <div className='companydetails'>
                <h3 className='h3'>ZENITH FIT</h3>
                    <p className='p1'>+91-855-510-0705</p>
                    <p className='p1'>Amaravati,Andhra Pradesh</p>
                    <p className='p1'>Srmap University,neerukonda.</p>
              </div>
              <div className='gethelp'>

              </div>
              <div className='h3'>
                 <h3>Follow us</h3>
                 <a href='https://www.instagram.com/'><img src={Instalogo} alt='insta logo' className='img'/></a>
                  <a href='https://www.facebook.com/'><img src={Facebooklogo} alt='facebbok logo' className='img'/></a>
                  <a href='https://mail.google.com/mail/u/0/#inbox'><img src={Maillogo} alt='Mail logo' className='img'/></a>
              </div>
                <p className='copyright'> &copy; {new Date().getFullYear()} Zenit Fit. All rights reserved.</p>
              </div>
            </div>
        </div>
          
    );
}
export default footer