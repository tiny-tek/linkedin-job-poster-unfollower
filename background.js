// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' &&tab.url && tab.url.includes('linkedin.com/jobs')) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['script.js'],
    });
  }
});