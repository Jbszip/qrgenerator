const qrContainer = document.getElementById('qrcontainer')
const qrWifiContainer = document.getElementById('qrwificontainer')
const button = document.getElementById('send')
const wifibutton = document.getElementById('generate')
const url = document.getElementById('url')
const red = document.getElementById('red')
const seguridad = document.getElementById('seguridad')
const password = document.getElementById('password')
let urlValue, redValue, seguridadValue, passwordValue, wifiStr

function generateQr(qrContainer, url) {
    new QRCode(qrContainer, url)
}

function downloadQR() {
    
}

button.addEventListener('click', (e)=>{
    e.preventDefault()
    urlValue = url.value
    if(urlValue === ''){
        url.setAttribute('class', 'error')
    }else{
        generateQr(qrContainer, urlValue)
        url.removeAttribute('class')
    }
})

wifibutton.addEventListener('click', (e)=>{
    e.preventDefault()
    redValue = red.value
    seguridadValue = seguridad.value
    passwordValue = password.value
    console.log(redValue, seguridadValue, passwordValue)
    if(urlValue === ''){
        url.setAttribute('class', 'error')
    }else{
        let wifiStr = `WIFI:S:${redValue};T:${seguridadValue};P:${passwordValue};E:TTLS;` 
        generateQr(qrWifiContainer, wifiStr)
        url.removeAttribute('class')
    }
})