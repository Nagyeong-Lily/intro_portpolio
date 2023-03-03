const main = document.querySelector("main");
const loading = document.querySelector("aside");
const txt = document.querySelector("p");


for (let i=0; i<200; i++){
    const imgNode = document.createElement("img");
    imgNode.setAttribute("src",`img/pic${i}.jpg`);
    main.append(imgNode);
}

const imgs = document.querySelectorAll("img");
const len = imgs.length;
let total = 0;
let percent = 0;

imageLoaded();

window.addEventListener("mousemove", e=>{
    let x = e.pageX; //현재 위치값
    let y = e.pageY;
    let cx = -x/10;
    let cy = -y/10;
    txt.style.transform = `translate(${cx}px,${cy}px)`;

    let wid = window.innerWidth; 
    let percent = parseInt((x/wid)*200);
    const imgs = document.querySelectorAll("main img");
    for (let img of imgs) img.style.display = "none";
    imgs[percent].style.display= "block";
    console.log(percent);
});






function imageLoaded() {
    
    imgs.forEach(img=>{
        img.addEventListener("load", ()=>{
            total++;
            percent = parseInt((total/len)*100);
            loading.innerText = `${total} / ${len} (${percent}%)`;
    
            if(total === len){
                main.classList.add("on");
                setTimeout(()=>{
                    loading.remove();
                },convertSpeed(loading));
            }
        })
    })
}

function convertSpeed(el){
    let speed = getComputedStyle(el).transitionDuration;
    speed = parseFloat(speed)*1000;
    return speed;
}

















