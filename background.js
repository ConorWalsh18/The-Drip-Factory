chrome.runtime.onMessage.addListener(function(request, sender) {
    chrome.tabs.update({url: request.redirect});
    // sendResponse();
});
