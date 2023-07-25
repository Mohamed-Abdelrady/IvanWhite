// define gsap
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();


// responsive gsap animation
mm.add("(min-width: 1200px)",()=> {
    gsap.utils.toArray(".fresh-talent .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".fresh-talent",
                duration: 2,
                start: "top 55%",
                end: "+=2100",
                toggleActions: "restart reverse restart reverse ",
            }
        })
    }); 

    gsap.to(".fresh-talent .mobile", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".fresh-talent",
            duration: 1,
            start: "top 55%",
            end: "+=2100",
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });
    
    gsap.to('.fresh-talent .search-by .mobile-container', {
        scrollTrigger: {
            pin: '.fresh-talent .search-by ',
            start: 'top 10%',
            end: 'bottom 30%',
            pinSpacing: true,
        },
    });



    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(2)",
            duration: 1,
            ease: "expo",
            start: '-=400s',
            end: '+=500s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(3)",
            duration: 1,
            ease: "expo",
            start: '-=300s',
            end: '+=200s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(4)",
            duration: 1,
            ease: "expo",
            start: '-=100s',
            end: '+=800s',
            toggleClass: "box--active",
        },
    });

    gsap.to(".fresh-talent", {
        scrollTrigger: {
            trigger: ".mobile",
            duration: 1,
            start: "-=500s",
            end: '+=1490s',
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });
    
    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box,
                duration: 1,
                ease: "expo",
                start: '-=500s',
                end: '+=400s',
                toggleClass: "box--active",
            }
        })
    });

    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".secure-spot",
                duration: 2,
                start: '-=300',
                end: '+=1600',
                toggleActions: "restart reverse restart reverse ",

            }
        })
    }); 

    gsap.to(".secure-spot .partner", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".secure-spot",
            duration: 2,
            start: '-=300',
            end: '+=1500',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".newsletter", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 2,
            start: 'top 90%',
            toggleActions: "restart reverse restart reverse",
        }
    });

    gsap.to(".three-clicks", {
        y:0,
        opacity: 1,
        duration: 2,
        ease: "back",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 1,
            start: 'top 76%',
            toggleActions: "restart reverse restart reverse ",

        }
    });

    gsap.to(".footer", {
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".footer",
            duration: 1,
            start: 'top 80%',
            toggleActions: "restart reverse restart reverse ",
        }
    });
})

mm.add("(max-width: 1200px)",()=> {
    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(2)",
            duration: 1,
            ease: "expo",
            start: '-=500s',
            end: '+=350s',
            toggleClass: "box--active",

        },
    });
    


    gsap.utils.toArray(".fresh-talent .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".fresh-talent .search-by",
                duration: 2,
                start: "top 20%",
                end: "bottom 10%",
                toggleActions: "restart reverse restart reverse ",
            }
        })
    });

    gsap.to(".fresh-talent .mobile", {
        scrollTrigger: {
            trigger: ".mobile",
            duration: 1,
            start: "top 40%",
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".fresh-talent .mobile", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".fresh-talent",
            duration: 1,
            start: "top 60%",
            end: "bottom 95%",
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box,
                duration: 1,
                ease: "expo",
                start: 'top 60%',
                end: "bottom 60%",
                toggleClass: "box--active",
            }
        })
    });



    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".secure-spot .about-us",
                duration: 2,
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "restart reverse restart reverse ",
            }
        })
    }); 

    gsap.to(".secure-spot .partner", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".secure-spot",
            duration: 2,
            start: '-=500s',
            end: 'bottom 20%',
            toggleActions: "restart reverse restart reverse ",
        }
    });
    
    gsap.to(".secure-spot .partner", {
        ease: "back",
        scrollTrigger: {
            trigger: ".secure-spot .partner",
            start: 'top 65%',
            end: 'bottom 40%',
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".newsletter", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 1,
            start: "top 65%",
            toggleActions: "restart reverse restart reverse",
        }
    });
    
    gsap.to(".three-clicks", {
        y:0,
        opacity: 1,
        duration: 2,
        ease: "back",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 1,
            start: 'top 90%',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".footer", {
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".footer",
            duration: 1,
            start: 'top 90%',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    
})

mm.add("(min-width: 992px) and (max-width: 1200px)",()=> {
    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(3)",
            duration: 1,
            ease: "expo",
            start: '-=450s',
            end: '+=150s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(4)",
            duration: 1,
            ease: "expo",
            start: '-=280s',
            end: '+=430s',
            toggleClass: "box--active",
        },
    });
});

mm.add("(max-width: 992px)",()=> {
    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(3)",
            duration: 1,
            ease: "expo",
            start: '-=450s',
            end: '+=400s',
            toggleClass: "box--active",
        },
    });
    gsap.to(".fresh-talent .box", {
        scrollTrigger: {
            trigger: ".fresh-talent .box:nth-child(4)",
            duration: 1,
            ease: "expo",
            start: '-=350s',
            toggleClass: "box--active",
        },
    });
})

mm.add("(min-width: 1200px)",()=> {
    document.querySelectorAll(".search-by .box").forEach((box) => {
        window.addEventListener("scroll", () => {
            if ( box.id == "search" && box.classList.contains("box--active")) {
                document.querySelector(".search-by .mobile").setAttribute("id", "play-search")
                document.querySelector(`.search-by .mobile ul li[data-video=play-search]`).classList.add("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-essence]`).classList.remove("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-performance]`).classList.remove("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-search] video`).play();
                document.querySelector(`.search-by .mobile ul li[data-video=play-essence] video`).load();
                document.querySelector(`.search-by .mobile ul li[data-video=play-performance] video`).load();
            } 
            if ( box.id == "essence" && box.classList.contains("box--active")) {
                document.querySelector(".search-by .mobile").setAttribute("id", "play-essence")
                document.querySelector(`.search-by .mobile ul li[data-video=play-essence]`).classList.add("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-search]`).classList.remove("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-performance]`).classList.remove("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-essence] video`).play();
                document.querySelector(`.search-by .mobile ul li[data-video=play-search] video`).load();
                document.querySelector(`.search-by .mobile ul li[data-video=play-performance] video`).load();
            } 
            if ( box.id == "performance" && box.classList.contains("box--active")) {
                document.querySelector(".search-by .mobile").setAttribute("id", "play-performance")
                document.querySelector(`.search-by .mobile ul li[data-video=play-performance]`).classList.add("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-search]`).classList.remove("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-essence]`).classList.remove("active");
                document.querySelector(`.search-by .mobile ul li[data-video=play-performance] video`).play();
                document.querySelector(`.search-by .mobile ul li[data-video=play-search] video`).load();
                document.querySelector(`.search-by .mobile ul li[data-video=play-essence] video`).load();
            } 
        });
    });
})

// submit form newsletter
function submitForm(e) {
    e.preventDefault();
    var myform = document.getElementById("myform");
    var myName = document.querySelector("#myform #name").value;
    console.log(myName);
    var formData = new FormData(myform);
    fetch("https://show.ratufa.io/json", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("network returns error");
        }
        return response.json();
      })
      .then((resp) => {
        document.querySelector(".newsletter").classList.add("done");
        document.querySelector(".newsletter").innerHTML = `
            <img src="images/icons/thanks.svg">
            <h3>
            Hey ${myName}
            <span>You are on the newsletter!</span>
            </h3>
        `;
        myform.replaceWith(respdiv);
        console.log("resp from server ", resp);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  }
  var myform = document.getElementById("myform");
  myform.addEventListener("submit", submitForm);

// fixed navbar
var element = document.querySelector('.nav')
window.addEventListener('scroll', function() {
     window.scrollY > 0 ? 
     element.classList.add('fixed') : 
     element.classList.remove('fixed');
});


