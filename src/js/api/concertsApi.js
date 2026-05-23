const API_KEY = "UOJv5w0xzX0Zk3IQ7DLXZqMUHB8RGG71";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2";

export async function fetchConcerts(page = 0) {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?apikey=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    console.log(data._embedded.events);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchByID(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?apikey=${API_KEY}&id=${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
