const electron = require('electron');
const path = require('path');
const remote = electron.remote;

console.log("hello");

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener('click', function(event) {

  var window = remote.getCurrentWindow();
  window.close();
});
