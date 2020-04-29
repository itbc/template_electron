// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const { BrowserView } = require('electron')
const windows = []

// const path = require('path')

// function createWindow () {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   // and load the index.html of the app.
//   mainWindow.loadFile('index.html')

//   // Open the DevTools.
//   // mainWindow.webContents.openDevTools()
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(createWindow)


// Menu

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

//   mainWindow.loadFile('index.html')
// })


// app.on('ready', () => {
//   // const mainWindow = new BrowserWindow({ width: 800, height: 600 })
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })

  

  
  
  const template = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'Hello From Electron!',
      submenu: [
        {
          label: 'I have a custom handler',
          click () {
            console.log('👋')
          }
        },
        { type: 'separator' },
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)





  mainWindow.loadFile('index.html')
})



// // Browser-View

// app.on('ready', () => {
//   let win = new BrowserWindow({ width: 800, height: 600 })
//   win.on('closed', () => {
//     win = null
//   })

//   const view = new BrowserView({
//     webPreferences: {
//       nodeIntegration: false
//     }
//   })

//   win.setBrowserView(view)
//   view.setBounds({ x: 0, y: 0, width: 800, height: 600 })
//   view.webContents.loadURL('https://electronjs.org')
// })






// Open multi-windows

// app.on('ready', () => {
//   // BrowserWindows can be created in plenty of shapes, sizes, and forms.
//   // Check out the editor's auto-completion for all the configuration
//   // options available in the current version.
//   //
//   // Let's make a few windows!

//   // A window that's only half visible
//   windows.push(
//     new BrowserWindow({
//       opacity: 0.5,
//       x: 200,
//       y: 200
//     })
//   )

//   // A transparent window
//   windows.push(
//     new BrowserWindow({
//       transparent: true,
//       x: 300,
//       y: 300
//     })
//   )

//   // A window that's fixed and always on top
//   windows.push(
//     new BrowserWindow({
//       movable: false,
//       resizable: false,
//       alwaysOnTop: true,
//       maximizable: false,
//       minimizable: false,
//       x: 600,
//       y: 600
//     })
//   )

//   windows.forEach((window) => {
//     // Load our index.html
//     window.loadFile('index.html')
//   })
// })




