console.log("b");
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
  s.parentNode.removeChild(s);
};
(document.head||document.documentElement).appendChild(s);