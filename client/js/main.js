console.log("Hello World!");

var MT = createClass("MT", "js");
MT.require("Core");
MT.require("Socket");
MT.require("ui.Controller");
MT.require("plugins.PluginController");

MT.onReady(main);


function main(){
	var socket = new MT.Socket();
	var ui = window.ui = new MT.ui.UIController();
	
	new MT.plugins.MapEditor(ui);
	
	socket.on("open", function(){
		console.log("connection opened");
	});
	
	socket.onMessage(function(data){
		console.log("message:", data);
	});
	
	socket.on("Sock", function(data){
		//console.log("Sock", data);
	});
}