const loginOf = document.querySelector(".login-box");
const login_link = document.querySelector(".login-link");
const reg_link = document.querySelector(".register-link");
const popBtn = document.querySelector(".login_btn");
const iconClosed = document.querySelector(".icon-closed");

reg_link.addEventListener('click',()=>{
    loginOf.classList.add('active');
})

login_link.addEventListener('click',()=>{
    loginOf.classList.remove('active');
})

popBtn.addEventListener('click',()=>{
    loginOf.classList.add('active-popup');
})

iconClosed.addEventListener('click',()=>{
    loginOf.classList.remove('active-popup');
})




gsap.to("#bar",{
   backgroundColor : "black",
   duration : 0.5,
   height : "120px",
   scrollTrigger :{
    trigger : "#bar",
    scroller : "body",
    start : "top -10px",
    end : "top -11px",
    scrub : 1
   }
})

gsap.to("#menu",{
    backgroundColor : "black",
    scrollTrigger:{
        trigger : "#menu",
        scroller : "body",
        start : "top -50%",
        end : "top -40%",
        scrub : 2
    }
})

gsap.from("#page2 img, #about-us",{
    y:50,
    opacity : 0,
    duration : 60,
    scrollTrigger:{
        trigger : "#page2",
        scroller : "body",
        start : "top 60%",
        end : "top 50%",
        scrub : 2
    }

})

gsap.from("#card-boxes",{
    y:50,
    opacity : 0,
    duration : .5,
    stagger: .3,
    scrollTrigger:{
        trigger : "#card-boxes",
        scroller : "body",
        start : "top 60%",
        end : "top 50%",
        scrub : 1
    }
})

gsap.from("#colon1",{
    y : -70,
    x : -70,
    duration : .3,
    scrollTrigger:{
        trigger : "#colon1",
        scroller : "body",
        start : "top 55%",
        end : "top 45%",
        scrub : 1

    }
})

gsap.from("#page4 h1",{
    y : 50,
    scrollTrigger:{
        trigger : "#page4 h1",
        scroller : "body",
        start : "top 75%",
        end : "top 75%",
        scrub : 3
    }
})


 
