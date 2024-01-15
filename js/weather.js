const API_KEY = "04b7a37c5b905eb3205f12a9f83b561a";

function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}
function onGeoError(){
    alert("위치를 찾지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);