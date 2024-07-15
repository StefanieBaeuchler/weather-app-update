function displayWeather(response) {
    console.log(response.data);
    let city = document.getElementById("current-city");
    city.innerHTML = response.data.city;
    let description = document.getElementById("description");
    description.innerHTML = response.data.condition.description;
    let temperature = document.getElementById("current-temperature-value");
    temperature.innerHTML = Math.round(response.data.temperature.current);
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = `Humidity: ${response.data.temperature.humidity}%`;
    let wind = document.getElementById("wind");
    wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
}


document.getElementById("search-button").addEventListener("click", function (event) {
    event.preventDefault();
    let city = document.getElementById("search-input").value;
    let apiKey = "ee4b35717d055b166do409ddtcf1532a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
});

let now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();

let day = now.getDay();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let dayName = days[day];

let date = document.getElementById("current-date");
date.innerHTML = `${dayName} ${hour}:${minute}`;




/*function displayCity(event) {
    event.preventDefault();
    let city = document.getElementById("search-input").value;
    city = city.trim();

    if (city) {
        document.getElementById("current-city").innerHTML = city;
    }
}



 document.getElementById("search-button").addEventListener("click", displayCity);





 let weather = {
    paris: {
        temp: 19.7,
        humidity: 80
    },
    tokyo: {
        temp: 17.3,
        humidity: 50
    },
    lisbon: {
        temp: 30.2,
        humidity: 20
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100
    },
    oslo: {
        temp: -5,
        humidity: 20
    }
};

 let city = prompt("Enter a city!");
 city = city.toLowerCase();

 if (weather[city] !== undefined) {
   let temperature = weather[city].temp;
   let humidity = weather[city].humidity;
     let message = `It has ${temperature} degrees and a humidity of ${humidity}% in ${city}`;
     alert(message);
 }
 else {
     alert(`Sorry, we don't have the dates for ${city}.`);
 } */
