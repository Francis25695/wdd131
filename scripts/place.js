// =========================
// Footer: current year + last modified date
// =========================
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// =========================
// Weather: static sample values (metric units, matches displayed content)
// =========================
const temperature = 9;   // degrees Celsius
const windSpeed = 14;    // km/h

// Wind chill formula (metric, Environment Canada formula), one line as required
function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Only call calculateWindChill when conditions make it valid
const windChillElement = document.getElementById('wind-chill');

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}\u00B0C`;
} else {
  windChillElement.textContent = 'N/A';
}