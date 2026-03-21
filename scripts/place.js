function displayCurrentYear() {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function displayLastModified() {
    const modifiedPara = document.getElementById("lastModified");
    if (modifiedPara) {
        modifiedPara.textContent = "Last Modified: " + document.lastModified
    }
}

displayCurrentYear();
displayLastModified();


const temperature = 10;
const windspeed = 20;

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + temp * Math.pow(wind, 0.16)
}

window.addEventListener('load', () => {
    const windchill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windchill.toFixed(2);
})