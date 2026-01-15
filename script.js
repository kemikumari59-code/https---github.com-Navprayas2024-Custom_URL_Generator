const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");
if (hamburger && navMenu) {
hamburger.addEventListener("click", () => {
navMenu.classList.add("active");
});
}
if (closeMenu) {
closeMenu.addEventListener("click", () => {
navMenu.classList.remove("active");
});
}
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});


const fileInputs = document.querySelectorAll('input[type="file"]');

fileInputs.forEach(input => {
input.addEventListener("change", function () {
const file = this.files[0];
const label = this.closest(".file-label");
if (!file) return;

// 1 MB = 1048576 bytes
if (file.size > 1048576) {
alert(" File size must be less than 1 MB");
this.value = "";
label.innerHTML = '<i class="fa-solid fa-upload"></i> Choose File';
return;
}
// Show file name
label.innerHTML = `<i class="fa-solid fa-check"></i> ${file.name}`;
  });
});
const form = document.getElementById("membership-form");
form.addEventListener("submit", function (e) {
e.preventDefault();
// Agreement checkbox
const agree = document.getElementById("agree");
if (!agree.checked) {
alert(" Please agree to the declaration before proceeding.");
return;
}
// Phone number validation
const candidatePhone = document.getElementById("candidate_phone").value.trim();
const parentPhone = document.getElementById("parent_phone").value.trim();
const phoneRegex = /^[6-9][0-9]{9}$/;

if (!phoneRegex.test(candidatePhone)) {
 alert(" Enter valid candidate mobile number");
return;
}
if (!phoneRegex.test(parentPhone)) {
alert(" Enter valid parent's mobile number");
return;
}
// DOB validation (basic age check – optional safety)
const dob = document.getElementById("dob").value;
if (!dob) {
alert(" Please select Date of Birth");
return;
}
// Final success
  alert(" Form validated successfully!\nProceeding to payment..."); 
});
const textInputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea'
);
textInputs.forEach(input => {
input.addEventListener("blur", () => {
input.value = input.value.trim();
});
});
