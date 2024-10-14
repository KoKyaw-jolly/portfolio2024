addEventListener("load", (event) => {
  initialize();
  if(!localStorage.getItem("kkkTheme")){
    localStorage.setItem("kkkTheme", "dark");
    cssColorVariableChange(themesColor.dark);
  }else {
    const theme = localStorage.getItem("kkkTheme");
    if (theme === "dark") {
      cssColorVariableChange(themesColor.dark);
      localStorage.setItem("kkkTheme", "dark");
      document.getElementById("themeIcon").innerHTML = '<i class="fi fi-rr-brightness"></i>';
      // profileVideoSrc('dark');
    } else {
      cssColorVariableChange(themesColor.light);
      localStorage.setItem("kkkTheme", "light");
      document.getElementById("themeIcon").innerHTML = '<i class="fi fi-rr-moon-stars"></i>';
      // profileVideoSrc('light');
    }
  }
});

function initialize() {
  const servicesData = [
    {
      image: "services/web-developer.gif",
      title: "Front-end Web Development",
      description:
        "From sleek and fast-loading static websites to dynamic, interactive interfaces using technologies like Angular, we craft web solutions that captivate and engage your audience.",
    },
    {
      image: "services/graphic-designer.gif",
      title: "Figma Wireframes & Prototypes",
      description:
        "Bring your ideas to life with interactive and visually compelling prototype designs and wireframes in Figma, providing a clear and engaging blueprint of your project before development begins.",
    },
    {
      image: "services/responsive-design.gif",
      title: "Prototype to HTML with Responsive Design",
      description:
        "Seamlessly transform your design prototypes into pixel-perfect, responsive HTML code that looks stunning on any device, ensuring a smooth and engaging user experience across all platforms.",
    },
    {
      image: "services/css.gif",
      title: "CSS/SCSS Refactoring & Enhancement",
      description:
        "Optimize your existing stylesheets with modern best practices, including design tokens and variables, to ensure a consistent, scalable, and maintainable codebase that enhances your design system's efficiency and flexibility.",
    },
    {
      image: "services/ux-design.gif",
      title: "UI/UX Design Consulting",
      description:
        "Elevate your project with expert UI/UX design consulting, ensuring your web presence not only meets but exceeds user expectations, providing a memorable and delightful experience.",
    },
  ];
  const cardWrapper = document.getElementById("servicesWrapper");
  let servicesCardUI = "";
  servicesData.forEach(function (service, i) {
    const card = `<div class="card-wrapper"><img src="images/${servicesData[i].image}" alt="">
          <h5>${servicesData[i].title}</h5><p>${servicesData[i].description}</p></div>`;
    servicesCardUI += card;
  });
  cardWrapper.innerHTML = servicesCardUI;
}
// color variable
const themesColor = {
  light: [
    {name:'--fore-color',color: "#24292d"},
    {name:'--back-color',color: "#fff"}
  ],
  dark: [
    {name:'--fore-color',color: "#fff"},
    {name:'--back-color',color: "#24292d"}
  ]
};
//toggleTheme
function toggleTheme() {
  const theme = localStorage.getItem("kkkTheme");
  if (theme === "dark") {
    cssColorVariableChange(themesColor.light);
    localStorage.setItem("kkkTheme", "light");
    document.getElementById("themeIcon").innerHTML = '<i class="fi fi-rr-moon-stars"></i>';
    // profileVideoSrc('light');
  } else {
    cssColorVariableChange(themesColor.dark);
    localStorage.setItem("kkkTheme", "dark");
    document.getElementById("themeIcon").innerHTML = '<i class="fi fi-rr-brightness"></i>';
    // profileVideoSrc('dark');
  }
}

function profileVideoSrc(mode) {
  if(mode=='dark'){
    document.getElementById("profileVideo").src = "videos/profile-video-dark.mp4";
  }else{
    document.getElementById("profileVideo").src = "videos/profile-video-light.mp4";
  }
}

function cssColorVariableChange(themeColor) {
  for (let color of themeColor) {
    document.documentElement.style.setProperty(color.name, color.color);
  }
}
// text Animation

// function([string1, string2],target id,[color1,color2])
consoleText(["Web Developer", "Front-End Developer", "UI/UX Designer"], "text");

function consoleText(words, id) {
  var visible = true;
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
}
