document.querySelector(".fa-searchengin").addEventListener("click", () => {
  let input = document.getElementById("input");
  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?&appid=0ae49f1a5bcf107f8c42a6f4d510f21e&units=metric&q=${input.value}`;
  if (input.value.trim() === "") {
    Swal.fire("Enter city name");
  } else {
    let weatherData = new Promise((resolve, reject) => {
      fetch(weatherAPI)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
    weatherData.then((data) => {
      document.getElementById("temp").innerHTML = `<h5>Temperature</h5><i class="fa-solid fa-temperature-three-quarters"></i> <h2> ${Math.round(data.main.temp)} °C </h2>`;
      document.getElementById("Weather_icon").innerHTML = ` <img width="200px" src="assests/images/weatherIcon.png" alt="weatherIcon"><div>${data.weather[0].main}</div>`
      document.getElementById("info_temp").innerHTML = `<h1>${Math.round(data.main.temp)} °C</h1>`;
      document.getElementById("info_loc").innerHTML = `<h4>${input.value}</h4>`;
    //   console.log(data.weather.main);
      console.log(data.weather[0].main);
    });
  }
});
