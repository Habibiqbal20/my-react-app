//Typing Effect Mulai

// const { Timeline } = require("gsap/gsap-core");

const texts = ["Web Developer", "Video/Photo Editor", "Office Administrator", "Digital Marketing", "Others"];

let count = 0;        // index kata di array texts
let index = 0;        // panjang substring yang ditampilkan saat ini
let isDeleting = false;
const el = document.querySelector(".typing");

function type() {
  const current = texts[count];
  if (isDeleting) {
    index = Math.max(0, index - 1);
  } else {
    index = Math.min(current.length, index + 1);
  }
  // tampilkan substring berdasarkan index yang sudah di-update
  el.textContent = current.substring(0, index);
  // kecepatan dasar (ms)
  let delay = isDeleting ? 80 : 120;
  // jika sudah selesai mengetik seluruh kata -> jeda lalu mulai hapus
  if (!isDeleting && index === current.length) {
    delay = 3500;      // jeda ketika penuh (ubah sesuai keinginan)
    isDeleting = true;
  }
  // jika sudah selesai menghapus seluruh kata -> ganti ke kata selanjutnya
  else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    delay = 1000;       // jeda sebelum mulai mengetik kata baru
  }
  setTimeout(type, delay);
}
// pastikan elemen ada sebelum memulai
if (el) type();
else console.warn("Typing element not found: .typing");

//Typing Effect Selesai





// Sidebar Menu mulai

const menuBtn = document.querySelector('.menu-btn');
const slide = document.querySelector('.list');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('cross');
});
menuBtn.addEventListener('click', () => {
  slide.classList.toggle('open');
});
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width : 800px)').matches) {
    slide.classList.remove('open');
    menuBtn.classList.remove('cross');
  }
})
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !slide.contains(e.target)) {
    slide.classList.remove('open');
    menuBtn.classList.remove('cross');
  }
});

// Sidebar Menu selesai




//Hover BG Mulai

const baseColor = "#1e1e2f";

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  document.body.style.background = `
    radial-gradient(circle at ${x}px ${y}px, 
    rgba(0, 224, 255, 0.08), 
    ${baseColor} 100px)
  `;
});

document.addEventListener("mouseleave", () => {
  document.body.style.background = `
    radial-gradient(circle at -9999px -9999px, 
    rgba(0, 224, 255, 0), 
    ${baseColor} 100px)
  `;
});

//Hover BG Selesai




// Github Contributor Mulai

GitHubCalendar(".calendar", "Habibiqbal20", {
  responsive: true,
});

// Github Contributor Selesai



// Skills Auto Scroll dan Manual Drag Mulai

const track = document.getElementById("scrollTrack");
const firstContent = track.querySelector(".skills-content");
const singleWidth = firstContent.getBoundingClientRect().width;

track.appendChild(firstContent.cloneNode(true));

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
  track.style.cursor = "grabbing";
});
track.addEventListener("mouseleave", () => {
  isDown = false;
});
track.addEventListener("mouseup", () => {
  isDown = false;
  track.style.cursor = "grab";
});
track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.2;
  track.scrollLeft = scrollLeft - walk;
});

track.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - track.offsetLeft;
  const walk = (x - startX) * 1.2;
  track.scrollLeft = scrollLeft - walk;
});
track.addEventListener("touchend", () => {
  isDown = false;
});


let speed = 1;

function autoScroll() {
  track.scrollLeft = (track.scrollLeft + speed) % singleWidth;
  requestAnimationFrame(autoScroll);
}
track.addEventListener("mousedown", () => {
  speed = 0;
});
track.addEventListener("mouseup", () => {
  speed = 1;
});
track.addEventListener("touchstart", () => {
  speed = 0;
});
track.addEventListener("touchend", () => {
  speed = 1;
});
autoScroll();


//Skills Auto Scroll dan Manual Drag Selesai


// CV Download Mulai

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "asset/New CV.pdf";
  link.download = "Curriculum Vitae Habib Iqbal.pdf";
  link.click();
});

// CV Download Selesai


const scriptURL = 'https://script.google.com/macros/s/AKfycbxOFrbkRVV2sHQ3jtcmy-OAInxA-BaRio3Lobu4JCdLrHwGo800aPrmzTfHEPrS0NwGAw/exec'
const form = document.forms['submit-to-google-sheet'];
const kirim = document.querySelector('.kirim');
const loading = document.querySelector('.loading');
const alertText = document.querySelector('#alertBox');
const closeAlert = document.getElementById("closeAlert");

form.addEventListener('submit', e => {
  e.preventDefault();
  kirim.classList.toggle('hilang');
  loading.classList.toggle('hilang');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      kirim.classList.toggle('hilang');
      loading.classList.toggle('hilang');
      alertText.classList.toggle('show');
      const autoHide = setTimeout(() => {
        alertText.classList.remove("show");
      }, 10000);
      form.reset();
      console.log('Success!', response);
      closeAlert.addEventListener('click', () => {
        clearTimeout(autoHide);
        alertText.classList.remove('show');
      });
    })
    .catch(error => console.error('Error!', error.message));
});


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable, EaselPlugin, Flip, Observer, PixiPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, SplitText, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase)

  gsap.from("nav", {
    opacity: 0,
    y: -100,
    duration: 1
  });


  // ANIMASI MOBILE NAVBAR MULAI

  function handleMouseEnter(e) {
    gsap.to(e.currentTarget, {
      x: 20,
      duration: 0.2,
      ease: 'power4.in'
    });
  }
  function handleMouseLeave(e) {
    gsap.to(e.currentTarget, {
      x: 0,
      duration: 0.2,
      ease: 'power4.in'
    });
  }
  setInterval(() => {
    const exists = document.querySelector('.open');
    const li = document.querySelectorAll('.li');
    const isMobile = window.innerWidth <= 900;

    if (!isMobile) {
      li.forEach(liAnimate => {
        liAnimate.removeEventListener('mouseenter', handleMouseEnter);
        liAnimate.removeEventListener('mouseleave', handleMouseLeave);
        gsap.set(liAnimate, { clearProps: 'all' });
      });
      return;
    }

    if (!exists) {
      gsap.utils.toArray(li).forEach((liAnimate, iAnimate) => {
        gsap.fromTo(
          liAnimate,
          {
            opacity: 0,
            x: 20
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: iAnimate * 0.3,
            ease: "power4.in"
          }
        );

        liAnimate.addEventListener('mouseenter', handleMouseEnter);
        liAnimate.addEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, 500);

  // ANIMASI MOBILE NAVBAR SELESAI



  var floatAnim;
  gsap.from(".profile-card", {
    delay: 0.6,
    opacity: 0,
    duration: 2.5,
    ease: "back.out",
    y: -100,
    onComplete: () => {
      floatAnim = gsap.to('.profile-card', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    },
  });
  document.querySelector(".profile-card").addEventListener("mouseenter", () => {
    if (floatAnim) floatAnim.pause();
  });
  document.querySelector(".profile-card").addEventListener("mouseleave", () => {
    if (floatAnim) floatAnim.resume();
  });


  gsap.from(".hero-content", {
    delay: 0.6,
    opacity: 0,
    duration: 1,
    ease: "back.out",
    y: -100,
    onComplete: () => {
      gsap.to('.animated-h', {
        delay: 2.5,
        rotationX: 360 * 2,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 5,
        yoyo: true,
        transformOrigin: "center center"
      })
      gsap.to(".animated-i", {
        delay: 3,
        rotationX: 180,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 5,
        yoyo: true,
        transformOrigin: "center center"
      })
      gsap.to('.animated-q', {
        delay: 3.3,
        rotationY: 360 * 2,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 5,
        yoyo: true,
        transformOrigin: "center center"
      })
      gsap.to('.animated-a', {
        delay: 3.6,
        rotationX: 360 * 2,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 5,
        yoyo: true,
        transformOrigin: "center center"
      })
    },
  });


  gsap.from(".social-icons", {
    delay: 1,
    opacity: 0,
    duration: 1,
    ease: "back.out",
    y: -100
  });


  gsap.from(".About-me", {
    //duration: 0.5,
    // scrambleText : {
    //   text: "About Us",
    //   chars: "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    //   speed: 0.1
    // },
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.About-me',
      start: 'top 80%',
      //markers: true,
      once: true
    }
  });



  // SPLIT TEXT ABOUT MULAI

  document.fonts.ready.then(() => {
    gsap.set(".split", { opacity: 1 });

    let split;
    SplitText.create(".split", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          scrollTrigger: {
            trigger: '.split',
            start: 'top 80%',
            toggleActions: 'play pause resume none',
            //markers: true
          },
          duration: 1,
          yPercent: 100,
          opacity: 0,
          stagger: 0.4,
          ease: "expo.out",
        });
        return split;
      }
    });
  });


  // SPLIT TEXT ABOUT SELESAI

  gsap.from('.github-profile', {
    scrollTrigger: {
      trigger: '.github-profile',
      start: 'top 80%',
    },
    x: -200,
    opacity: 0,
    duration: 1.3,

  });
  gsap.from('.calendar', {
    scrollTrigger: {
      trigger: '.calendar',
      start: 'top 80%',
    },
    x: 200,
    opacity: 0,
    duration: 1.3,
    delay: 0.8
  });

  // TIMELINE EDUCATION MULAI

  gsap.utils.toArray('.timeline-content').forEach((myEdu, indexEdu) => {
    gsap.fromTo(myEdu,
      {
        x: indexEdu % 2 === 0 ? -300 : 300,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: myEdu,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
          //markers: true,
        }
      }
    );
    myEdu.addEventListener("mouseenter", () => {
      gsap.to(myEdu, {
        y: -10,
        duration: 0.2,
        ease: "power2.out"
      });
    });
    myEdu.addEventListener("mouseleave", () => {
      gsap.to(myEdu, {
        y: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });

  // TIMELINE EDUCATION SELESAI



  // CARD PROJECT MULAI

  gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.fromTo(card,
      {
        x: i % 2 === 0 ? -300 : 300,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 35%",
          scrub: true,
          //markers: true,
        }
      }
    );
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        duration: 0.2,
        ease: "power2.out"
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 1,
        duration: 0.2,
        ease: "power2.inOut"
      });
    });
  });
});
// CARD PROJECT SELESAI


VanillaTilt.init(document.querySelector(".profile-card"), {
  max: 30,
  speed: 400,
  reverse: true,
  gyroscope: false,
  // glare: true
});
VanillaTilt.init(document.querySelector(".card__inner"), {
  max: 0,
  speed: 400,
  glare: true,
  reverse: true,
  gyroscope: false,
});
"AKfycbxOFrbkRVV2sHQ3jtcmy-OAInxA-BaRio3Lobu4JCdLrHwGo800aPrmzTfHEPrS0NwGAw"
"https://script.google.com/macros/s/AKfycbxOFrbkRVV2sHQ3jtcmy-OAInxA-BaRio3Lobu4JCdLrHwGo800aPrmzTfHEPrS0NwGAw/exec"

// gsap.from('.bina-karya', {
//   scrollTrigger: {
//     trigger: '.bina-karya',
//     toggleActions: 'play pause resume none',
//     start: "top 80%",
//     end: "top 40%",
//     scrub: true
//   },
//   x: -300,
//   opacity: 0,
//   duration: 1.5
// });

// gsap.from('.sma', {
//   scrollTrigger: {
//     trigger: '.sma',
//     toggleActions: 'play pause resume none',
//     start: "top 80%",
//     end: "top 40%",
//     scrub: true
//   },
//   x: 300,
//   opacity: 0,
//   duration: 1.5
// });

// gsap.from('.smp', {
//   scrollTrigger: {
//     trigger: '.smp',
//     toggleActions: 'play pause resume none',
//     start: "top 80%",
//     end: "top 40%",
//     scrub: true
//   },
//   x: -300,
//   opacity: 0,
//   duration: 1.5
// });

// gsap.from('.sd', {
//   scrollTrigger: {
//     trigger: '.sd',
//     toggleActions: 'play pause resume none',
//     start: "top 80%",
//     end: "top 40%",
//     scrub: true
//   },
//   x: 300,
//   opacity: 0,
//   duration: 1.5
// });

// function scrambleText(element, newText, duration = 1) {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
//   const length = newText.length;
//   let frame = 0;
//   const totalFrames = duration * 60; // 60fps

//   const interval = setInterval(() => {
//     let output = "";

//     for (let i = 0; i < length; i++) {
//       if (i < (frame / totalFrames) * length) {
//         output += newText[i];
//       } else {
//         output += chars[Math.floor(Math.random() * chars.length)];
//       }
//     }

//     element.textContent = output;
//     frame++;

//     if (frame >= totalFrames) {
//       clearInterval(interval);
//       element.textContent = newText;
//     }
//   }, 1000 / 60);
// }

// gsap.utils.toArray(".About-me").forEach(text => {
//   const originalText = text.textContent;

//   ScrollTrigger.create({
//     trigger: text,
//     //start: "top 80%",
//     //markers: true,
//     onEnter: () => scrambleText(text, originalText),
//     once: true
//   });
// });