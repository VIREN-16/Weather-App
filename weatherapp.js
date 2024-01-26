let weather = {
    apiKey: "d964accf90e14b09967103945242201",
    fetchWeather: function (city) {
        fetch("https://api.weatherapi.com/v1/current.json?key=d964accf90e14b09967103945242201&q=" + city +" &aqi=yes"
        + this.apiKey)   
        .then((response) => response.json())  
        .then((data) => this.displayWeather(data));
    },
    
    displayWeather: function (data) {
    const { name } = data.location;
    const { condition  } = data.current;
    const { text } = condition;
    const { icon} = condition;
    const { temp_c,humidity } = data.current;
    const { wind_kph } = data.current;
    
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =" https://cdn.weatherapi.com/weather/64x64/night/116.png";
    document.querySelector(".text").innerText = text;
    document.querySelector(".temp_c").innerText = temp_c + "°C";
    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText ="Wind speed: " + wind_kph + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button")
        .addEventListener("click", 
        function () {    
            weather.search();
        }
);

document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
weather.fetchWeather("Anand");

