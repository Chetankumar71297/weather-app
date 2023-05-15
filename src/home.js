/*
// create a form element to hold the search bar
const searchForm = document.createElement('form');
searchForm.classList.add('search-form');

// create an input element for the search bar
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Enter location';
searchInput.name = 'location';
searchInput.value = 'Supaul';

// create a button to submit the search
const searchButton = document.createElement('button');
searchButton.type = 'submit';
searchButton.textContent = 'Search';

// add the input and button to the form
searchForm.appendChild(searchInput);
searchForm.appendChild(searchButton);

// add the form to the HTML document
document.body.appendChild(searchForm);

// add an event listener to the form to handle the search
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
*/
function createHomePage(data) {
  // create a div element to hold the weather information
  const weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weather");
  // create HTML content for the weather information
  const weatherHtml = `
    <h2>${data["placeName"]}, ${data["countryName"]}</h2>
    <p>${data["time"]}</p>
    <p>Temperature: ${data["tempInCelsius"]} &#8451; (${data["tempInFahrenheit"]} &#8457;)</p>
    <p>Condition: ${data["condition"]}</p>
    <p>Humidity: ${data["humidityInPercentage"]}%</p>
    <p>Pressure: ${data["pressureInMb"]} mb</p>
    <p>Wind speed: ${data["windSpeedInKph"]} Km/h</p>
`;

  // set the HTML content of the weather div
  weatherDiv.innerHTML = weatherHtml;
  const body = document.querySelector("body");
  // append the weather div to the HTML document
  body.appendChild(weatherDiv);
}

export { createHomePage };
