window.addEventListener('wheel', event => {
    event.preventDefault();
    window.scrollBy(event.deltaY * 5, 0);
}, {passive: false});


addEventListener('touchmove', () => { scrollFunction() });
addEventListener('scroll', () => { scrollFunction() });
function scrollFunction() { document.getElementById("progress").style.width = (window.scrollX/3) + "px"; }


let darkmode = false;
let running = false;
function darkmodeSwitch() {
    if (running == false) {
        running = true;
        if (darkmode == true) {
            // Full Page
            document.getElementById("fullPage").style.backgroundColor = "#9BBDD1";
            document.getElementById("floor").style.backgroundColor = "#5A5A5A";
            document.getElementById("progress").style.backgroundColor = "rgb(50, 100, 150)";
            document.getElementById("darkmodeCheckbox").disabled = true;
            document.getElementById("darkmodeSwitch").style.filter = "brightness(0.5)";

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
            setTimeout(() => { document.getElementById("smoke1").style.opacity = "0"; }, 1000);
            setTimeout(() => { document.getElementById("smoke2").style.opacity = "0"; }, 1400);
            setTimeout(() => { document.getElementById("smoke3").style.opacity = "0"; }, 2000);
            setTimeout(() => { document.getElementById("smoke4").style.opacity = "0"; }, 2800);
    
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
            
            // About | ATC Tower & Planes
            document.getElementById("atcTower").style.filter = "saturate(0)";
    
            // Contact | Billboard
            document.getElementById("billboardSupportLeft").setAttribute("fill", "#717171");
            document.getElementById("billboardSupportLeftStand").setAttribute("fill", "#4F4F4F");
            document.getElementById("billboardSupportRight").setAttribute("fill", "#717171");
            document.getElementById("billboardSupportRightStand").setAttribute("fill", "#4F4F4F");
            document.getElementById("aboveBillboard").setAttribute("fill", "#ABABAB");
            document.getElementById("billboardRectangle").setAttribute("fill", "#C2C2C2");
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
            setTimeout(() => { darkmode = false; running = false; }, 2800);
        } 
        
        else if (darkmode == false) {
            // Full Page
            document.getElementById("fullPage").style.backgroundColor = "#292647";
            document.getElementById("floor").style.backgroundColor = "#161616";
            document.getElementById("progress").style.backgroundColor = "rgb(50, 50, 100)";
            document.getElementById("darkmodeCheckbox").disabled = true;
            document.getElementById("darkmodeSwitch").style.filter = "brightness(0.5)";

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
            setTimeout(() => { document.getElementById("smoke1").style.opacity = "1"; }, 1700);
            setTimeout(() => { document.getElementById("smoke2").style.opacity = "1"; }, 2100);
            setTimeout(() => { document.getElementById("smoke3").style.opacity = "1"; }, 2700);
            setTimeout(() => { document.getElementById("smoke4").style.opacity = "1"; }, 3400);
        
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
    
            // Contact | Billboard
            document.getElementById("billboardSupportLeft").setAttribute("fill", "#232323");
            document.getElementById("billboardSupportLeftStand").setAttribute("fill", "#0D0D0D");
            document.getElementById("billboardSupportRight").setAttribute("fill", "#232323");
            document.getElementById("billboardSupportRightStand").setAttribute("fill", "#0D0D0D");
            document.getElementById("aboveBillboard").setAttribute("fill", "#1A1A1A");
            document.getElementById("billboardRectangle").setAttribute("fill", "#404040");
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
            setTimeout(() => { darkmode = true; running = false; }, 3400);
        }
    }
}


function settings(openClose) {
    if (openClose == 0) {
        document.getElementById("settingBox").style.height = "80vh";
        document.getElementById("settingBox").style.width = "500px";
        setTimeout(() => {
            document.getElementById("settingItems").style.opacity = "1";
            document.getElementById("settingItems").style.pointerEvents = "all";
        }, 500);
    } else if (openClose == 1) {
        document.getElementById("settingItems").style.opacity = "0";
        document.getElementById("settingItems").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("settingBox").style.height = "0";
            document.getElementById("settingBox").style.width = "0";
        }, 500);
    }
}


function doScrolling(part) {
    var width = document.getElementById("fullPage").offsetWidth;
    if (part == 1) { scrollTo(0, 0); } 
    else if (part == 2) { scrollTo(((width/4)*1), 0); } 
    else if (part == 3) { scrollTo(((width/4)*2), 0); } 
    else if (part == 4) { scrollTo(((width/4)*3), 0); }
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
