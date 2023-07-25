const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Get your API key from https://openweathermap.org/api

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (city === '') {
    alert('Please enter a city name.');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      alert('Error fetching weather data. Please try again later.');
      console.error(error);
    });
}
