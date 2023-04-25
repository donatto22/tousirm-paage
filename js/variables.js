const root = document.documentElement;
let heightReady = parseFloat(getComputedStyle(document.getElementById('ready')).getPropertyValue('height').substr(0, 5))

root.style.setProperty('--calculate-margin', `${heightReady - (heightReady / 2)}px`)