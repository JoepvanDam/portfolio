// Scrolling for PC (mousewheel)
let left = 0;
addEventListener('wheel', (event) => {
    if (event.deltaY > 0) { if (left > -300) { left = left - 20; } } // Scrollwheel down
    else { if (left < 0) { left = left + 20; } } // Scrollwheel up
    updateScroll();
})

// Scrolling for PC (arrows)
onkeydown = () => { checkKey() };
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') { if (left < 0) { left = left + 100; } } // Arrow up
    else if (e.keyCode == '40') { if (left > -300) { left = left - 100; } } // Arrow down
    else if (e.keyCode == '37') { if (left < 0) { left = left + 20; } } // Arrow left
    else if (e.keyCode == '39') { if (left > -300) { left = left - 20; } } // Arrow right
    updateScroll();
}

// Scrolling for mobile (touch)
let touchStartX = 0; let touchEndX = 0;
function checkDirection() {
    let touchDistance = touchEndX - touchStartX;
    if (touchDistance > 100 || touchDistance < -100) {
        if (touchEndX < touchStartX) { if (left > -300) { left = left - 100; } }; // Swipe left
        if (touchEndX > touchStartX) { if (left < 0) { left = left + 100; } }; // Swipe right
    }
    updateScroll();
}
document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; })
document.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; checkDirection(); })

// Scrolling using the nav
function doScrolling(part) {
    if (part == 1) { left = 0; } else if (part == 2) { left = -100; } else if (part == 3) { left = -200; } else if (part == 4) { left = -300; } 
    updateScroll();
}

// Updating the page after scroll amount has been calculated
function updateScroll() {
    if (left > 0) { left = 0; }; if (left < -300) { left = -300; };
    document.getElementById("fullPage").style.left = left + "vw";
}