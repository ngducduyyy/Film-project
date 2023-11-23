const btn = document.querySelector(".btn-plugin")
const closeIcon = document.querySelector(".close-btn")
const trailer = document.querySelector(".trailer")
const video = document.querySelector("video")
btn.addEventListener("click",()=>{
    trailer.classList.remove("active");
});
closeIcon.addEventListener("click", ()=>{
    trailer.classList.add("active");
    video.pause();
    video.currentTime = 0;
})