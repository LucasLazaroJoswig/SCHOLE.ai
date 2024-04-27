let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-intro")
let logoSpan=document.querySelectorAll(".palabraForo")

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        
        document.querySelectorAll(".palabraForo").forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx +1)*400)
            
        });
        setTimeout(()=>{
        
            document.querySelectorAll(".palabraForo").forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active')
                    span.classList.add('fade')
                },(idx +1)*50)
                
            });


    },2000);
    setTimeout(()=>{
        document.querySelector(".intro").style.top="-100vh"
    },2300)
})
})