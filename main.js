// Mobile menu implentation
let mobileContainer = document.querySelector("#mobile-menu")
let mobileOverlay = document.querySelector(".mobile-menu-overlay")
let mobileBox = document.querySelector(".mobile-menu-box")
let mobileTrigger = document.querySelector(".mobile-toggle-btn")
let mobileCloseTrigger = document.querySelector(".toggle-btn")

//Trigger mobile things
mobileTrigger.addEventListener("click", () =>{
      mobileContainer.classList.add("active")
      if(mobileContainer.classList.contains("active")){
           let tl = gsap.timeline()
           let lists = gsap.utils.toArray(".mobile-navbar ul li")
          tl.to(".mobile-menu-overlay", {
              y: 0, 
              duration: 1
          })
          tl.to(mobileBox, {
               x: 0,
               duration: 1
          })
          tl.to(".logo a", {
               x: 0,
               duration: 1
          })
          tl.to(".logo .toggle-btn", {
               x: 0,
               duration: 1
          })
          lists.forEach(element => {
               tl.to(element, {
                    x: 0,
                    duration: 0.5
               })
          });
          tl.to(".mobile-contact-btn a", {
              y: 0,
              opacity: 1
          })
      }
})


mobileCloseTrigger.addEventListener("click", () =>{
      mobileContainer.classList.remove('active')
      mobileContainer.classList.add('remove')
      if(mobileContainer.classList.contains('remove')){
           let tl = gsap.timeline()
           let lists = gsap.utils.toArray(".mobile-navbar ul li")

           tl.to(".mobile-contact-btn a", {
                y: "100px",
               opacity: 0.5
           })
           lists.forEach(element => {
            tl.to(element, {
                 x: -100,
                 duration: 0.2
            })
          });
           tl.to(".logo a", {
               x: -120,
               duration: 0.5
            })
            tl.to(".logo .toggle-btn", {
                x: 100,
                duration: 0.5
           })
           tl.to(mobileBox, {
                x: "-100%",
               duration: 0.5
           })
           tl.to(".mobile-menu-overlay", {
                y: "-100%", 
                duration: 0.5
           })
      }

      setTimeout(()=>{
            mobileContainer.classList.remove('remove')
      }, 3500)
})

















// Slider Implentation
$(function(){
     $(".backgrounds").slick({
         slidesToShow: 1,
         dots: false,
         arrows: false,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 3000,
         pauseOnHover: false
     })

     var $page = $('html, body');
	 $('a[href*="#"]').click(function() {
		     $page.animate({
     				scrollTop: $($.attr(this, 'href')).offset().top-10
			}, 700);
    		return false;	
     });
})