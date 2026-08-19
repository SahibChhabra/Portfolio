let form =  document.querySelector("form");
form.addEventListener('submit' , (e)=>{
    alert('Form submitted successfully!')
    e.preventDefault();
})
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

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
