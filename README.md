# GoFirst

This is a Chrome extension that redirects the user to the first search result when holding the Enter key.

## Installation

Download the repository and unzip the file.
Go to the Chrome Extensions page by navigating to chrome://extensions in your browser.
Turn on Developer mode by clicking the toggle switch in the top right corner.
Click the "Load unpacked" button and select the directory of the unzipped repository.

## Usage

Go to a search engine and perform a search.
Hold the Enter key to be redirected to the first search result.

## Code Explanation

The code uses the document.addEventListener method to listen for the keydown event.

A message is then sent to the background script using the chrome.runtime.sendMessage method, with the URL of the first search result and a flag indicating that the Enter key is being held.

The background script listens for messages from the content script and updates the URL of the active tab when a message is received with the Enter key held flag set to true.

## Note

This code assumes that the structure of the search results on the website will not change. If this changes, the code may need to be updated to correctly select the first search result.
