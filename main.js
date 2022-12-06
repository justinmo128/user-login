document.getElementById("button").addEventListener("click", testCredentials);

function testCredentials() {
    let user = document.getElementById("user-in").value;
    let password = document.getElementById("password-in").value;
    if (user === "admin" && password === "1234") {
        alert("Login Successful");
    } else if (user === "admin") {
        alert("Invalid Password")
    } else {
        alert("Invalid Username")
    }
}