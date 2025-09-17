let menu = document.getElementById('menu');
let nav = document.getElementById('nav');


nav.style.right = '-500px';
menu.onclick = () => {
    if (nav.style.right === "-500px") {
      nav.style.right = '0';
    } else {
      nav.style.right = '-500px';
    }
}