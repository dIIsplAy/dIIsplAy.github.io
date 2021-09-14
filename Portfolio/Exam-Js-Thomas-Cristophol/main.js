let token = "7f394d5a3d238f8c628b7d28151e4bc9"
let url = "api.openweathermap.org/data/2.5/weather?&appid=7f394d5a3d238f8c628b7d28151e4bc9&q=lyon"
const formBox = document.querySelector('.formBox')
const title = document.querySelector('title')


function generateForm() {
    let html = ""
    html = `
    
    <div class="form-group col-6">
      <label for="ville" class="form-label mt-4">Entrer le nom d'une ville</label>
      <input type="text" class="form-control" id="inputVille"  placeholder="Lyon">
    </div>
    <button id="btnSend" class="mt-4 col-1 btn btn-primary">Ok</button>
    `

    formBox.innerHTML = html

}


function askMeteo(ville) {
    let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${token}&q=${ville}&lang=fr&units=metric`

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = function() { 
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    xhr.onload = () => {
        let dataType = JSON.parse(xhr.responseText);
        dataWeather = dataType
        console.log(dataWeather)
        displayMeteo(dataWeather, ville)
    }
    }else{
            noCity()
    }
}
    xhr.send()
}

generateForm()

const inputVille = document.querySelector('#inputVille');
const btnSend = document.querySelector('#btnSend')
btnSend.addEventListener('click', () => {

    askMeteo(inputVille.value);
})



const infoMeteoVille = document.querySelector('.reponseMeteo')
function displayMeteo(dataWeather, ville) {
    let weather = dataWeather.weather[0].main
    let cielEtat = dataWeather.weather[0].description
    let temp = dataWeather.main.temp
    let vent = dataWeather.wind.speed
    let humidite = dataWeather.main.humidity
    // let temp = " "

    // dataWeather.forEach(data => {
    //     weather = data.main
    //     weatherDesc = data.description


    // })


    switch (weather) {
        case 'Thunderstorm':
            console.log('thunder');
            break;
        case 'Clouds':
            document.body.style.backgroundImage = "url('image/cloudy.jpg')";
            title.innerHTML = "☁️ Meteo"
            break;
        case 'Drizzle':
            document.body.style.backgroundImage = "url('image/drizlle.jpg')";
            title.innerHTML = "☔️ Meteo"
            break;
        case 'Rain':
            document.body.style.backgroundImage = "url('image/rain.jpg')";
             title.innerHTML = " 🌧 Meteo"
            break;
        case 'Snow':
            document.body.style.backgroundImage = "url('image/snow.jpg')";
            title.innerHTML = "🌨 Meteo"      
            break;
        case 'Clear':
            document.body.style.backgroundImage = "url('image/clear.jpg')"; 
             title.innerHTML = "☀️ Meteo"               
            break;
        case 'Fog':
            document.body.style.backgroundImage = "url('image/fog.jpg')";            
            break;
        case 'Clear':
            document.body.style.backgroundImage = "url('image/clear.jpg')";    
            title.innerHTML = "☀️ Meteo"               
            break;
        default:
            console.log('No speacial details');
    }
    infoMeteoVille.innerHTML =

        `
    <div style="background-image:"class="boxWeather col-10 mt-4">
    <h1>Ville : ${ville} </h1>
    <h2>Ciel : ${cielEtat} (${weather})</h2>
    <h3>température ${temp} C°</h3>
    <h3>Vitesse du vent : ${vent} km</h3>
    <h3>Humidité : ${humidite} </h3>
    </div>
    
    `
}

function foundIP(){
    let xhr = new XMLHttpRequest();
    let urlIpApi="https://api.ipify.org?format=json"
     xhr.open("GET", urlIpApi, true);
    // xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        getCityByIp(data.ip)

    }
    xhr.send()
}


function getCityByIp(ip){
    let tokenCity="d4a4b3142cc3e0ff288c3cb3f2b11616"
    let xhr = new XMLHttpRequest();
    let urlIpApi=`http://api.ipstack.com/${ip}?access_key=${tokenCity}`
     xhr.open("GET", urlIpApi, true);
    // xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);
        askMeteo(data.city)
        // console.log(data)
        // console.log(data.city)

    }
    xhr.send()
}



foundIP()

// const pasDeVille = document.querySelector('.villePasTrouver')
function noCity(){
    alert('La ville saisie n\'éxiste pas !')
        // pasDeVille.innerHtml = `
        // <h1>La ville demandé n'éxiste pas</h1> `
}

