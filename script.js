// Handling a Search input box

document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('.form-control');
    const searchButtons = document.querySelectorAll('.input-group-text');
    const titles = Array.from(document.querySelectorAll('h4'));

    // Loop through each search input and button
    searchInputs.forEach((searchInput, index) => {
        const searchButton = searchButtons[index]; 

        // Event listener
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            const matchedTitle = titles.find(title => title.textContent.toLowerCase().includes(query));

            // Show where the city the user typed
            if (matchedTitle) {
                matchedTitle.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' 
                });
            } else {
                alert("No match found."); 
            }
        });
    });
});



// Handling a Login Button and its popup window

// Get popup, button, and close elements
const popup = document.getElementById("loginPopup");
const btn = document.querySelector(".login-btn"); 
const closeBtn = document.getElementsByClassName("close")[0];

// Lets the user open the popup after clicking the login button
btn.onclick = function() {
    popup.style.display = "block";
}

// Lets the user close the popup by clicking the close button
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Lets the user close the popup by clicking outside the popup window
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

// Handle login form submission (for demo purposes)
const loginForm = document.getElementById("loginForm");
loginForm.onsubmit = function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Check whether the username & password entered by the user are correct
    if (username === "username" && password === "password") {
        alert("Welcome!");
        // now, close the popup
        popup.style.display = "none"; 
    } else {
        alert("Incorrect username or password. Try again.");
    }
}



