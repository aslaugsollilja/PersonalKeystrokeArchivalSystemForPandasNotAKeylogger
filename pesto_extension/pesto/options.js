
var restore_options = function () {
    chrome.storage.sync.get('pesto', function (res) {
        var pesto = res["pesto"];

        $("#username").val(pesto['username']);
        $("#password").val('password');
        $("#instance_name").val(pesto['instance_name']);

    });
};

$(document).ready(function () {
    restore_options();

    $("#save_settings").click(function () {

        chrome.storage.sync.set({
            'pesto': {
                'username': $('#username').val(),
                'password_hash': new jsSHA($('#username').val() + $('#password').val(), 'TEXT').getHash('SHA-512', 'HEX'),
                'instance_name': $('#instance_name').val()
            }
        }, restore_options);

        return false;
    });
});
