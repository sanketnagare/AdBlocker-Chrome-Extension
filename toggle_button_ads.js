window.onload = function () {
    function updateLabel() {
        var enabled = chrome.extension.getBackgroundPage().enabled;
        document.getElementById('enable-extension').value = enabled ? "Disable" : "Enable";
    }
    document.getElementById('enable-extension').onclick = function () {
        var background = chrome.extension.getBackgroundPage();
        background.enabled = !background.enabled;
        updateLabel();
    };
    updateLabel();
}