//Using the Chrome API 
//It needs to be enabled in the manifest file
//event listener will fire when the extension is clicked
// chrome.action.onClicked.addListener(tab => {
//     // chrome.scripting API needs special permissions (scripting)
//     // we also have to define, where the script can run
//     chrome.scripting.executeScript({
//         //what tab do we execute the script on
//         target: {tabId: tab.id},
//         func: () => {
//             alert("Hello from my extension!");
//         }
//     });
// });