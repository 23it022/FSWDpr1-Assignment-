let cityWeatherData = [];

// Function to add city weather
function addCityWeather() {
    const cityName = document.getElementById("cityName").value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    const condition = document.getElementById("condition").value;

    if (cityName && !isNaN(temperature) && condition) {
        cityWeatherData.push({ cityName, temperature, condition });
        alert(`Added weather data for ${cityName}`);
        clearInputs();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

// Function to clear input fields
function clearInputs() {
    document.getElementById("cityName").value = '';
    document.getElementById("temperature").value = '';
    document.getElementById("condition").value = '';
}

// Function to log weather summary
function logWeatherSummary() {
    const summaryDiv = document.getElementById("weatherSummary");
    summaryDiv.innerHTML = ''; // Clear previous summary

    if (cityWeatherData.length === 0) {
        summaryDiv.innerHTML = 'No weather data available.';
        return;
    }

    cityWeatherData.forEach(city => {
        summaryDiv.innerHTML += `City: ${city.cityName}, Temp: ${city.temperature}°C, Condition: ${city.condition}<br>`;
    });

    // Find and display the hottest city
    const hottestCity = findHottestCity();
    if (hottestCity) {
        summaryDiv.innerHTML += `<strong>Hottest City: ${hottestCity.cityName}, Temperature: ${hottestCity.temperature}°C, Condition: ${hottestCity.condition}</strong>`;
    }
}

// Function to find the hottest city
function findHottestCity() {
    return cityWeatherData.reduce((hottest, city) => {
        return (hottest.temperature > city.temperature) ? hottest : city;
    }, cityWeatherData[0]);
}