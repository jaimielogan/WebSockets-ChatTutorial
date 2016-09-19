$(function(){
  var socket = io();
  $('.chatBox').submit(function(event){
    event.preventDefault();
    var message = $("#m").val();
    socket.emit('chat message', message);
    $("#m").val("");
  });

  socket.on('chat message', function(data){
    $("#messages").append(`<li>${data}</li>`);
  }); 
});
