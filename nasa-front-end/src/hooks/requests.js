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

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${URL}/launches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch)
    })
  } catch (error) {
    return {
      ok: false,
    }
  }


}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${URL}/launches/${id}`, {
      method: "Delete"
    })
  } catch (error) {
    console.log(error);
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
