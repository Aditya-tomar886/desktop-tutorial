let password = document.getElementById("password");
let strength = document.getElementById("strength");

password.addEventListener("input", function () {
    let value = password.value;
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[@$!%*?&]/.test(value)) score++;

    if (score <= 2) {
        strength.textContent = "Weak ";
        strength.style.color = "red";
    }
    else if (score <= 4) {
        strength.textContent = "Theek thak ";
        strength.style.color = "orange";
    }
    else {
        strength.textContent = "Strong ";
        strength.style.color = "green";
    }
});