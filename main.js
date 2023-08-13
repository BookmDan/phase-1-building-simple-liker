// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const likeGlyph = document.querySelector(".like-glyph");
  const errorModal = document.querySelector(".error-modal");

  // Add click event listener to the heart icon
  likeGlyph.addEventListener("click", () => {
    // Simulate a server call
    mimicServerCall()
      .then(() => {
        // Update heart icon on success
        likeGlyph.classList.add("activated-heart");
        likeGlyph.querySelector(".like-glyph-icon").textContent = "♥";
      })
      .catch(() => {
        // Show error modal on failure
        errorModal.classList.remove("hidden");
        // Set the error message in the modal
        errorModal.querySelector("p").textContent = "Server error message";
        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
