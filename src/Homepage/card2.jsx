import dumbellImage from './dumbell.png'
import './card2.css'
function cardsecond(){
    return(
        <div className='card2'>
            
            <img src={dumbellImage} alt='dumbell image'></img>
            <h2 className='car2h2'><u>WorkOut</u></h2>
            <p className='card2p2'>Exercise is one of the most effective and, when done properly, safest ways to enhance health and wellness. For example, exercise can strengthen the cardiovascular system, lower blood pressure, improve the levels of fats etc..</p>
        </div>
    );

}
export default cardsecond