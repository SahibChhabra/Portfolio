const form = document.querySelector('form');
const submitBtn = form.querySelector('.submitbtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "8253ca9e-47f2-4e32-8055-323c3bf741db");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            showToast("Success! Your message has been sent.");
            form.reset();
        } else {
            showToast("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});
function showToast(message) {
    const toast = document.getElementById("site-toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
let projectbtn = document.querySelector('.projectbtn');
projectbtn.addEventListener("click" , ()=>{
    showToast('No projects available yet.')
})
let viewproject = document.querySelector(".View-project");
viewproject.addEventListener('click' , ()=>{
    showToast('No projects available yet.')
})
let resumebtn = document.querySelector(".resume-button");
resumebtn.addEventListener('click' , ()=>{
     showToast("Resume will be updated soon.")
})
let mobileresume = document.querySelector(".mobile-resume");
mobileresume.addEventListener('click', ()=>{
    showToast("Resume will be updated soon.")
})
let contactbtn =  document.querySelector(".Contact-button");
contactbtn.addEventListener('click', ()=>{
    location.href='mailto:sahibchhabrawork@gmail.com' ,  '_blank';
})
