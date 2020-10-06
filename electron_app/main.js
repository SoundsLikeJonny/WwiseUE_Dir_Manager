
const {app, BrowserWindow, Menu} = require('electron')


function createWindow () {
    window = new BrowserWindow({ 
      width: 300, 
      height: 600, 
      titleBarStyle: 
      'hidden', 
      alwaysOnTop: true, 
      darkTheme:true, 
      movable:true
      
    })

    window.loadFile('index.html')
    //window.setFullScreen(true);
    //window.File.open()



    var python = require('child_process').spawn('python', ['./py/hello.py']);

	  python.stdout.on('data',function(data){
      console.log("data: ",data.toString('utf8'));
    });
  }

  try {
    require('electron-reloader')(module)
  } catch (_) {}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });