import Navbar from './navigation.jsx'
import Image from './Third-image.jpg'
import Card from './card.jsx'
import Cardsecond from './card2.jsx'
import CardThird from './card3.jsx'
import CardFourth from './card4.jsx'
import Footer from './footer.jsx'
import './Home.css'


const Home =()=>{
    return (

            <div>   
               <Navbar/>
               <div className="container">
              <img src={Image} alt="Background Image" className="imageback" />
              <div className="text-overlay">
                <h2>We are Your HealthCare Home Base Join us Now!!</h2>
               
              </div>
              <h2 className="Carpara1">
                  Basic components for leading a healthy life
                </h2>
              </div>
              <Card />
              <Cardsecond/>
              <CardThird/>
              <CardFourth/>
          <Footer/>
          </div>

    );
}

export default Home;