const { ipcMain } = require('electron');
const fetch = require('node-fetch');

//setup connection
const url = 'http://192.168.1.217';
const action = '/win'
const update = '/update'

//functions
function control(loxone_value){ //with Loxone commands: BBBGGGRRR
    let requestOptions = {
        method: 'GET'
    };
    let querystring = url + action + '&LX=' + loxone_value;
    fetch(querystring, requestOptions)
    .then(res => console.log(res))
    .catch(error => console.log('error', error));
}
function effect(index){
    let requestOptions = {
        method: 'GET'
    };
    let querystring = url + action + '&FX=' + index;
    fetch(querystring, requestOptions)
    .then(res => console.log(res))
    .catch(error => console.log('error', error));
}
function updateFirmware(){

}
function togglePower(){
    let requestOptions = {
        method: 'GET'
    };
    let querystring = url + action + '&T=' + '2';
    fetch(querystring, requestOptions)
    .then(res => console.log(res))
    .catch(error => console.log('error', error));
}

//ipc entry
ipcMain.on('onoff', (e) => {
    togglePower();
});
ipcMain.on('update', (e) => {
    console.log('not implemented');
});
ipcMain.on('red', (e) => {
    control('000000100');
});
ipcMain.on('yellow', (e) => {
    control('000100100');
});
ipcMain.on('green', (e) => {
    control('000100000');
});
ipcMain.on('static', (e) => {
    effect(0);
});
ipcMain.on('flicker', (e) => {
    effect(68);
});
ipcMain.on('waves', (e) => {
    effect(67);
});