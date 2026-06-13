function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// WhatsApp form submit
function sendWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let url = "https://wa.me/923132930004?text="
    + "Name: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Message: " + message;

  window.open(url, "_blank");
}