// Variables
const apiKey = "AIzaSyBCeLp0Wz3T0BCUOOjM64MfAfB-1jatItU";
const ipAddress = document.querySelector(".ip_address");
const locate = document.querySelector(".location");
const timezone = document.querySelector(".timezone");
const isp = document.querySelector(".isp");
const inputSearch = document.querySelector(".input-search");
const searchButton = document.querySelector(".btn");
const frame = document.querySelector(".frame-map");
const spinner = document.querySelector(".spin");
const googleMap = document.getElementById("map");
let serachValue;

// Functions
async function fetchIpAddress(searchItem) {
  try {
    const dataFetch = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_lMzIrsfzY0q4zhvqPnmcqAJCF2gzy&ipAddress=${searchValue}`
    );
    const response = await dataFetch.json();
    // Change location displayed on map based on ip address searched for.
    frame.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBrt4t_3LwPHGLSBOY71_oHIZpVeUS9kHQ
            &q=bank,${response.location.city}`;
    // Set the results table with data returned from api.
    setResults(response);
  } catch (error) {
    console.log(error.message);
  }
}

function setResults(obj) {
  timezone.innerText = obj.location.timezone;
  ipAddress.innerText = obj.ip;
  locate.innerText = obj.location.city + " " + obj.location.postalCode;
  isp.innerText = obj.isp;
}

// Get the search input value
function updateInput(e) {
  searchValue = e.target.value;
}

// Clear search input after search
function clear() {
  inputSearch.value = "";
}

// EventListeners
inputSearch.addEventListener("input", updateInput);
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  clear();
  fetchIpAddress(searchValue);
});
