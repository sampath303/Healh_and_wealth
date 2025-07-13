import CardImage from './cardpicture.jpg'
import './card.css'
function card(){
    return(
        <div className='card'>
            
            <img src={CardImage} alt='nutrition image'></img>
            <h2><u>Nutrition</u></h2>
            <p>Food and nutrition are the way that we get fuel, providing energy for our bodies. We need to replace nutrients in our bodies with a new supply every day. Water is an important component of nutrition. Fats, proteins, and carbohydrates are all required.</p>
        </div>
    );

}
export default card