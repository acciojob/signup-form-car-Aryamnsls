document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        if (!document.getElementById("tos").checked) {
            alert("You must agree to the Terms of Service to proceed.");
            event.preventDefault();
        }
    });
});
