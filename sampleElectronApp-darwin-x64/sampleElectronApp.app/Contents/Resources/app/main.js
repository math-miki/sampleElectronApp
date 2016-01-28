'use strict';


var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed',function(){ app.quit;});

app.on('ready',function(){

  mainWindow = new BrowserWindow({width:700, height: 800});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed',function(){ mainWindow = null;});
});
