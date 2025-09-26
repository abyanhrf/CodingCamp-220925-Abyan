
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

    // Validasi nama (hanya huruf dan spasi)
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Nama tidak bisa diisi oleh angka dan simbol.");
        return;
    }

    // Validasi email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Silakan masukkan alamat email yang benar.");
        return;
    }

    // Kalau semua valid
    alert(`Terima kasih, ${name}! Formulir berhasil dikirim!`);

    // Reset form setelah submit
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}
