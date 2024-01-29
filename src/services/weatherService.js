const API_KEY = "0b1e55a276f30125c23b13df947c06ae";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
        .then((res) =>res.json())
        .then((data) => data);
}

export default getWeatherData;