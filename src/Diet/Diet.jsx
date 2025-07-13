import WebNavbar from "../Homepage/navigation.jsx"
import "./Diet.css"
import { useState } from "react"
import Bmiinfo from './Bmiinfo.jsx'
import Underweight from './Underweight.jsx'
import HealthCard from "./Health.jsx"
import DietCard from './obese.jsx'
import Extremelyobese from './Extremelyobese.jsx'
import Footer from '../Homepage/footer';

const Diet = ()=>{

    const [height,setHeight] = useState(0)
    const [weight,setWeight] = useState(0)   
    const [bmi,setBmi] = useState()
    const [health,setHealth] = useState("")

    const calculateBmi = ()=>{
      const H = height/100;
      const res = weight / (H * H)
      setBmi(res.toFixed(2))
      if(res<18.5){
        setHealth("underweight");
      }else if(res>18.5 && res < 24.9){
        setHealth("healthy");
      }else if(res>25 && res < 34.9){
        setHealth("obese");
      }else{
        setHealth("extremely obese")
      }
    }

    return (
        <>
        <WebNavbar/>
        <div className="diet-page">

            <div className="bmi-main-container">
                <div className='bmi-calculator'>
                    <h2><u>BMI Calculator</u></h2>
                    <div>
                        <label>Height:</label>
                        <input type="number" name="height" placeholder='Height in Centimeters' onChange={(e)=>setHeight(e.target.value)}/>
                    </div>
                    <div>
                        <label>Weight:</label>
                        <input type="number" name="height" placeholder='Weight in Kilograms' onChange={(e)=>setWeight(e.target.value)}/>
                    </div>

                    <button type="submit" className="Submit-btn-bmi" onClick={calculateBmi}>Calculate Bmi</button>
                    <p className="bmi-p">{bmi}</p>
                </div>

                <div className="info">
                    <Bmiinfo/>
                </div>
            </div>
            <div className="diet-info">
                {
                    health==="underweight"?(
                       <>
                        <Underweight/>
                       </>
                    ):health==="healthy"?(
                        <>
                        <HealthCard/>
                        </>
                    ):health==="obese"?(
                        <>
                        <DietCard/>
                        </>
                    ):health==="extremely obese"?(
                        <>
                        <Extremelyobese/>
                        </>
                    ):(
                        <>
                        <p id="null-p">Please enter your height and weight.</p>
                        </>
                    )
                }
            </div>
             <Footer/>
        </div>
        </>
    )
}

export default Diet;