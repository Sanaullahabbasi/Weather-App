document.querySelector(".fa-searchengin").addEventListener("click", () => {
  let input = document.getElementById("input");
  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?&appid=0ae49f1a5bcf107f8c42a6f4d510f21e&units=metric&q=${input.value}`;
  if (input.value.trim() === "") {
    Swal.fire({
        title: `Please enter a city name`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
  } else {
    let weatherData = new Promise((resolve, reject) => {
      fetch(weatherAPI)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
    weatherData
    .then((data) => {
      document.getElementById("temp").innerHTML = `<h5>Temperature</h5><img src="assests/images/hot.png" class="set" alt=""> <h2> ${Math.round(data.main.temp)} °C </h2>`;
      document.getElementById("humidity").innerHTML = `<h5>Humidity</h5><img src="assests/images/humidity.png" class="set" alt=""><h2> ${Math.round(data.main.temp)} °C </h2>`;
      document.getElementById("wind").innerHTML = `<h5>Wind</h5><img src="assests/images/wind.png" class="set" alt=""><h2> ${Math.round(data.main.temp)} °C </h2>`;
      document.getElementById("Feel_like").innerHTML = `<h5>Feel Like</h5><img src="assests/images/feel_like.png" class="set" alt=""><h2> ${Math.round(data.main.temp)} °C </h2>`;
      document.getElementById("visibility").innerHTML = `<h5>Visibility</h5><img src="assests/images/visibility.png" class="set" alt=""><h2> ${Math.round(data.main.temp)} °C </h2>`;
      document.getElementById("Weather_icon").innerHTML = ` <img width="200px" src="assests/images/weatherIcon.png" alt="weatherIcon"><div>${data.weather[0].main}</div>`
      document.getElementById("info_temp").innerHTML = `<h1>${Math.round(data.main.temp)} °C</h1>`;
      document.getElementById("info_loc").innerHTML = `<h4>${input.value}</h4>`;
      console.log(data.weather);
      console.log(data.weather[0].main);
    })
    .catch((err)=>{
    if(err){
        Swal.fire({
            title: `Please enter a valid city name`,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
    }
    })

   



}
});


document.getElementById("cross").addEventListener("click", ()=>{
    document.getElementById("input").value = "";
})