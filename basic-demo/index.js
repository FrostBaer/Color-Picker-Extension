async function sayHello() {
    //pick the currently active tab
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert('Hello from Derpy Cat!');
        }
    });
}
// Add an event listener to myButton
document.getElementById("myButton").addEventListener("click", sayHello);