const electron = require('electron');
const path = require('path');
const axios = require('axios')
const BrowserWindow = electron.remote.BrowserWindow;

const notifyBtn = document.getElementById("notifyBtn");
const price = document.getElementById("price");
const targetPrice = document.getElementById("targetPrice");

function getCryptoCurrentcy() {
  axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD")
    .then(res => {
      const crypto = res.data.BTC.USD;
      price.innerHTML = "$" + crypto.toLocaleString('en');
    });
}

getCryptoCurrentcy();

setInterval(getCryptoCurrentcy, 30000);

notifyBtn.addEventListener('click', function(event) {
  const modalPath = path.join('file://', __dirname, 'add.html');
  let win = new BrowserWindow({
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    width: 400,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.on('close', function() { win = null });
  win.loadURL(modalPath);
  win.show();
});
