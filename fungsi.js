    $(function() {
        var socket = new WebSocket("wss://" + window.location.host + "/ws?username=" + encodeURIComponent($('#username').val()));

        socket.onmessage = function(event) {
            var message = JSON.parse(event.data);
            var content = "<strong>" + message.username + ":</strong> " + message.content + "<br />";
            $('#messages').append(content);
        };

        $('#send').click(function() {
            var message = {
                username: $('#username').val(),
                content: $('#message').val()
            };
            socket.send(JSON.stringify(message));
            $('#message').val('');
        });
    });
