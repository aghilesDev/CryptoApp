const electron = require('electron');
const path = require('path');
const remote = electron.remote;
const ipc = require('electron').ipcRenderer;

console.log("hello");

const closeBtn = document.getElementById("closeBtn");
const updateBtn = document.getElementById("updateBtn");
const notifyVal = document.getElementById("notifyVal");

closeBtn.addEventListener('click', function(event) {
  var window = remote.getCurrentWindow();
  window.close();
});

updateBtn.addEventListener('click', function(event) {
  ipc.send('updateTargetValue', notifyVal.value);
  var window = remote.getCurrentWindow();
  window.close();
});
