"use strict"
const opuntia 		= require("opuntia");
const config 		= require("./config");

// Path to the static content
let path = config.path
if(!path) path = __dirname+'/html/'
path = path.trim()
if(!path.endsWith('/')) path = path+'/'

//-------------------------------------------------------------------------------------------------
// CREATE & CONFIG API SERVER
var router = {
	// Root WEB-server for Dashboard
	$title: "WEB server",
	$descr: "Just a simple web server",
	_files:	path,
	_default:'index.html',
	//_404:	 '404.html',
	h_get: 	opuntia.files.get

};

// CREATE & START API SERVER
var server = new opuntia.Server(router,config);
server.listen(function(){
	// START STATIC WEB SERVER
	var testUrl   = "http://localhost:"+server.config.PORT+"/";
	console.log("Open the next URL for test:\n"+testUrl);
});
