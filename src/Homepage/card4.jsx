import cardfour from './stress.png'
import './card4.css'
function cardFour(){
    return(
        <div className='card4'>
            
            <img src={cardfour} alt='stress management image'></img>
            <h2 className='card4h4'><u>Stress Management</u></h2>
            <p className='card4p4'>Stress management offers a range of ways to help you better deal with stress and difficulty, also called adversity, in your life. Managing stress can help you lead a more balanced, healthier life.</p>
        </div>
    );

}
export default cardFour