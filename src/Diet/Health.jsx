import './Health.css'
function HealthCard(){
    return(
        <div className='Healthy-container'>
            
            <h2 className='Healthy-h2'><u>You are Healthy</u></h2>
            <p className='Healthy-p'>If you have a BMI that falls within the healthy weight range (between 18.5 and 24.9), it's important to maintain overall health through a balanced lifestyle that includes a nutritious diet and regular exercise. </p>
            <p className='Healthy-p'>To ensure a healthy lifestyle, WHO recommends eating lots of fruits and vegetables, reducing fat, sugar and salt intake and exercising. Based on height and weight, people can check their body mass index (BMI) to see if they are overweight. WHO provides a series of publications to promote and support healthy lifestyles.</p>
            <p id='p1'>Steps to healthy Eating:-</p>
            <ol className='ol2'>
                <li>Eat a nutritious diet based on a variety of foods originating mainly from plants, rather than animals.</li>
                <li>Eat bread, whole grains, pasta, rice or potatoes several times per day.</li>
                <li>Eat a variety of vegetables and fruits, preferably fresh and local, several times per day (at least 400g per day).</li>
                <li>Maintain body weight between the recommended limits (a BMI of 18.5–25) by taking moderate to vigorous levels of physical activity, preferably daily.</li>
                <li>Control fat intake (not more than 30% of daily energy) and replace most saturated fats with unsaturated fats.</li>
                <li>Replace fatty meat and meat products with beans, legumes, lentils, fish, poultry or lean meat.</li>
            </ol>
           <p id='p2'>Best exercises to remain healthy:-</p>
           <dl className='healthy-dl'>
            <dt>1. Cycling</dt>
            <br></br>
            <dd>Cycling is a well-known workout that boosts fitness and leading a helathy life. Cycling is great for losing weight, but studies have also shown that regular cyclists are more physically fit overall, have higher insulin sensitivity, and have a lower risk of heart disease, cancer, and death than non-cyclists.</dd>
            <br></br>
            <dt>2.Brisk walking</dt>
            <br></br>
            <dd>Brisk walking is ideal for beginners who are just starting to add working out to their routine. This low-intensity exercise helps manage our weight and also improves overall blood circulation in the body.</dd>
           <br></br>
           <dt>3.Running</dt>
           <br></br>
           <dd>Running as well as jogging are excellent exercises for weight loss. Furthermore, research has shown that jogging and running can aid in the burning of dangerous fat accumulation, also referred to as belly fat.</dd>
           <br></br>
           <dt>4.Yoga</dt>
           <br></br>
           <dd>Yoga is a well-liked form of exercise and stress relief. Although it's not typically viewed as a weight reduction workout, it does burn a significant amount of calories and has many other advantages that can help with weight loss and leading a helathy life</dd>

           </dl>
            
            
        </div>
    );

}
export default HealthCard