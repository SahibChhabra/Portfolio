let form =  document.querySelector("form");
form.addEventListener('submit' , (e)=>{
    alert('Form submitted successfully!')
    e.preventDefault();
})