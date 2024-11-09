// List of AI-related keywords to search for on the page
const aiKeywords = ["AI", "machine learning", "neural network", "deep learning", "TensorFlow", "GPT", "NLP", "artificial intelligence", "computer vision"];

// Function to check if any AI-related keywords are found on the page
function checkForAI() {
    const pageText = document.body.innerText.toLowerCase();
    return aiKeywords.some(keyword => pageText.includes(keyword.toLowerCase()));
}

// Send the detection result to the background script
const aiDetected = checkForAI();
chrome.runtime.sendMessage({ action: "storeAIStatus", aiDetected: aiDetected });
