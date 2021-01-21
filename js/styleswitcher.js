const links = document.querySelectorAll(".altername-style"),
totallinks = links.length;


function setactivstyle(color){
    for (let i = 0; i < totallinks; i++) {
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled","true");
            
        }
        
    }
    // console.log(color)
}


// body skin

const bodyskin = document.querySelectorAll(".body-skin"),
totalbodyskin = bodyskin.length;
for (let i = 0; i < totalbodyskin; i++) {
 bodyskin[i].addEventListener("change",function(){
     if (this.value === "dark") {
         document.body.className = "dark";
     } else {
        document.body.className = "";
    
     }
 })
    
}

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{

    
    document.querySelector(".style-switcher").classList.toggle("open");
})

