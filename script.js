// Select elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Compare the string with its reversed version
    return cleanStr === cleanStr.split("").reverse().join("");
}

// Event listener for the button
checkBtn.addEventListener("click", () => {
    const text = textInput.value; // Get user input

    // Check if input is empty
    if (!text.trim()) {
        alert("Please input a value");
        return;
    }

    // Check if the input is a palindrome
    const palindromeCheck = isPalindrome(text);
    if (palindromeCheck) {
        result.textContent = `${text} is a palindrome`;
    } else {
        result.textContent = `${text} is not a palindrome`;
    }
});
