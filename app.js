const NO = document.querySelector("#NO");
const width = window.innerWidth;
const height = window.innerHeight;

NO.addEventListener("mouseover", () => {
    let left = Math.random() * (width - 500); 
    let top = Math.random() * (height - 400);
    console.log(top, left);
    NO.style.position = "fixed";
    NO.style.left = left + "px";
    NO.style.top = top + "px"; 
});

const YES = document.querySelector("#YES").addEventListener("click", () => {
    document.querySelector(".card h1").innerText = "Thanks😘😘😘";
});
