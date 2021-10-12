// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather

  const city = document.getElementById("city-input").value;
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
    
      console.log(response);
      const data = response.data;

      const name = data.city.name;
      const temp = data.list[0].temp.day;
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      document.getElementById('name').innerHTML = name;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;


      const temp2 = data.list[1].temp.day;
      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp2}°C`;
      document.getElementById('tomorrow-forecast-main').innerHTML = main2;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description2;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon2;


      const temp3 = data.list[2].temp.day;
      const main3 = data.list[2].weather[0].main;
      const description3 = data.list[2].weather[0].description;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      document.getElementById('aftertomorrow-forecast-temp').innerHTML = `${temp3}°C`;
      document.getElementById('aftertomorrow-forecast-main').innerHTML = main3;
      document.getElementById('aftertomorrow-forecast-more-info').innerHTML = description3;
      document.getElementById('aftertomorrow-icon-weather-container').innerHTML = icon3;


      const temp4 = data.list[3].temp.day;
      const main4 = data.list[3].weather[0].main;
      const description4 = data.list[3].weather[0].description;
      const icon4 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      document.getElementById('afteraftertomorrow-forecast-temp').innerHTML = `${temp4}°C`;
      document.getElementById('afteraftertomorrow-forecast-main').innerHTML = main4;
      document.getElementById('afteraftertomorrow-forecast-more-info').innerHTML = description4;
      document.getElementById('afteraftertomorrow-icon-weather-container').innerHTML = icon4;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
