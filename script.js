// function loadAnimation(animationFile) {
//   const iframe = document.getElementById("animationIframe");
//   iframe.src = `./${animationFile}`;

//   const buttons = document.querySelectorAll(".button-container button");
//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       buttons.forEach((btn) => btn.classList.remove("selected")); // Remove the selected class from all buttons
//       this.classList.add("selected"); // Add the selected class to the clicked button
//     });
//   });
// }

function loadAnimation(animationFile, button) {
    const iframe = document.getElementById("animationIframe");
    iframe.src = `./${animationFile}`;

    const buttons = document.querySelectorAll(".button-container button");
    buttons.forEach((btn) => btn.classList.remove("selected")); // Remove the selected class from all buttons
    button.classList.add("selected"); // Add the selected class to the clicked button
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll(".button-container button");
    
    // Ensure that buttons have the correct event listener if needed
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const animationFile = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            loadAnimation(animationFile, button);
        });
    });
});

