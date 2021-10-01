const searchBar = document.querySelector(".search-bar");
const searchInput = document.querySelector(".search-bar input");
const title = document.querySelector(".title");
const mainContent = document.querySelector(".main");
const footerP = document.querySelector(".footer > p");
const temperatureContainer = document.querySelector(".temperature-container");

const URL_BASE =
  "http://api.weatherapi.com/v1/forecast.json?key=983f16dea7bf4eaf8a012107212509&days=1";

searchBar.addEventListener("submit", async (e) => {
  e.preventDefault();
  let city = searchInput.value;
  city = city.replaceAll(" ", "+");

  const response = await fetch(`${URL_BASE}&q=${city}`);
  const data = await response.json();

  searchInput.value = "";

  renderInformation(data);
});

const renderInformation = (data) => {
  const { location, current, forecast } = data;
  const { forecastday } = forecast;
  const { name, country } = location;

  title.innerHTML = `${name}, <span>${country}</span>`;
  renderMain(current);
  renderFooter(forecastday[0].hour);
};

const renderMain = (current) => {
  const { condition, temp_c, wind_kph, pressure_mb, feelslike_c, uv } = current;
  const { icon, text } = condition;
  const date = moment().format("dddd, D MMM");
  mainContent.innerHTML = `
    <div class="weather-info">
        <img
          src="http:${icon}"
          alt=${text}
        />
        <h3>${text}</h3>
        <time>
          <p>${date}</p>
        </time>
        <div class="temperature">
          <p>${temp_c}ºC</p>
        </div>
      </div>
      <div class="block-info wind">
        <i class="fas fa-wind"></i>
        <p><span>Wind</span> ${wind_kph}km/h</p>
      </div>
      <div class="block-info feels">
        <i class="fas fa-thermometer-quarter"></i>
        <p><span>Feels like</span> ${feelslike_c}ºC</p>
      </div>
      <div class="block-info uv">
        <i class="fas fa-sun"></i>
        <p><span>Index uv</span> ${uv}</p>
      </div>
      <div class="block-info pressure">
        <i class="fas fa-chart-line"></i>
        <p><span>Pressure</span> ${pressure_mb}mb</p>
      </div>
    `;
};

const renderFooter = (forecastday) => {
  footerP.style.display = "block";
  temperatureContainer.innerHTML = "";

  forecastday.forEach((hour) => {
    const { temp_c, condition, time } = hour;

    const today = moment().set({
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    const actual = moment(time).set({
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    const diff = Math.abs(actual.diff(today, "hours"));
    const actualHour = actual.format("HH:mm");

    const { icon, text } = condition;

    temperatureContainer.innerHTML += `
    <div class="temperature-day ${diff%24 == 0 && "active"}">
    <time><p>${actualHour}</p></time>
    <img
      src="http:${icon}"
      alt=${text}
    />
    <p>${diff%24 == 0 ? 'Now' : `${temp_c}ºC`}</p>
  </div>
    `;
  });

  const temperatureSelected = document.querySelector(".temperature-day.active");
  temperatureSelected.scrollIntoView();
};
