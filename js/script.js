
welcomeMessage();

function welcomeMessage() {

    let username = prompt("Enter your name:");
    if (username) {
        document.getElementById("username").innerHTML = username;
    } else {
        alert("Welcome to my portfolio!");
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Silakan isi semua kolom.");
        return;
    }

    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Nama tidak bisa diisi oleh angka dan simbol.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Silakan masukkan alamat email yang benar.");
        return;
    }

    document.getElementById("output-name").innerText = name;
    document.getElementById("output-email").innerText = email;
    document.getElementById("output-message").innerText = message;
    document.getElementById("output-box").classList.remove("hidden");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

