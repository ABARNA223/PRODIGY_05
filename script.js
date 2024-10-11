document.querySelector('.weatherform').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const city = document.querySelector('.cityinput').value;
    const apiKey = 'f04d0151bd439571afc122386d1456a9';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherCard = document.querySelector('.card');
                weatherCard.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                weatherCard.style.display = 'block';
            } else {
                alert('City not found, please try again.');
            }
        })
        .catch(error => {
            alert('Error fetching weather data.');
            console.error('Error:', error);
        });
});


