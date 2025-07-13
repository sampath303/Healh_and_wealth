import './About.css'; // Assuming the CSS file is named About.css
import backgroundthird from './Fitness2.jpg'
import { Link } from 'react-router-dom';
import WebNavbar from '../Homepage/navigation';
import Footer from '../Homepage/footer';
function AboutUs() {
    return (
    
        <>
        <WebNavbar/>
        <div className="container-2">
            <img src={backgroundthird} alt="Background image" className="imageback-back" />
            <div className="text-overlay-second">
                <h2>About us</h2>
                <h3>ZenithFit: Elevating Your Health and Fitness</h3>
                <p>ZenithFit is your premier health and fitness destination, dedicated to empowering individuals to reach their peak health and wellness. Our vision is to inspire a world where everyone prioritizes well-being, and our purpose is clear: to provide personalized fitness programs, nutritional guidance, and a supportive community.
                Joining ZenithFit means gaining access to tailored fitness programs, expert nutritional advice, and a variety of fitness classes including yoga, strength training, and cardio workouts. Our state-of-the-art facilities and supportive community foster motivation and connection.
                Experience results-driven fitness with a focus on measurable outcomes, whether your goal is weight loss, muscle gain, or overall wellness. Join ZenithFit and discover the transformative benefits of living a healthier, happier life. Unlock your potential and achieve your zenith with us.</p>
               <h3>Contact us:-</h3>
              <p><pre>+91-855-510-0705                                         Lakvethsajedshaik@gmail.com</pre></p>
            </div>
        </div>
        <Footer/>
        </>
        
    );
}

export default AboutUs;
