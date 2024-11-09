document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        
        chrome.runtime.sendMessage({ action: "getAIStatus", tabId: tabId }, (response) => {
            const resultElement = document.getElementById("result");
            const guardIcon = document.getElementById("guard");
            const swordIcon = document.getElementById("sword");

            if (response && response.aiDetected) {
                resultElement.textContent = "Yes, AI is being used!";
                resultElement.classList.add("ai-detected");
                guardIcon.style.display = "block";
                swordIcon.style.display = "none";
            } else {
                resultElement.textContent = "No, AI is not detected.";
                resultElement.classList.add("no-ai-detected");
                guardIcon.style.display = "none";
                swordIcon.style.display = "block";
            }
        });
    });
});
