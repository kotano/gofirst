chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.enterKeyHeld) {
    chrome.tabs.update({url: request.redirectUrl});
  }
});
