addEventListener("load", (event) => {
  // initialize();
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
  } else {
    cssColorVariableChange(themesColor.dark);
    localStorage.setItem("kkkTheme", "dark");
    document.getElementById("themeIcon").innerHTML = '<i class="fi fi-rr-brightness"></i>';
  }
}

// function profileVideoSrc(mode) {
//   if(mode=='dark'){
//     document.getElementById("profileVideo").src = "videos/profile-video-dark.mp4";
//   }else{
//     document.getElementById("profileVideo").src = "videos/profile-video-light.mp4";
//   }
// }

function cssColorVariableChange(themeColor) {
  for (let color of themeColor) {
    document.documentElement.style.setProperty(color.name, color.color);
  }
}
// text Animation

// function([string1, string2],target id,[color1,color2])

// //modal
// // Get modal, button, and close elements
// const modal = document.getElementById('myModal');
// const openBtn = document.getElementById('openModalBtn');
// const closeBtn = document.querySelector('.close-btn');

// // Open the modal when the button is clicked
// openBtn.onclick = function() {
//   modal.style.display = 'block';
// }

// // Close the modal when the close button (X) is clicked
// closeBtn.onclick = function() {
//   modal.style.display = 'none';
// }

// // Close the modal if user clicks outside the modal content
// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// }