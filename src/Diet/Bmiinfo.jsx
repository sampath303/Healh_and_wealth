import './Bmiinfo.css'
function bmicard(){
    return(
        <>
            
            <h2 className='Bmiinfo'><u>Body Mass Index(BMI)</u></h2>
            <p className='Bmipara'>BMI stands for Body Mass Index, which is a measurement used to assess an individual's body weight in relation to their height. It's calculated by dividing a person's weight in kilograms by the square of their height in meters (BMI = weight (kg) / height^2 (m^2)).
            Here's a breakdown of BMI categories and what they generally indicate:
          <ol className='ol1'>
            <li>Underweight:- BMI below 18.5.Indicates that a person may be below the normal weight range for their height.</li>
            <br></br>
            <li>Healthy Weight:- BMI between 18.5 and 24.9.Generally considered an optimal range for most adults.</li>
            <br></br>
            <li>Obese:- BMI between 25 and 34.9.Indicates excess body weight relative to height.</li>
            <br></br>
            <li>Extremely Obese:- BMI After 35 is called as Extremely obese.</li>
            <br></br>
          </ol>

            
            </p>
        </>
    );

}
export default bmicard