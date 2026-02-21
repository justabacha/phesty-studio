// Get the modal and buttons
const modal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close-btn");

// Open the modal when the user clicks the Contact button
contactBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal when the user clicks the 'X'
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside of the white box
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});