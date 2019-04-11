TweenMax.from(".header", 1.5, {opacity:0, scale:0, ease:Bounce.easeOut});

// Makes my articles flip over at opening 
TweenMax.staggerFrom(".article", 0.5, {rotation:180, scale:2, delay:0.25}, 0.3) 


// Setting up my toggleMenu function to toggle the "menu--open" class on my menu reference. 
const toggleMenu = () => { 
  menu.classList.toggle('menu--open'); 
}

// Reference to the ".menu" class
const menu = document.querySelector('.menu'); 
 // console.log(menu); 

// Reference to the ".menu-button" class
 const menuButton = document.querySelector('.menu-button');
// console.log(menuButton); 

// Adding event listener to menuButton to callback toggleMenu on click 
menuButton.addEventListener('click', toggleMenu);


