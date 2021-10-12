
var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		if (enabled) {
			console.log("blocking:", details.url);
		}
		return { cancel: enabled };
	},
	{ urls: adsites },
	["blocking"]
);
