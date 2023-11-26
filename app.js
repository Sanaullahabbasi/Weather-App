document.querySelector(".fa-searchengin").addEventListener("click", ()=>{
    let input = document.getElementById("input");
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?&appid=0ae49f1a5bcf107f8c42a6f4d510f21e&units=metric&q=${input.value}`;
    if(input.value.trim()===""){
        Swal.fire("Enter city name");
    }else{
        let weatherData = new Promise((resolve, reject) =>{
            fetch(weatherAPI)
            .then((res)=> res.json())
            .then((data)=> resolve(data))
            .catch((err) => reject(err));
        });
        weatherData
        .then((data) => {
document.getElementById("temp").innerHTML = `<p>Temperature</p> ${data.main.temp} °C`
            console.log(data.main.temp)
        })
    }
})