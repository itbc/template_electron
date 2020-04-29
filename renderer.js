// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { shell } = require('electron')

document.querySelector('#open-github').onclick = () => {
  shell.openExternal('https://github.com')
}

document.querySelector('#open-folder').onclick = () => {
  shell.showItemInFolder(__dirname)
}

document.querySelector('#beep').onclick = () => {
  shell.beep()
}

const { webFrame } = require('electron')

setInterval(() => {
  // A random number
  const level = Math.floor(Math.random() * 10)

  // Let's set a random zoom level
  webFrame.setZoomLevel(level)
}, 750)

