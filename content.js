const searchResults = document.querySelector('#search');
const firstAnchor = searchResults.querySelector('a');
const redirectUrl = document.querySelector('#search a').href;

let isRedirecting = false;

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.repeat && !isRedirecting) {
    isRedirecting = true;
    setTimeout(() => {
      isRedirecting = false;
    }, 1000);

    chrome.runtime.sendMessage({ enterKeyHeld: true, redirectUrl: redirectUrl });
  }
});
