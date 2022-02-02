const burger=document.getElementById("burger");
const nav=document.querySelector("nav");
const mobileNav=document.querySelector(".mobilenav");
const closeBtn=document.querySelector("#closebtn");
const icon=document.querySelector("#burger i");
const heroTxt=document.querySelector(".herotxt");
const toTop=document.getElementById("totop");
const scrollData=document.getElementById("scrolldata");
const currLength=document.getElementById("length");
const message=document.getElementById("message");


const navLinks=document.querySelector("nav ul");
const cloned=navLinks.cloneNode(true);
mobileNav.appendChild(cloned);

document.querySelectorAll(".mobilenav ul li a").forEach((e)=>{
    e.addEventListener("click",()=>{
        closeFunc();
    })
})

burger.addEventListener("click",()=>{
    icon.classList.toggle("fa-times");
    mobileNav.classList.toggle("activenav")
    if(icon.classList.contains("fa-times")){
        console.log("open");
        document.body.style.overflowY="hidden";
        heroTxt.classList.add("notactive");
    }
    else{
        console.log("close");
        heroTxt.classList.remove("notactive");
        document.body.style.overflowY="scroll";
    }
})

closeBtn.addEventListener("click",()=>{
    closeFunc();
})

const closeFunc=()=>{
    document.body.style.overflowY="scroll";
    mobileNav.classList.remove("activenav");
    icon.classList.remove("fa-times");
    heroTxt.classList.remove("notactive");
}

window.addEventListener("scroll",()=>{
    const scrolled=document.body.scrollTop  || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollData.style.width=`${scrolled/height*100}%`;
    if(scrolled>500){
        toTop.style.display="grid";
    }
    else{
        toTop.style.display="none";
    }
})

toTop.addEventListener("click",()=>{
    window.scrollTo(0,0);
})

const handleChange=()=>{
    currLength.innerText=message.value.length
} 

message.addEventListener("keyup",()=>{
    handleChange();
})
message.addEventListener("change",()=>{
    handleChange();
})