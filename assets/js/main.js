function Hamburger(x) {
    x.classList.toggle("change");
    var Drawer = document.querySelector(".navList");
    Drawer.classList.toggle("drawer");
    var main = document.querySelector("main");
    main.classList.toggle("scroller");
  }

  gsap.from(".bg1", {
    transform:"scale(1.5)",
    top:"10vw",
    duration: 1.5,
  });

  var vid = document.getElementById("myVideo"); 

  function playVid() { 
    if (myVideo.paused) 
      myVideo.play(); 
  else 
      myVideo.pause();
      var vid2 = document.querySelector(".secFour .playBtn svg"); 
      vid2.classList.toggle("opacityZ")
      vid.classList.toggle("opacityZ")
      var vid3 = document.querySelector(".playBtn");
      vid3.classList.toggle("customCursor")
      var vid4 = document.querySelector(".play");
      vid4.classList.toggle("pause")
  }


  document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll(".hoverable,a");
    var vidContain = document.querySelectorAll(".playBtn");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }

    for (var j = 0; j < vidContain.length; j++) {
      var selfLink2 = vidContain[j];
  
      selfLink2.addEventListener("mouseover", function() {
        cursor.classList.add("play");
      });
      selfLink2.addEventListener("mouseout", function() {
        cursor.classList.remove("play");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
  });

  let slides = document.getElementsByClassName("slider-slide"); // returns all slider-slade as an array
let navlinks = document.getElementsByClassName("slider__navlink"); // returns all slider__navlink as an array

let currentSlide = 0; // pageload defaults to first slide which is position 0


// event listeners
document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
}); 
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

setInterval(function(){
    changeSlide(currentSlide + 1)
},10000)

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
  slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})


gsap.registerPlugin(ScrollTrigger);
const scroller = document.querySelector('.scroller');

const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.025, delegateTo: document, alwaysShowTracks: true });

ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });

gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
        scrollTrigger: {
            trigger: ".secOne",
            start: "1.5% top", 
            end: () => "+=" + innerHeight,
            scrub: true,
        }
    })


    .to(".bg1", {
        top:"20vw"
    })

    gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            start: "top top", 
            end: () => "+=" + innerHeight,
            scrub: true,
  
        }
    })


    .to(".bg", {
        top:"20vw"
    })
if (document.querySelector('.gsap-marker-scroller-start')) {    
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]'); 

  bodyScrollBar.addListener(({ offset }) => {  
    gsap.set(markers, { marginTop: -offset.y })
  });
}

var magnetss = document.querySelectorAll('.bt')
  
var strengths = 50
magnetss.forEach( (magneti) => {
  magneti.addEventListener('mousemove', moveMagnet );
  magneti.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButtons = event.currentTarget
  var bounding = magnetButtons.getBoundingClientRect()
  TweenMax.to( magnetButtons, 1, {
    x: ((( event.clientX - bounding.left)/magnetButtons.offsetWidth) - 0.5) * strengths,
    y: ((( event.clientY - bounding.top)/magnetButtons.offsetHeight) - 0.5) * strengths,
    ease: Power4.easeOut
  })
}
