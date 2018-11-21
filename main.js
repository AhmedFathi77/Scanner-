const {BrowserWindow, app} = require('electron');

let win;

let boot = () => {
    win = new BrowserWindow({
        width: 1050,
        height: 600,
        frame: false
    });

    win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed' , ()=> {
    win = null;
  });
//  win.webContents.openDevTools();
};

app.on('ready', boot)

