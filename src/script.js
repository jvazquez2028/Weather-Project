function formatDate(timestamp) {
  let date = new Date (timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
 
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML= Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

  let apiKey = "971f4aa5eacd635135ffd8b92775099d";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(showTemperature);