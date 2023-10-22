// Variables globales
var $ = selector => document.querySelector(selector)

var Module = {
  // https://emscripten.org/docs/api_reference/module.html#Module.onRuntimeInitialized
  onRuntimeInitialized() {
    $('#status').innerHTML = 'OpenCV.js is ready.'
  }
};