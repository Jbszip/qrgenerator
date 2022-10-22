const qrContainer = document.getElementById('qrcontainer')
const button = document.getElementById('send')
const url = document.getElementById('url')
let urlValue

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

