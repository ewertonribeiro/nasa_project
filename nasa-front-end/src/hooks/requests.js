const URL = "http://localhost:5000";

async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`)
  return await response.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {

  const response = await fetch(`${URL}/launches`);
  const fetchedResponse = await response.json();

  return fetchedResponse.sort((a, b) => a.flightNumber - b.flightNumber);

}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
