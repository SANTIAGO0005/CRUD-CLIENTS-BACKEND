const { app, BrowserWindow } = require("electron");
const url = require("url")
// const isDev = require("electron-is-dev");
const path = require("path")
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1340,
    height: 730,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
  });
const startUrl = url.format({
    pathname: path.join(__dirname, '../build/index.html'),
    protocol: 'file',
  });
  mainWindow.loadURL(startUrl)
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
