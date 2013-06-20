var SERVICE_PATH = 'https://salty-dawn-2132.herokuapp.com/',
    pesto = {};

var updateSettings = function () {
    chrome.storage.sync.get('pesto', function (res) {
        pesto = res.hasOwnProperty('pesto') ? res['pesto'] : {};
    });
};

chrome.storage.onChanged.addListener(updateSettings);
updateSettings();

document.addEventListener('keypress', function (e) {

    console.log(e);

}, true);
