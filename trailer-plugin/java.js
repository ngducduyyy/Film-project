const btn = document.querySelector(".btn-plugin")
const closeIcon = document.querySelector(".close-btn")
const trailer = document.querySelector(".trailer")
const video = document.querySelector("video")
const Nav3 = document.querySelector(".main-header")
btn.addEventListener("click",()=>{
    trailer.classList.remove("active");
    Nav3.classList.add("hide")
});
closeIcon.addEventListener("click", ()=>{
    trailer.classList.add("active");
    Nav3.classList.remove("hide");
    video.pause();
    video.currentTime = 0;
})