const { ipcRenderer } = require('electron');

setListener('onoff');
setListener('update');
setListener('red');
setListener('yellow');
setListener('green');
setListener('waves');
setListener('flicker');
setListener('static');

function setListener(btn){
    document.getElementById(btn).addEventListener('click', (e) => {
        ipcRenderer.send(btn);
    });
}
