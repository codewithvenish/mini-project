let progress = document.querySelector(".progress");

progress.addEventListener("click",()=>{   //Adding Event
    progress.classList.add("active");  // Add active in progress


    setTimeout(()=>{
progress.classList.remove("active");  //Reomve active in progress 
document.querySelector("i").classList.replace("bx-cloud-download","bx-check-circle"); // Replace the icons..
document.querySelector("p").innerText="completed"; // Changing the innertext
    },7000);
});