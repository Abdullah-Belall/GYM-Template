let navbar = document.querySelector(".sec1 nav");
let introImg = document.querySelector(".sec1 .landing img");
let introTexts = document.querySelector(".sec1 .intro");

window.onload = () => {
  navbar.style.top = "0";
  introImg.style.opacity = "1";
  introTexts.style.opacity = "1";
};

let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let sec2Dev1 = document.querySelector(".sec2 .one");
let sec2Dev2 = document.querySelector(".sec2 .two");
let sec2Dev3 = document.querySelector(".sec2 .three");
let sec2Dev4 = document.querySelector(".sec2 .four");
let sec3 = document.querySelector(".sec3");
let sec3Con = document.querySelector(".sec3 .con");
let sec3Img = document.querySelector(".sec3 img");
let sec4 = document.querySelector(".sec4");
let sec4Dad = document.querySelector(".sec4 .dad");
let sec5 = document.querySelector(".sec5");
let sec4og = document.querySelector(".sec5 .og");
let sec6 = document.querySelector(".sec6");

let navLinks = document.querySelectorAll(".sec1 nav a");
let home = document.querySelector(".sec1 nav .aaa");
let program = document.querySelector(".sec1 nav .bbb");
let choose = document.querySelector(".sec1 nav .ccc");
let pricing = document.querySelector(".sec1 nav .ddd");
let gallery = document.querySelector(".sec1 nav .eee");
let contact = document.querySelector(".sec1 nav .fff");

let sec6one = document.querySelector(".uno");
let sec6two = document.querySelector(".due");
let sec6three = document.querySelector(".tre");
let sec6four = document.querySelector(".quat");
let sec6five = document.querySelector(".chinq");

let up = document.querySelector(".gotop");

window.onscroll = () => {
  if (window.scrollY >= "200") {
    navbar.style.backgroundColor = "rgb(19 23 24 / 78%)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
  if (window.scrollY >= sec1.offsetTop) {
    navLinks.forEach((z) => {
      z.classList.remove("in");
    });
    home.classList.add("in");
  }
  if (window.scrollY >= sec2.offsetTop - 500) {
    setTimeout(() => {
      sec2Dev1.style.cssText = "top: 0;opacity: 1;";
    }, 50);
    setTimeout(() => {
      sec2Dev2.style.cssText = "top: 0;opacity: 1;";
    }, 120);
    setTimeout(() => {
      sec2Dev3.style.cssText = "top: 0;opacity: 1;";
    }, 170);
    setTimeout(() => {
      sec2Dev4.style.cssText = "top: 0;opacity: 1;";
    }, 220);
    navLinks.forEach((z) => {
      z.classList.remove("in");
    });
    program.classList.add("in");
  }
  if (window.scrollY >= sec3.offsetTop - 600) {
    sec3Con.style.cssText = "right: 0;opacity: 1;";
    sec3Img.style.cssText = "opacity: 1;";
    navLinks.forEach((z) => {
      z.classList.remove("in");
    });
    choose.classList.add("in");
  }
  if (window.scrollY >= sec4.offsetTop - 500) {
    sec4Dad.style.cssText = "top: 0;opacity: 1;";
    navLinks.forEach((z) => {
      z.classList.remove("in");
    });
    pricing.classList.add("in");
  }
  if (window.scrollY >= sec5.offsetTop - 600) {
    sec4og.style.cssText = "opacity: 1;";
    navLinks.forEach((z) => {
      z.classList.remove("in");
    });
    gallery.classList.add("in");
  }
  if (window.scrollY >= sec6.offsetTop - 700) {
    setTimeout(() => {
      sec6one.style.cssText = "top: 0;opacity: 1;";
    }, 50);
    setTimeout(() => {
      sec6two.style.cssText = "top: 0;opacity: 1;";
    }, 120);
    setTimeout(() => {
      sec6three.style.cssText = "top: 0;opacity: 1;";
    }, 170);
    setTimeout(() => {
      sec6four.style.cssText = "top: 0;opacity: 1;";
    }, 220);
    setTimeout(() => {
      sec6five.style.cssText = "top: 0;opacity: 1;";
    }, 270);
    navLinks.forEach((z) => {
      z.classList.remove("in");
    });
    contact.classList.add("in");
  }
  if (window.scrollY >= 700) {
    up.style.right = "30px";
  } else if (window.scrollY <= 700) {
    up.style.right = "-40px";
  }
};

home.onclick = () => {
  window.scrollTo({
    top: sec1.offsetTop,
  });
};

program.onclick = () => {
  window.scrollTo({
    top: `${sec2.offsetTop - 100}`,
  });
};

choose.onclick = () => {
  window.scrollTo({
    top: `${sec3.offsetTop - 240}`,
  });
};

pricing.onclick = () => {
  window.scrollTo({
    top: `${sec4.offsetTop - 100}`,
  });
};

gallery.onclick = () => {
  window.scrollTo({
    top: `${sec5.offsetTop - 200}`,
  });
};

contact.onclick = () => {
  window.scrollTo({
    top: `${sec6.offsetTop}`,
  });
};

up.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let links = document.querySelectorAll(".sec6 .dad div");

links.forEach((link) => {
  link.onclick = () => {
    window.open(link.dataset.link, "_blank");
  };
});
