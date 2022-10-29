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
let touchstartX = 0; let touchendX = 0;
function checkDirection() {
    if (touchendX < touchstartX) { if (left > -300) { left = left - 100; } }; // Swipe left
    if (touchendX > touchstartX) { if (left < 0) { left = left + 100; } }; // Swipe right
    updateScroll();
}
document.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; })
document.addEventListener('touchend', e => { touchendX = e.changedTouches[0].screenX; checkDirection(); })

// Scrolling using the nav
function doScrolling(part) {
    if (part == 1) { left = 0; }
    else if (part == 2) { left = -100; }
    else if (part == 3) { left = -200; }
    else if (part == 4) { left = -300; }
    updateScroll();
}

// Updating the page after scroll amount has been calculated
function updateScroll() {
    if (left > 0) { left = 0; }; if (left < -300) { left = -300; };
    document.getElementById("fullPage").style.left = left + "vw";
}


// Onload events
window.onload = (event) => { const date = new Date(); const time = date.getHours(); if (time > 18 || time < 8) { darkmodeSwitch(); } };


let darkmode = false;
let darkmodeRunning = false;
function darkmodeSwitch() {
    if (darkmodeRunning == false) {
        darkmodeRunning = true;
        if (darkmode == true) {
            // Full Page
            document.getElementById("fullPage").style.backgroundColor = "#9BBDD1";
            document.getElementById("floor").style.backgroundColor = "#5A5A5A";
            document.getElementById("darkmodeCheckbox").disabled = true;
            document.getElementById("darkmodeCheckbox").checked = false;
            document.getElementById("darkmodeSwitch").style.filter = "brightness(0.5)";
            document.getElementById("settingImg").style.filter = "brightness(0.5)";
            document.getElementById("infoWrapper").style.backgroundColor = "rgb(125, 125, 125)";
            document.getElementById("settingsToolTip").style.backgroundColor = "rgb(125, 125, 125)";
            document.getElementById("settingsToolTipTriangle").style.borderColor = "transparent transparent transparent rgb(125, 125, 125)";

            // Moon leaves, sun enters
            document.getElementById("darkmodeImgMoon").style.left = "100vw";
            document.getElementById("darkmodeImgSun").style.opacity = "1";
            setTimeout(() => { document.getElementById("darkmodeImgMoon").style.top = "100vh"; }, 250);
            setTimeout(() => { document.getElementById("darkmodeImgSun").style.top = "1vw"; }, 500);
            setTimeout(() => { document.getElementById("darkmodeImgSun").style.left = "1vw"; }, 500);
            setTimeout(() => { document.getElementById("darkmodeImgMoon").style.left = "1vw"; }, 800);
            setTimeout(() => { document.getElementById("darkmodeImgMoon").style.opacity = "0"; }, 800);

            // Nav lights
            setTimeout(() => { document.getElementById("lampPaint").setAttribute("y2", "28"); }, 250);

            // Nav 1
            document.getElementById("nav1Rectangle1").setAttribute("fill", "#656565");
            document.getElementById("nav1Rectangle2").setAttribute("fill", "#959595");
            document.getElementById("nav1Rectangle3").setAttribute("fill", "#959595");
            document.getElementById("nav1Rectangle4").setAttribute("fill", "#959595");
            document.getElementById("nav1Rectangle5").setAttribute("fill", "#959595");
            document.getElementById("nav1Triangle1").setAttribute("fill", "#656565");
            document.getElementById("nav1Triangle2").setAttribute("fill", "#959595");
            document.getElementById("nav1Triangle3").setAttribute("fill", "#959595");
            document.getElementById("nav1Triangle4").setAttribute("fill", "#959595");
            document.getElementById("nav1Triangle5").setAttribute("fill", "#959595");
            document.getElementById("nav1Text1").setAttribute("fill", "#000000");
            document.getElementById("nav1Text2").setAttribute("fill", "#000000");
            document.getElementById("nav1Text3").setAttribute("fill", "#000000");
            document.getElementById("nav1Text4").setAttribute("fill", "#000000");
            setTimeout(() => { document.getElementById("nav1Lamp").setAttribute("fill", "#8D8D8D"); }, 200);


            // Nav 2
            document.getElementById("nav2Rectangle1").setAttribute("fill", "#656565");
            document.getElementById("nav2Rectangle2").setAttribute("fill", "#959595");
            document.getElementById("nav2Rectangle3").setAttribute("fill", "#959595");
            document.getElementById("nav2Rectangle4").setAttribute("fill", "#959595");
            document.getElementById("nav2Rectangle5").setAttribute("fill", "#959595");
            document.getElementById("nav2Triangle1").setAttribute("fill", "#656565");
            document.getElementById("nav2Triangle2").setAttribute("fill", "#959595");
            document.getElementById("nav2Triangle3").setAttribute("fill", "#959595");
            document.getElementById("nav2Triangle4").setAttribute("fill", "#959595");
            document.getElementById("nav2Triangle5").setAttribute("fill", "#959595");
            document.getElementById("nav2Text1").setAttribute("fill", "#000000");
            document.getElementById("nav2Text2").setAttribute("fill", "#000000");
            document.getElementById("nav2Text3").setAttribute("fill", "#000000");
            document.getElementById("nav2Text4").setAttribute("fill", "#000000");
            setTimeout(() => { document.getElementById("nav2Lamp").setAttribute("fill", "#8D8D8D"); }, 200);

            // Nav 3
            document.getElementById("nav3Rectangle1").setAttribute("fill", "#656565");
            document.getElementById("nav3Rectangle2").setAttribute("fill", "#959595");
            document.getElementById("nav3Rectangle3").setAttribute("fill", "#959595");
            document.getElementById("nav3Rectangle4").setAttribute("fill", "#959595");
            document.getElementById("nav3Rectangle5").setAttribute("fill", "#959595");
            document.getElementById("nav3Triangle1").setAttribute("fill", "#656565");
            document.getElementById("nav3Triangle2").setAttribute("fill", "#959595");
            document.getElementById("nav3Triangle3").setAttribute("fill", "#959595");
            document.getElementById("nav3Triangle4").setAttribute("fill", "#959595");
            document.getElementById("nav3Triangle5").setAttribute("fill", "#959595");
            document.getElementById("nav3Text1").setAttribute("fill", "#000000");
            document.getElementById("nav3Text2").setAttribute("fill", "#000000");
            document.getElementById("nav3Text3").setAttribute("fill", "#000000");
            document.getElementById("nav3Text4").setAttribute("fill", "#000000");
            setTimeout(() => { document.getElementById("nav3Lamp").setAttribute("fill", "#8D8D8D"); }, 200);

            // Nav 4
            document.getElementById("nav4Rectangle1").setAttribute("fill", "#656565");
            document.getElementById("nav4Rectangle2").setAttribute("fill", "#959595");
            document.getElementById("nav4Rectangle3").setAttribute("fill", "#959595");
            document.getElementById("nav4Rectangle4").setAttribute("fill", "#959595");
            document.getElementById("nav4Rectangle5").setAttribute("fill", "#959595");
            document.getElementById("nav4Triangle1").setAttribute("fill", "#656565");
            document.getElementById("nav4Triangle2").setAttribute("fill", "#959595");
            document.getElementById("nav4Triangle3").setAttribute("fill", "#959595");
            document.getElementById("nav4Triangle4").setAttribute("fill", "#959595");
            document.getElementById("nav4Triangle5").setAttribute("fill", "#959595");
            document.getElementById("nav4Text1").setAttribute("fill", "#000000");
            document.getElementById("nav4Text2").setAttribute("fill", "#000000");
            document.getElementById("nav4Text3").setAttribute("fill", "#000000");
            document.getElementById("nav4Text4").setAttribute("fill", "#000000");
            setTimeout(() => { document.getElementById("nav4Lamp").setAttribute("fill", "#8D8D8D"); }, 200);

            // Home | House
            document.getElementById("homeRectangle").setAttribute("fill", "#7C7C7C");
            document.getElementById("chimneyRectangle").setAttribute("fill", "#7C7C7C");
            document.getElementById("roofTriangle").setAttribute("fill", "#616161");
            document.getElementById("doorRectangle").setAttribute("fill", "#ABABAB");
            document.getElementById("doorKnob").setAttribute("fill", "#7C7C7C");
            setTimeout(() => { document.getElementById("homeWindow").setAttribute("fill", "#8C9FB6"); }, 500);
            setTimeout(() => { chimneySmoke(1); }, 1000);

            // Projects | Office
            document.getElementById("officeRectangle").setAttribute("fill", "#838383");
            document.getElementById("frontBoardRectangle").setAttribute("fill", "#A0A0A0");
            document.getElementById("frontBoardText").setAttribute("fill", "#000000");
            document.getElementById("window1").setAttribute("fill", "#8C9FB6");
            document.getElementById("window2").setAttribute("fill", "#8C9FB6");
            document.getElementById("window3").setAttribute("fill", "#8C9FB6");
            document.getElementById("window4").setAttribute("fill", "#8C9FB6");
            document.getElementById("window8").setAttribute("fill", "#8C9FB6");
            document.getElementById("window9").setAttribute("fill", "#8C9FB6");
            setTimeout(() => { document.getElementById("behindDoor").setAttribute("fill", "#ACD2FF"); }, 400);
            setTimeout(() => { document.getElementById("window7").setAttribute("fill", "#8C9FB6"); }, 500);
            setTimeout(() => { document.getElementById("window6").setAttribute("fill", "#8C9FB6"); }, 700);
            setTimeout(() => { document.getElementById("window5").setAttribute("fill", "#8C9FB6"); }, 1000);

            // About | ATC Tower, Control & Planes
            document.getElementById("atcTower").style.filter = "saturate(0)";
            document.getElementById("towerControl").style.backgroundColor = "rgb(200, 200, 200)";
            document.getElementById("towerControl").style.color = "black";
            document.getElementById("infoBox1").style.backgroundColor = "rgb(170, 170, 170)";
            document.getElementById("infoBox1").style.color = "black";
            document.getElementById("infoBox2").style.backgroundColor = "rgb(170, 170, 170)";
            document.getElementById("infoBox2").style.color = "black";
            document.getElementById("planeMid1").setAttribute("fill", "white");
            document.getElementById("planeMid2").setAttribute("fill", "white");
            document.getElementById("planeMid3").setAttribute("fill", "white");
            document.getElementById("planeMid4").setAttribute("fill", "white");
            document.getElementById("planeMid5").setAttribute("fill", "white");
            document.getElementById("planeMid6").setAttribute("fill", "white");
            document.getElementById("planeMid7").setAttribute("fill", "white");
            document.getElementById("planeMid8").setAttribute("fill", "white");
            document.getElementById("plane8Text").setAttribute("fill", "black");

            // Contact | Billboard
            document.getElementById("billboardSupportLeft").setAttribute("fill", "#717171");
            document.getElementById("billboardSupportLeftStand").setAttribute("fill", "#4F4F4F");
            document.getElementById("billboardSupportRight").setAttribute("fill", "#717171");
            document.getElementById("billboardSupportRightStand").setAttribute("fill", "#4F4F4F");
            document.getElementById("aboveBillboard").setAttribute("fill", "#ABABAB");
            document.getElementById("billboardRectangle").setAttribute("fill", "#C2C2C2");
            document.getElementById("billboardContactForm1").setAttribute("fill", "#9F9F9F");
            document.getElementById("billboardContactForm2").setAttribute("fill", "#9F9F9F");
            document.getElementById("billboardContactForm3").setAttribute("fill", "#9F9F9F");
            setTimeout(() => {
                document.getElementById("billboardLight1").setAttribute("fill", "#989898");
                document.getElementById("billboardLight2").setAttribute("fill", "#989898");
                document.getElementById("billboardLight3").setAttribute("fill", "#989898");
                document.getElementById("billboardLight4").setAttribute("fill", "#989898");
                document.getElementById("billboardLight5").setAttribute("fill", "#989898");
            }, 700);

            // Contact | Form
            document.getElementById("contactText1").setAttribute("fill", "#000000");
            document.getElementById("contactText2").setAttribute("fill", "#000000");
            document.getElementById("contactText3").setAttribute("fill", "#000000");
            document.getElementById("contactText4").setAttribute("fill", "#000000");
            document.getElementById("contactRectangle1").setAttribute("fill", "#9F9F9F");
            document.getElementById("contactRectangle2").setAttribute("fill", "#F0F0F0");
            document.getElementById("contactRectangle3").setAttribute("fill", "#D9D9D9");
            document.getElementById("contactRectangle4").setAttribute("fill", "#D9D9D9");
            document.getElementById("contactRectangle5").setAttribute("fill", "#D9D9D9");
            document.getElementById("contactRectangle6").setAttribute("fill", "#585858");
            document.getElementById("contactPart1").setAttribute("fill", "#CACACA");
            document.getElementById("contactPart2").setAttribute("fill", "#9F9F9F");

            setTimeout(() => { document.getElementById("darkmodeCheckbox").disabled = false; document.getElementById("darkmodeSwitch").style.filter = ""; }, 2800);
            setTimeout(() => { darkmode = false; darkmodeRunning = false; }, 2800);
        }

        else if (darkmode == false) {
            // Full Page
            document.getElementById("fullPage").style.backgroundColor = "#1A1835";
            document.getElementById("floor").style.backgroundColor = "#161616";
            document.getElementById("darkmodeCheckbox").disabled = true;
            document.getElementById("darkmodeCheckbox").checked = true;
            document.getElementById("darkmodeSwitch").style.filter = "brightness(0.5)";
            document.getElementById("settingImg").style.filter = "brightness(0.3)";
            document.getElementById("infoWrapper").style.backgroundColor = "rgb(65, 65, 65)";
            document.getElementById("settingsToolTip").style.backgroundColor = "rgb(70, 70, 70)";
            document.getElementById("settingsToolTipTriangle").style.borderColor = "transparent transparent transparent rgb(70, 70, 70)";

            // Sun leaves, moon enters
            document.getElementById("darkmodeImgSun").style.left = "100vw";
            document.getElementById("darkmodeImgMoon").style.opacity = "1";
            setTimeout(() => { document.getElementById("darkmodeImgSun").style.top = "100vh"; }, 250);
            setTimeout(() => { document.getElementById("darkmodeImgMoon").style.top = "1vw"; }, 500);
            setTimeout(() => { document.getElementById("darkmodeImgMoon").style.left = "1vw"; }, 500);
            setTimeout(() => { document.getElementById("darkmodeImgSun").style.left = "-10vw"; }, 800);
            setTimeout(() => { document.getElementById("darkmodeImgSun").style.opacity = "0"; }, 800);

            // Nav lights
            setTimeout(() => {
                let frame = 28;
                const id = setInterval(() => {
                    if (frame < 680) { frame = frame + 30; document.getElementById("lampPaint").setAttribute("y2", frame); }
                    else { clearInterval(id); }
                }, 1);
            }, 1200);

            // Nav 1
            document.getElementById("nav1Rectangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav1Rectangle2").setAttribute("fill", "#333333");
            document.getElementById("nav1Rectangle3").setAttribute("fill", "#333333");
            document.getElementById("nav1Rectangle4").setAttribute("fill", "#333333");
            document.getElementById("nav1Rectangle5").setAttribute("fill", "#333333");
            document.getElementById("nav1Triangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav1Triangle2").setAttribute("fill", "#333333");
            document.getElementById("nav1Triangle3").setAttribute("fill", "#333333");
            document.getElementById("nav1Triangle4").setAttribute("fill", "#333333");
            document.getElementById("nav1Triangle5").setAttribute("fill", "#333333");
            document.getElementById("nav1Text1").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav1Text2").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav1Text3").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav1Text4").setAttribute("fill", "#FFFFFF");
            setTimeout(() => { document.getElementById("nav1Lamp").setAttribute("fill", "#E4C590"); }, 1100);

            // Nav 2
            document.getElementById("nav2Rectangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav2Rectangle2").setAttribute("fill", "#333333");
            document.getElementById("nav2Rectangle3").setAttribute("fill", "#333333");
            document.getElementById("nav2Rectangle4").setAttribute("fill", "#333333");
            document.getElementById("nav2Rectangle5").setAttribute("fill", "#333333");
            document.getElementById("nav2Triangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav2Triangle2").setAttribute("fill", "#333333");
            document.getElementById("nav2Triangle3").setAttribute("fill", "#333333");
            document.getElementById("nav2Triangle4").setAttribute("fill", "#333333");
            document.getElementById("nav2Triangle5").setAttribute("fill", "#333333");
            document.getElementById("nav2Text1").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav2Text2").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav2Text3").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav2Text4").setAttribute("fill", "#FFFFFF");
            setTimeout(() => { document.getElementById("nav2Lamp").setAttribute("fill", "#E4C590"); }, 1100);

            // Nav 3
            document.getElementById("nav3Rectangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav3Rectangle2").setAttribute("fill", "#333333");
            document.getElementById("nav3Rectangle3").setAttribute("fill", "#333333");
            document.getElementById("nav3Rectangle4").setAttribute("fill", "#333333");
            document.getElementById("nav3Rectangle5").setAttribute("fill", "#333333");
            document.getElementById("nav3Triangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav3Triangle2").setAttribute("fill", "#333333");
            document.getElementById("nav3Triangle3").setAttribute("fill", "#333333");
            document.getElementById("nav3Triangle4").setAttribute("fill", "#333333");
            document.getElementById("nav3Triangle5").setAttribute("fill", "#333333");
            document.getElementById("nav3Text1").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav3Text2").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav3Text3").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav3Text4").setAttribute("fill", "#FFFFFF");
            setTimeout(() => { document.getElementById("nav3Lamp").setAttribute("fill", "#E4C590"); }, 1100);

            // Nav 4
            document.getElementById("nav4Rectangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav4Rectangle2").setAttribute("fill", "#333333");
            document.getElementById("nav4Rectangle3").setAttribute("fill", "#333333");
            document.getElementById("nav4Rectangle4").setAttribute("fill", "#333333");
            document.getElementById("nav4Rectangle5").setAttribute("fill", "#333333");
            document.getElementById("nav4Triangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav4Triangle2").setAttribute("fill", "#333333");
            document.getElementById("nav4Triangle3").setAttribute("fill", "#333333");
            document.getElementById("nav4Triangle4").setAttribute("fill", "#333333");
            document.getElementById("nav4Triangle5").setAttribute("fill", "#333333");
            document.getElementById("nav4Text1").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav4Text2").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav4Text3").setAttribute("fill", "#FFFFFF");
            document.getElementById("nav4Text4").setAttribute("fill", "#FFFFFF");
            setTimeout(() => { document.getElementById("nav4Lamp").setAttribute("fill", "#E4C590"); }, 1100);

            // Home | House
            document.getElementById("homeRectangle").setAttribute("fill", "#4D4D4D");
            document.getElementById("chimneyRectangle").setAttribute("fill", "#4D4D4D");
            document.getElementById("roofTriangle").setAttribute("fill", "#272727");
            document.getElementById("doorRectangle").setAttribute("fill", "#727272");
            document.getElementById("doorKnob").setAttribute("fill", "#4D4D4D");
            document.getElementById("homeWindow").setAttribute("fill", "#606060");
            setTimeout(() => { document.getElementById("homeWindow").setAttribute("fill", "#E4C590"); }, 1300);
            setTimeout(() => { chimneySmoke(0); }, 1700);

            // Projects | Office
            document.getElementById("officeRectangle").setAttribute("fill", "#4D4D4D");
            document.getElementById("frontBoardRectangle").setAttribute("fill", "#4C505F");
            document.getElementById("frontBoardText").setAttribute("fill", "#FFFFFF");
            document.getElementById("window1").setAttribute("fill", "#8C8C8C");
            document.getElementById("window2").setAttribute("fill", "#8C8C8C");
            document.getElementById("window3").setAttribute("fill", "#8C8C8C");
            document.getElementById("window4").setAttribute("fill", "#8C8C8C");
            document.getElementById("window5").setAttribute("fill", "#8C8C8C");
            document.getElementById("window6").setAttribute("fill", "#8C8C8C");
            document.getElementById("window7").setAttribute("fill", "#8C8C8C");
            document.getElementById("window8").setAttribute("fill", "#8C8C8C");
            document.getElementById("window9").setAttribute("fill", "#8C8C8C");
            document.getElementById("behindDoor").setAttribute("fill", "#8C8C8C");
            document.getElementById("doorLeft").setAttribute("fill", "#6C6C6C");
            document.getElementById("doorRight").setAttribute("fill", "#6C6C6C");
            setTimeout(() => { document.getElementById("behindDoor").setAttribute("fill", "#E4C590"); }, 1100);
            setTimeout(() => { document.getElementById("window5").setAttribute("fill", "#E4C590"); }, 1500);
            setTimeout(() => { document.getElementById("window7").setAttribute("fill", "#E4C590"); }, 2400);
            setTimeout(() => { document.getElementById("window6").setAttribute("fill", "#E4C590"); }, 2800);

            // About | ATC Tower & Planes
            document.getElementById("atcTower").style.filter = "saturate(0) brightness(0.5)";
            document.getElementById("towerControl").style.backgroundColor = "rgb(50, 50, 50)";
            document.getElementById("towerControl").style.color = "white";
            document.getElementById("infoBox1").style.backgroundColor = "rgb(70, 70, 70)";
            document.getElementById("infoBox1").style.color = "white";
            document.getElementById("infoBox2").style.backgroundColor = "rgb(70, 70, 70)";
            document.getElementById("infoBox2").style.color = "white";
            document.getElementById("planeMid1").setAttribute("fill", "black");
            document.getElementById("planeMid2").setAttribute("fill", "black");
            document.getElementById("planeMid3").setAttribute("fill", "black");
            document.getElementById("planeMid4").setAttribute("fill", "black");
            document.getElementById("planeMid5").setAttribute("fill", "black");
            document.getElementById("planeMid6").setAttribute("fill", "black");
            document.getElementById("planeMid7").setAttribute("fill", "black");
            document.getElementById("planeMid8").setAttribute("fill", "black");
            document.getElementById("plane8Text").setAttribute("fill", "white");

            // Contact | Billboard
            document.getElementById("billboardSupportLeft").setAttribute("fill", "#232323");
            document.getElementById("billboardSupportLeftStand").setAttribute("fill", "#0D0D0D");
            document.getElementById("billboardSupportRight").setAttribute("fill", "#232323");
            document.getElementById("billboardSupportRightStand").setAttribute("fill", "#0D0D0D");
            document.getElementById("aboveBillboard").setAttribute("fill", "#1A1A1A");
            document.getElementById("billboardRectangle").setAttribute("fill", "#404040");
            document.getElementById("billboardContactForm1").setAttribute("fill", "#565656");
            document.getElementById("billboardContactForm2").setAttribute("fill", "#565656");
            document.getElementById("billboardContactForm3").setAttribute("fill", "#565656");
            setTimeout(() => {
                document.getElementById("billboardLight1").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight2").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight3").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight4").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight5").setAttribute("fill", "#E4C590");
            }, 800);

            // Contact | Form
            document.getElementById("contactText1").setAttribute("fill", "#C2C2C2");
            document.getElementById("contactText2").setAttribute("fill", "#C2C2C2");
            document.getElementById("contactText3").setAttribute("fill", "#C2C2C2");
            document.getElementById("contactText4").setAttribute("fill", "#C2C2C2");
            document.getElementById("contactRectangle1").setAttribute("fill", "#292929");
            document.getElementById("contactRectangle2").setAttribute("fill", "#202020");
            document.getElementById("contactRectangle3").setAttribute("fill", "#565656");
            document.getElementById("contactRectangle4").setAttribute("fill", "#565656");
            document.getElementById("contactRectangle5").setAttribute("fill", "#565656");
            document.getElementById("contactRectangle6").setAttribute("fill", "#838383");
            document.getElementById("contactPart1").setAttribute("fill", "#414141");
            document.getElementById("contactPart2").setAttribute("fill", "#292929");

            setTimeout(() => { document.getElementById("darkmodeCheckbox").disabled = false; document.getElementById("darkmodeSwitch").style.filter = ""; }, 3400);
            setTimeout(() => { darkmode = true; darkmodeRunning = false; }, 3400);
        }
    }
}


// Language 0 is EN, 1 is NL.
let language = 0;
function languageSwitch(lang) {
    if (lang == 0) {
        // Settings
        document.getElementById("flagEN").classList.add("currentFlag");
        document.getElementById("flagNL").classList.remove("currentFlag");
        document.getElementById("settingsDarkmodeText1").innerHTML = "<img src='./images/sun.svg'><br>Darkmode<br>OFF";
        document.getElementById("settingsDarkmodeText2").innerHTML = "<img src='./images/moon.svg'><br>Darkmode<br>ON";
        document.getElementById("settingsAnimText1").innerHTML = "Animations<br>OFF";
        document.getElementById("settingsAnimText2").innerHTML = "Animations<br>ON";
        document.getElementById("settingsLastText1").innerHTML = "Test<br>OFF";
        document.getElementById("settingsLastText2").innerHTML = "Test<br>ON";
        document.getElementById("settingsToolTipText").innerHTML = "You can change the page language, switch from light to darkmode, and turn animations off, in the settings, here! (click on gear)";

        // House welcome
        document.getElementById("houseWelcomeText4").innerHTML = "c";
        document.getElementById("houseWelcomeText7").innerHTML = "e";
        document.getElementById("houseWelcomeText9").innerHTML = "I am Joep,";
        document.getElementById("houseWelcomeText10").innerHTML = "Programmer & IT Student";
        document.getElementById("houseWelcomeText1").setAttribute("x", "32.5%");
        document.getElementById("houseWelcomeText2").setAttribute("x", "39%");
        document.getElementById("houseWelcomeText3").setAttribute("x", "43%");
        document.getElementById("houseWelcomeText4").setAttribute("x", "45%");
        document.getElementById("houseWelcomeText5").setAttribute("x", "49%");
        document.getElementById("houseWelcomeText6").setAttribute("x", "53.5%");
        document.getElementById("houseWelcomeText7").setAttribute("x", "60%");
        document.getElementById("houseWelcomeText8").setAttribute("x", "64%");
        document.getElementById("houseWelcomeText9").setAttribute("x", "38%");
        document.getElementById("houseWelcomeText10").setAttribute("x", "20%");

        // Nav1
        document.getElementById("nav1Text1").innerHTML = "<tspan x='99.8635' y='111.088'>Home</tspan>";
        document.getElementById("nav1Text2").innerHTML = "<tspan x='224.91' y='160.227'>Projects</tspan>";
        document.getElementById("nav1Text3").innerHTML = "<tspan x='236.945' y='210.227'>About</tspan>";

        // Office
        document.getElementById("frontBoardText").innerHTML = "<tspan x='259' y='771'>Projects</tspan>";

        // Nav2
        document.getElementById("nav2Text1").innerHTML = "<tspan x='99.8635' y='111.088'>Home</tspan>";
        document.getElementById("nav2Text2").innerHTML = "<tspan x='86.4102' y='160.227'>Projects</tspan>";
        document.getElementById("nav2Text3").innerHTML = "<tspan x='234.945' y='210.227'>About</tspan>";

        // About basic info box 1
        document.getElementById("infoBox1").innerHTML = "<p class='infoBoxText'><span class='infoBoxTop'>My name is Joep,</span><br> I am currently 19 years old. I am a first-year student studying IT<br> <span class='infoBoxSmall'>(<a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study: Open-ICT - NL</a>)</span> at HU University of Applied Sciences Utrecht. I am very motivated and interested in IT, which I am currently learning a lot about. I like being creative, as you can probably see. I love all animals, but especially cats, I have one <span class='infoBoxClickable' id='cat' onclick='catPlane(0)'>cat</span> and one <span class='infoBoxClickable' id='dog' onclick='dogPlane(0)'>dog</span> at home.</p>";

        // About basic info box 2
        document.getElementById("infoBox2").innerHTML = "<p class='infoBoxTop infoBoxText'>My interests & hobbies</p><ul class='infoBoxList'><li class='infoBoxListItem'>Programming; I have been programming as a hobby for years, and am now starting to get into it as an occupation.</li><li class='infoBoxListItem'>FrontEnd; I love being creative and making something beautiful for someone else to enjoy.</li><li class='infoBoxListItem'>Game Development; I like games, and I would love to be in the development of one. Especially game design (level, mechanics, etc.).</li><li class='infoBoxListItem'>Gaming; As I mentioned above, I like games. In my free time I play games like Factorio, Rocket League, and Hunt: Showdown.</li>"

        // About tower control
        document.getElementById("controlText").innerHTML = "Plane Control";
        document.getElementById("basicInfoButtonText").innerHTML = "Basic info";
        document.getElementById("interestsButtonText").innerHTML = "My interests";
        document.getElementById("skillsButtonText").innerHTML = "My skills";

        // Nav3
        document.getElementById("nav3Text1").innerHTML = "<tspan x='99.8635' y='111.088'>Home</tspan>";
        document.getElementById("nav3Text2").innerHTML = "<tspan x='87.4102' y='160.227'>Projects</tspan>";
        document.getElementById("nav3Text3").innerHTML = "<tspan x='99.945' y='210.227'>About</tspan>";

        // Nav4
        document.getElementById("nav4Text1").innerHTML = "<tspan x='99.8635' y='111.088'>Home</tspan>";
        document.getElementById("nav4Text2").innerHTML = "<tspan x='87.4102' y='160.227'>Projects</tspan>";
        document.getElementById("nav4Text3").innerHTML = "<tspan x='99.945' y='210.227'>About</tspan>";
    }

    else if (lang == 1) {
        // Settings
        document.getElementById("flagEN").classList.remove("currentFlag");
        document.getElementById("flagNL").classList.add("currentFlag");
        document.getElementById("settingsDarkmodeText1").innerHTML = "<img src='./images/sun.svg'><br>Donker-modus<br>UIT";
        document.getElementById("settingsDarkmodeText2").innerHTML = "<img src='./images/moon.svg'><br>Donker-modus<br>AAN";
        document.getElementById("settingsAnimText1").innerHTML = "Animaties<br>UIT";
        document.getElementById("settingsAnimText2").innerHTML = "Animaties<br>AAN";
        document.getElementById("settingsLastText1").innerHTML = "Test<br>UIT";
        document.getElementById("settingsLastText2").innerHTML = "Test<br>AAN";
        document.getElementById("settingsToolTipText").innerHTML = "Je kan de taal veranderen, wisselen van licht naar donker-modus, en animaties uitzetten, in de instellingen, hier! (klik op het tandwiel)";

        // House welcome
        document.getElementById("houseWelcomeText4").innerHTML = "k";
        document.getElementById("houseWelcomeText7").innerHTML = "";
        document.getElementById("houseWelcomeText9").innerHTML = "Ik ben Joep,";
        document.getElementById("houseWelcomeText10").innerHTML = "Programmeur & ICT Student";
        document.getElementById("houseWelcomeText1").setAttribute("x", "34%");
        document.getElementById("houseWelcomeText2").setAttribute("x", "40.5%");
        document.getElementById("houseWelcomeText3").setAttribute("x", "44.5%");
        document.getElementById("houseWelcomeText4").setAttribute("x", "46.5%");
        document.getElementById("houseWelcomeText5").setAttribute("x", "50.5%");
        document.getElementById("houseWelcomeText6").setAttribute("x", "55%");
        document.getElementById("houseWelcomeText7").setAttribute("x", "61.5%");
        document.getElementById("houseWelcomeText8").setAttribute("x", "61.5%");
        document.getElementById("houseWelcomeText9").setAttribute("x", "35%");
        document.getElementById("houseWelcomeText10").setAttribute("x", "17%");

        // Nav1 
        document.getElementById("nav1Text1").innerHTML = "<tspan x='105.8635' y='111.088'>Start</tspan>";
        document.getElementById("nav1Text2").innerHTML = "<tspan x='218.91' y='160.227'>Projecten</tspan>";
        document.getElementById("nav1Text3").innerHTML = "<tspan x='220.945' y='210.227'>Over mij</tspan>";

        // Office
        document.getElementById("frontBoardText").innerHTML = "<tspan x='244' y='771'>Projecten</tspan>";

        // Nav2 
        document.getElementById("nav2Text1").innerHTML = "<tspan x='105.8635' y='111.088'>Start</tspan>";
        document.getElementById("nav2Text2").innerHTML = "<tspan x='84.4102' y='160.227'>Projecten</tspan>";
        document.getElementById("nav2Text3").innerHTML = "<tspan x='220.945' y='210.227'>Over mij</tspan>";

        // About basic info box 1
        document.getElementById("infoBox1").innerHTML = "<p class='infoBoxText'><span class='infoBoxTop'>Mijn naam is Joep,</span><br> Ik ben op dit moment 19 jaar oud. Ik ben een eerstejaars IT student<br> <span class='infoBoxSmall'>(<a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study: Open-ICT - NL</a>)</span> op HU Hogeschool Utrecht. Ik ben zeer gemotiveerd en geïnteresseerd in IT, waarover ik nu veel aan het leren ben. Ik vind het leuk om creatief te zijn, als je waarschijnlijk kan zien. Ik houd van alle dieren, maar vooral katten, ik heb zelf één <span class='infoBoxClickable' id='cat' onclick='catPlane(0)'>kat</span> en één <span class='infoBoxClickable' id='dog' onclick='dogPlane(0)'>hond</span> thuis.</p>";

        // About basic info box 2
        document.getElementById("infoBox2").innerHTML = "<p class='infoBoxTop infoBoxText'>Mijn interesses & hobby's</p><ul class='infoBoxList'><li class='infoBoxListItem'>Programmeren; Ik ben al jaren aan het programmeren als hobby, en begin er nu in te komen als beroep.</li><li class='infoBoxListItem'>FrontEnd; Ik houd ervan om creatief te zijn en om iets moois te maken waar een ander ook plezier aan kan hebben.</li><li class='infoBoxListItem'>Game Ontwikkeling; Ik vind games leuk, en het lijkt me heel leuk om in de ontwikkeling mee te doen. Vooral game ontwerp (levels, spelmechanismen, etc.).</li><li class='infoBoxListItem'>Gamen; zoals ik hierboven heb genoemd, ik vind games leuk. In mijn vrije tijd speel ik spellen zoals Factorio, Rocket League, en Hunt: Showdown.</li>"

        // About tower control
        document.getElementById("controlText").innerHTML = "Vliegtuig controle";
        document.getElementById("basicInfoButtonText").innerHTML = "Basis info";
        document.getElementById("interestsButtonText").innerHTML = "Mijn interesses";
        document.getElementById("skillsButtonText").innerHTML = "Mijn skills";

        // Nav3
        document.getElementById("nav3Text1").innerHTML = "<tspan x='105.8635' y='111.088'>Start</tspan>";
        document.getElementById("nav3Text2").innerHTML = "<tspan x='84.4102' y='160.227'>Projecten</tspan>";
        document.getElementById("nav3Text3").innerHTML = "<tspan x='86.945' y='210.227'>Over mij</tspan>";

        // Nav4
        document.getElementById("nav4Text1").innerHTML = "<tspan x='105.8635' y='111.088'>Start</tspan>";
        document.getElementById("nav4Text2").innerHTML = "<tspan x='84.4102' y='160.227'>Projecten</tspan>";
        document.getElementById("nav4Text3").innerHTML = "<tspan x='86.945' y='210.227'>Over mij</tspan>";
    }
}


function chimneySmoke(onOff) {
    if (onOff == 0) {
        document.getElementById("smoke1").style.opacity = "1";
        setTimeout(() => { document.getElementById("smoke2").style.opacity = "1"; }, 400);
        setTimeout(() => { document.getElementById("smoke3").style.opacity = "1"; }, 1000);
        setTimeout(() => { document.getElementById("smoke4").style.opacity = "1"; }, 1800);
        setTimeout(() => { document.getElementById("chimneyRectangle").setAttribute("onclick", "chimneySmoke(1)") }, 1800);
    } else if (onOff == 1) {
        document.getElementById("smoke1").style.opacity = "0";
        setTimeout(() => { document.getElementById("smoke2").style.opacity = "0"; }, 400);
        setTimeout(() => { document.getElementById("smoke3").style.opacity = "0"; }, 1000);
        setTimeout(() => { document.getElementById("smoke4").style.opacity = "0"; }, 1800);
        setTimeout(() => { document.getElementById("chimneyRectangle").setAttribute("onclick", "chimneySmoke(0)") }, 1800);
    }
}


let extraInfoOpen = false;
function extraInfo(openClose) {
    if (openClose == 0) {
        if (extraInfoOpen == false) {
            document.getElementById("settingsToolTipWrapper").style.right = "7vw";
            extraInfoOpen = true;
        } else if (extraInfoOpen == true) {
            document.getElementById("settingsToolTipWrapper").style.right = "100vw";
            extraInfoOpen = false;
        }
    } else if (openClose == 1) {
        document.getElementById("settingsToolTipWrapper").style.right = "100vw";
        extraInfoOpen = false;
    }
}


function settings(openClose) {
    extraInfo(1);
    if (openClose == 0) {
        document.getElementById("settingBox").style.height = "80vh";
        document.getElementById("settingBox").style.width = "500px";
        setTimeout(() => {
            document.getElementById("settingItems").style.opacity = "1";
            document.getElementById("settingItems").style.pointerEvents = "all";
        }, 400);
    } else if (openClose == 1) {
        document.getElementById("settingItems").style.opacity = "0";
        document.getElementById("settingItems").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("settingBox").style.height = "0";
            document.getElementById("settingBox").style.width = "0";
        }, 400);
    }
}


function contactForm(openClose) {
    if (openClose == 0) {
        document.getElementById("contactForm").style.display = "block";
        setTimeout(() => { document.getElementById("contactForm").style.opacity = "1"; }, 100);
    } else if (openClose == 1) {
        document.getElementById("contactForm").style.opacity = "0";
        setTimeout(() => { document.getElementById("contactForm").style.display = "none"; }, 1000);
    }
}


let animationsOn = true;
function animationSwitch() {
    if (animationsOn == true) {
        var ss = document.createElement("link");
        ss.rel = "stylesheet";
        ss.type = "text/css";
        ss.href = "./stylesheets/removeAnimations.css";
        ss.id = "removeAnimations";
        document.head.appendChild(ss);
        animationsOn = false;
    } else if (animationsOn == false) {
        document.getElementById("removeAnimations").remove();
        animationsOn = true;
    }
}


let planeOnSite = false;
function flyPlanes(planeNumber) {
    if (planeOnSite == false) {
        if (planeNumber == 1) { basicInfoPlane(0); }
        else if (planeNumber == 2) { interestsPlane(0); }
        else if (planeNumber == 3) { skillsPlane(0); }
        planeOnSite = true;
    } else if (planeOnSite == true) {
        basicInfoPlane(1); interestsPlane(1); skillsPlane(1);
        planeOnSite = false;
    }
}


function basicInfoPlane(inOut) {
    if (inOut == 0) {
        document.getElementById("infoBox1").style.display = "block";
        document.getElementById("basicInfo").style.opacity = "1";
        setTimeout(() => { document.getElementById("basicInfo").style.left = "15%"; }, 100);
        document.getElementById("interestsButton").style.backgroundColor = "rgb(150, 80, 80)";
        document.getElementById("skillsButton").style.backgroundColor = "rgb(150, 80, 80)";
    } else if (inOut == 1) {
        document.getElementById("basicInfo").style.left = "100%";
        setTimeout(() => { document.getElementById("basicInfo").style.opacity = "0"; }, 500);
        setTimeout(() => { document.getElementById("basicInfo").style.left = "-60%"; }, 500);
        catPlane(1); dogPlane(1);
        document.getElementById("interestsButton").style.backgroundColor = "rgb(80, 150, 80)";
        document.getElementById("skillsButton").style.backgroundColor = "rgb(80, 150, 80)";
    }
}


function interestsPlane(inOut) {
    if (inOut == 0) {
        document.getElementById("interests").style.opacity = "1";
        setTimeout(() => { document.getElementById("interests").style.left = "15%"; }, 100);
        document.getElementById("basicInfoButton").style.backgroundColor = "rgb(150, 80, 80)";
        document.getElementById("skillsButton").style.backgroundColor = "rgb(150, 80, 80)";
    } else if (inOut == 1) {
        document.getElementById("interests").style.left = "100%";
        setTimeout(() => { document.getElementById("interests").style.opacity = "0"; }, 500);
        setTimeout(() => { document.getElementById("interests").style.left = "-60%"; }, 500);
        document.getElementById("basicInfoButton").style.backgroundColor = "rgb(80, 150, 80)";
        document.getElementById("skillsButton").style.backgroundColor = "rgb(80, 150, 80)";
    }
}


function skillsPlane(inOut) {
    if (inOut == 0) {
        document.getElementById("aboutSkills").style.opacity = "1";
        document.getElementById("plane5").style.opacity = "1";
        document.getElementById("plane6").style.opacity = "1";
        document.getElementById("plane7").style.opacity = "1";
        document.getElementById("plane8").style.opacity = "1";
        setTimeout(() => { document.getElementById("aboutSkills").style.left = "15%"; }, 100);
        setTimeout(() => {
            document.getElementById("htmlSkill").style.width = "100%";
            document.getElementById("cssSkill").style.width = "100%";
            document.getElementById("jsSkill").style.width = "100%";
            document.getElementById("otherSkills").style.width = "100%";
        }, 1000);
        setTimeout(() => {
            document.getElementById("skillText1").style.opacity = "1";
            document.getElementById("skillText2").style.opacity = "1";
            document.getElementById("skillText3").style.opacity = "1";
            document.getElementById("skillText4").style.opacity = "1";
            document.getElementById("skillText5").style.opacity = "1";
            document.getElementById("skillText6").style.opacity = "1";
            document.getElementById("skillText7").style.opacity = "1";
            document.getElementById("skillText8").style.opacity = "1";
            document.getElementById("skillText9").style.opacity = "1";
        }, 1200);
        document.getElementById("basicInfoButton").style.backgroundColor = "rgb(150, 80, 80)";
        document.getElementById("interestsButton").style.backgroundColor = "rgb(150, 80, 80)";
    } else if (inOut == 1) {
        setTimeout(() => {
            document.getElementById("aboutSkills").style.left = "100%";
            document.getElementById("skillText1").style.opacity = "0";
            document.getElementById("skillText2").style.opacity = "0";
            document.getElementById("skillText3").style.opacity = "0";
            document.getElementById("skillText4").style.opacity = "0";
            document.getElementById("skillText5").style.opacity = "0";
            document.getElementById("skillText6").style.opacity = "0";
            document.getElementById("skillText7").style.opacity = "0";
            document.getElementById("skillText8").style.opacity = "0";
            document.getElementById("skillText9").style.opacity = "0";
            document.getElementById("htmlSkill").style.width = "0%";
            document.getElementById("cssSkill").style.width = "0%";
            document.getElementById("jsSkill").style.width = "0%";
            document.getElementById("otherSkills").style.width = "0%";
        }, 200);
        setTimeout(() => { document.getElementById("aboutSkills").style.opacity = "0"; }, 1000);
        setTimeout(() => { document.getElementById("aboutSkills").style.left = "-10%"; }, 1100);
        document.getElementById("basicInfoButton").style.backgroundColor = "rgb(80, 150, 80)";
        document.getElementById("interestsButton").style.backgroundColor = "rgb(80, 150, 80)";
    }
}


function catPlane(inOut) {
    if (inOut == 0) {
        document.getElementById("catPlane").style.opacity = "1";
        setTimeout(() => { document.getElementById("catPlane").style.left = "15%"; }, 100);
        document.getElementById("cat").setAttribute("onclick", "catPlane(1)");
    } else if (inOut == 1) {
        document.getElementById("catPlane").style.left = "100%";
        setTimeout(() => { document.getElementById("catPlane").style.opacity = "0"; }, 500);
        setTimeout(() => { document.getElementById("catPlane").style.left = "-50%"; }, 500);
        document.getElementById("cat").setAttribute("onclick", "catPlane(0)");
    }
}


function dogPlane(inOut) {
    if (inOut == 0) {
        document.getElementById("dogPlane").style.opacity = "1";
        setTimeout(() => { document.getElementById("dogPlane").style.left = "45%"; }, 100);
        document.getElementById("dog").setAttribute("onclick", "dogPlane(1)")
    } else if (inOut == 1) {
        document.getElementById("dogPlane").style.left = "100%";
        setTimeout(() => { document.getElementById("dogPlane").style.opacity = "0"; }, 500);
        setTimeout(() => { document.getElementById("dogPlane").style.left = "-50%"; }, 500);
        document.getElementById("dog").setAttribute("onclick", "dogPlane(0)")
    }
}


function toGmail() { window.open('mailto: ', '_blank'); }
function toLinkedIn() { window.open('https://www.linkedin.com/in/joep-van-dam-5a0072226 ', '_blank'); }
function toGithub() { window.open('https://www.github.com/JoepvanDam ', '_blank'); }
