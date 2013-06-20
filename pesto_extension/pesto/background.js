
var SERVICE_PATH = 'https://salty-dawn-2132.herokuapp.com',
    pesto = {},
    buff = [];

var updateSettings = function () {
    chrome.storage.sync.get('pesto', function (res) {
        pesto = res.hasOwnProperty('pesto') ? res['pesto'] : {};
    });
};

chrome.storage.onChanged.addListener(updateSettings);
updateSettings();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    buff.push({ url: sender.tab.url, strokes: request });
});

setInterval(function () {
    if (buff.length > 0) {
        $.post(SERVICE_PATH + '/api/archive_strokes', {
            username: pesto['username'],
            password_hash: pesto['password_hash'],
            instance_name: pesto['instance_name'],
            buff: JSON.stringify(buff)
        });

        buff = [];
    }
}, 1000);

