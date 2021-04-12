// Variables
const apiKey = "AIzaSyAuGdexQPj0tbya-NMCc2zXZIob43OPi2Y";
const ipAddress = document.querySelector(".ip_address");
//const location = document.querySelector(".location");
const timezone = document.querySelector(".timezone");
const isp = document.querySelector(".isp");

// Functions
async function fetchIpAddress() {
  try {
    const dataFetch = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_lMzIrsfzY0q4zhvqPnmcqAJCF2gzy&ipAddress=92.40.168.37`
    );
    const response = await dataFetch.json();
    console.log(response);
    setResults(response.location);
    showPosition(response.location);
  } catch (error) {
    console.log(error.message);
  }
}

function setResults(obj) {
  //ipAddress.innerText = obj
  timezone.innerText = obj.timezone;
}

function showPosition(position) {
  var latlon = position.lat + "," + position.long;

  var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=
    "+${latlon}+"&zoom=14&size=400x300&sensor=false&key=${apiKey}`;

  document.getElementById("google_image").innerHTML =
    "<img src='" + img_url + "'>";
}

fetchIpAddress();

// EventListeners
