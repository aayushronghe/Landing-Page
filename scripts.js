document.querySelector(".cross").style.display='none';

document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector('.navbar-items-small').style.display="flex";
    document.querySelector('.hamburger').style.display='none';
    document.querySelector('.cross').style.display='flex';
})

document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector('.navbar-items-small').style.display="none";
    document.querySelector('.hamburger').style.display='flex';
    document.querySelector('.cross').style.display='none';
})