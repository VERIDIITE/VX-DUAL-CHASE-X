let form = document.getElementById("login-form");
/**
 * @param event - The event that triggered this function. We check if the username and password are correct
 */
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document
        .getElementById("username")
        .value;
    let password = document
        .getElementById("password")
        .value;
    if (username === "DUAL" && password === "CHASE") {
        window.location.href = "sample-page-1.html";
    } else {
        alert("Incorrect username or password");
    }
});
