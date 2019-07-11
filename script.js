let slidesIndex = 2;

function changeSlidesIndex(num) {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  console.log(slides.length);

  if (slidesIndex > slides.length) {
    slidesIndex = 1;
  }
  if (slidesIndex < 1) {
    slidesIndex = slides.length;
  }
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className = "dot";
  }
  slides[slidesIndex - 1].style.display = "flex";
  dots[slidesIndex - 1].className = "dot active-dot";
  console.log(slidesIndex, slides.length);
}
changeSlidesIndex(slidesIndex);

function changeSlide(num) {
  slidesIndex += num;
  changeSlidesIndex(slidesIndex);
}
function switchSlide(n) {
  slidesIndex = n;
  changeSlidesIndex(slidesIndex);
}

const nav = document.querySelector(".sm-navul");
const navButton = document.querySelector(".menu-icon");
const navbar1 = document.querySelector(".bar-1");
const navbar2 = document.querySelector(".bar-2");
const navbar3 = document.querySelector(".bar-3");
const backdrop = document.querySelector(".backdrop");

let navOpened = false;

let openMenu = () => {
  if (!navOpened) {
    nav.className = "sm-navul sm-navul-opened";
    navbar1.className = "bar bar-open-1";
    navbar2.className = "bar bar-open-2";
    navbar3.className = "bar bar-open-3";
    backdrop.className = "backdrop backdrop-active";
    navOpened = true;
  } else {
    nav.className = "sm-navul";
    navbar1.className = "bar bar-close-1";
    navbar2.className = "bar bar-close-2";
    navbar3.className = "bar bar-close-3";
    backdrop.className = "backdrop";
    navOpened = false;
  }
};

navButton.addEventListener("click", openMenu);
backdrop.addEventListener("click", openMenu);

let activities = document.querySelectorAll(".activity");
console.log(activities[0].children[0].className);

function noneActiveActivity(activity) {
  // let noneActiveClass = activity.children[0].className + "-active";
  activity.children[1].className = "";
  activity.children[3].className = "";
  activity.children[0].className = activity.children[0].className.replace(
    "-active",
    ""
  );
}
function checkActiveOfActivity(string) {
  if (string.indexOf("-active") > -1) {
    return true;
  } else {
    return false;
  }
}
activities.forEach(function(el) {
  el.addEventListener("click", function() {
    activities.forEach(function(activ) {
      noneActiveActivity(activ);
    });

    let activeClass = "";
    let active = checkActiveOfActivity(el.children[0].className);
    if (active) {
      activeClass = el.children[0].className;
      console.log("yes, active");
    } else {
      activeClass = activeClass = el.children[0].className + "-active";
      console.log("no");
    }

    el.children[1].className = "active-activity";
    el.children[3].className = "active-span-activity";

    el.children[0].className = `${activeClass}`;
  });
});

let projMenu = document.querySelectorAll(".proj-menu li");
let projTypes = document.querySelectorAll(".proj-type");
console.log(projMenu);
function switchProj(num) {
  projMenu.forEach(el => {
    el.className = "";
  });
  projTypes.forEach(el => {
    el.style.display = "none";
  });
  projMenu[num].className = "active-type";
  projTypes[num].style.display = "flex";
}

switchProj(0);

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}
