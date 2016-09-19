$(function(){
  var socket = io();
  $('.chatBox').submit(function(event){
    event.preventDefault();
    var message = $("#m").val();
    var newMessage = $("<li></li>");
    newMessage = newMessage.text(message);
    $("#messages").append(newMessage);
    socket.emit('chat message', message);
    $("#m").val("");
  });
});
