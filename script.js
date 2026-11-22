document.getElementById("join-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.elements.name.value.trim();
  document.getElementById("form-msg").textContent =
    "Thanks, " + name + "! We will contact you soon.";
  this.reset();
});
