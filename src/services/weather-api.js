export function getCurWeatherByLatLng(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=8e0c596f2a6fd2d958d7bb12765da115`)
        .then(res => res.json());
}