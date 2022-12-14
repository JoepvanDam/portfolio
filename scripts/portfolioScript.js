// Onload events, sets mode to dark if time is between 18 and 8, alerts mobile user if h>w to switch to landscape mode.
window.onload = (event) => {
    const date = new Date(); const time = date.getHours(); if (time > 18 || time < 8) { darkmodeSwitch(); }
    if (screen.availHeight > screen.availWidth) { alert("It looks like you are in portrait mode. This site is not optimized for viewing in portrait mode, please rotate your device to landscape mode for the best experience."); }
};

// Dark mode definitions and functions
let darkmode = false;
let darkmodeRunning = false;
// Main dark mode function
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

            // Nav dark modes
            navDarkmodeSwitch(1);

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

            //Projects | More info box
            document.getElementById("projectMoreInfo").style.backgroundColor = "rgb(175, 175, 175)";
            document.getElementById("projectMoreInfo").style.color = "black";
            document.getElementById("projectMoreInfo").style.border = "1px solid black";
            document.getElementById("projectCloseImg").style.filter = "invert(100%)";

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
            setTimeout(() => {
                document.getElementById("billboardLight1").setAttribute("fill", "#989898");
                document.getElementById("billboardLight2").setAttribute("fill", "#989898");
                document.getElementById("billboardLight3").setAttribute("fill", "#989898");
                document.getElementById("billboardLight4").setAttribute("fill", "#989898");
                document.getElementById("billboardLight5").setAttribute("fill", "#989898");
            }, 700);

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

            // Nav dark modes
            navDarkmodeSwitch(0);

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

            //Projects | More info box
            document.getElementById("projectMoreInfo").style.backgroundColor = "rgb(50, 50, 50)";
            document.getElementById("projectMoreInfo").style.color = "rgb(225, 225, 225)";
            document.getElementById("projectMoreInfo").style.border = "1px solid rgb(100, 100, 100)";
            document.getElementById("projectCloseImg").style.filter = "none";

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
            setTimeout(() => {
                document.getElementById("billboardLight1").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight2").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight3").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight4").setAttribute("fill", "#E4C590");
                document.getElementById("billboardLight5").setAttribute("fill", "#E4C590");
            }, 800);

            setTimeout(() => { document.getElementById("darkmodeCheckbox").disabled = false; document.getElementById("darkmodeSwitch").style.filter = ""; }, 3400);
            setTimeout(() => { darkmode = true; darkmodeRunning = false; }, 3400);
        }
    }
}

// For loops for the navs, 0 is dark 1 is light
function navDarkmodeSwitch(darkLight) {
    if (darkLight == 0) {
        for (let navNum = 1; navNum < 5; navNum++) {
            document.getElementById("nav" + navNum + "Rectangle1").setAttribute("fill", "#2C2C2C");
            document.getElementById("nav" + navNum + "Triangle1").setAttribute("fill", "#2C2C2C");
            for (let rectNum = 2; rectNum < 6; rectNum++) { document.getElementById("nav" + navNum + "Rectangle" + rectNum).setAttribute("fill", "#333333"); }
            for (let triNum = 2; triNum < 6; triNum++) { document.getElementById("nav" + navNum + "Triangle" + triNum).setAttribute("fill", "#333333"); }
            for (let textNum = 1; textNum < 5; textNum++) { document.getElementById("nav" + navNum + "Text" + textNum).setAttribute("fill", "#FFFFFF"); }
            setTimeout(() => { document.getElementById("nav" + navNum + "Lamp").setAttribute("fill", "#E4C590"); }, 1100);
        }
    } else if (darkLight == 1) {
        for (let navNum = 1; navNum < 5; navNum++) {
            document.getElementById("nav" + navNum + "Rectangle1").setAttribute("fill", "#656565");
            document.getElementById("nav" + navNum + "Triangle1").setAttribute("fill", "#656565");
            for (let rectNum = 2; rectNum < 6; rectNum++) { document.getElementById("nav" + navNum + "Rectangle" + rectNum).setAttribute("fill", "#959595"); }
            for (let triNum = 2; triNum < 6; triNum++) { document.getElementById("nav" + navNum + "Triangle" + triNum).setAttribute("fill", "#959595"); }
            for (let textNum = 1; textNum < 5; textNum++) { document.getElementById("nav" + navNum + "Text" + textNum).setAttribute("fill", "#000000"); }
            setTimeout(() => { document.getElementById("nav" + navNum + "Lamp").setAttribute("fill", "#8D8D8D"); }, 200);
        }
    }
}
// Turning on/off chimney smoke
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

// Language definition and function, 0 is EN, 1 is NL
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
        document.getElementById("settingsSimpleText").innerHTML = "Only care about my information? <a href='./simplePortfolio.html' target='_blank'>Click here</a> for the simple version of this page.";

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

        // Projects | Office
        document.getElementById("frontBoardText").innerHTML = "<tspan x='259' y='771'>Projects</tspan>";
        document.getElementById("officeText2").innerHTML = "<tspan x='303.10938' y='370.2025'>Work In Progress</tspan>"
        document.getElementById("officeText3").innerHTML = "<tspan x='537.10938' y='370.2025'>Coming Soon...</tspan>"
        document.getElementById("officeText4").innerHTML = "<tspan x='77.10938' y='593.2025'>More Info</tspan>"

        // Projects | Project 1 More Info 
        document.getElementById("project1MoreInfo").innerHTML = "<h1 class='projectMoreInfoTitle'>My Portfolio | First Project</h1> <p class='projectMoreInfoText'>All my previous projects were for fun, small, and most of them were never finished. This is the first project that I did for my study, and the first one that I actually created. There is no need to show any pictures of the finished product, since you're on it right now. This portfolio website is the first thing I made.<br><br>Besides being the only person working on this project, I was also the <em>client</em>. So I made something that made me happy and fit me, while allowing myself to learn new things. The school did have 3 requirements for this project; (1) An online portfolio website where you can (2) introduce yourself and (3) show your projects and your role in them.<br><br> Requirement 1: Well you are here, reading this text in an online webpage (presumably), so &check;<br>Requirement 2: In the about section on this page, you can read more about me, my interests, and skills &check;<br>Requirement 3: You can see more information about each project here too &check;<br><br><br><br>You can find the code for this project <a href='https://github.com/JoepvanDam/portfolio' target='_blank'>here</a>.</p>"

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

        // About skills
        document.getElementById("skillText4").innerHTML = "English";
        document.getElementById("skillText5").innerHTML = "Dutch";
        document.getElementById("skillText5").parentElement.style.width = "10%";

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
        document.getElementById("settingsSimpleText").innerHTML = "Wil je alleen mijn informatie zien? <a href='./simplePortfolio.html' target='_blank'>Klik hier</a> voor de simpele versie van deze pagina.";

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

        // Projects | Office
        document.getElementById("frontBoardText").innerHTML = "<tspan x='244' y='771'>Projecten</tspan>";
        document.getElementById("officeText2").innerHTML = "<tspan x='310.10938' y='370.2025'>In Uitvoering...</tspan>"
        document.getElementById("officeText3").innerHTML = "<tspan x='545.10938' y='370.2025'>Binnenkort...</tspan>"
        document.getElementById("officeText4").innerHTML = "<tspan x='77.10938' y='593.2025'>Meer Info</tspan>"

        // Projects | Project 1 More Info 
        document.getElementById("project1MoreInfo").innerHTML = "<h1 class='projectMoreInfoTitle'>Mijn Portfolio | Eerste Project</h1> <p class='projectMoreInfoText'>Al mijn vorige projecten waren voor plezier, klein, en de meesten heb ik nooit afgemaakt. Dit is het eerste project dat ik heb gedaan voor mijn studie, en het eerste dat ik echt heb (af)gemaakt. Er hoeft hier geen foto bij te staan van het eindproduct, omdat je er nu bent. Deze portfolio website is het eerste dat ik heb gemaakt.<br><br>Behalve dat ik zelf als enige aan het project werkte, was ik ook de <em>klant</em>. Dus heb ik iets gemaakt wat mij blij maakt en wat bij mij past, terwijl ik ook nieuwe dingen kon oppikken. Vanuit school waren er wel 3 vereisten voor het project; (1) Een online portfolio website waar je (2) jezelf kan voorstellen en (3) je projecten -en jouw rol daarin- kan laten zien.<br><br> Vereiste 1: Nou, je bent hier en je leest dit op een online pagina (vermoedelijk), dus &check;<br>Vereiste 2: In de over mij sectie op deze pagina kan je lezen over mij, mijn interesses, en skills &check;<br>Vereiste 3: Je kan hier ook meer informatie vinden over elk project &check;<br><br><br><br>Je kan <a href='https://github.com/JoepvanDam/portfolio' target='_blank'>hier</a> de code van dit project vinden.</p>"

        // Nav2 
        document.getElementById("nav2Text1").innerHTML = "<tspan x='105.8635' y='111.088'>Start</tspan>";
        document.getElementById("nav2Text2").innerHTML = "<tspan x='84.4102' y='160.227'>Projecten</tspan>";
        document.getElementById("nav2Text3").innerHTML = "<tspan x='220.945' y='210.227'>Over mij</tspan>";

        // About basic info box 1
        document.getElementById("infoBox1").innerHTML = "<p class='infoBoxText'><span class='infoBoxTop'>Mijn naam is Joep,</span><br> Ik ben op dit moment 19 jaar oud. Ik ben een eerstejaars IT student<br> <span class='infoBoxSmall'>(<a href='https://www.hu.nl/voltijd-opleidingen/open-ict' target='_blank'>study: Open-ICT - NL</a>)</span> op HU Hogeschool Utrecht. Ik ben zeer gemotiveerd en ge??nteresseerd in IT, waarover ik nu veel aan het leren ben. Ik vind het leuk om creatief te zijn, als je waarschijnlijk kan zien. Ik houd van alle dieren, maar vooral katten, ik heb zelf ????n <span class='infoBoxClickable' id='cat' onclick='catPlane(0)'>kat</span> en ????n <span class='infoBoxClickable' id='dog' onclick='dogPlane(0)'>hond</span> thuis.</p>";

        // About basic info box 2
        document.getElementById("infoBox2").innerHTML = "<p class='infoBoxTop infoBoxText'>Mijn interesses & hobby's</p><ul class='infoBoxList'><li class='infoBoxListItem'>Programmeren; Ik ben al jaren aan het programmeren als hobby, en begin er nu in te komen als beroep.</li><li class='infoBoxListItem'>FrontEnd; Ik houd ervan om creatief te zijn en om iets moois te maken waar een ander ook plezier aan kan hebben.</li><li class='infoBoxListItem'>Game Ontwikkeling; Ik vind games leuk, en het lijkt me heel leuk om in de ontwikkeling mee te doen. Vooral game ontwerp (levels, spelmechanismen, etc.).</li><li class='infoBoxListItem'>Gamen; zoals ik hierboven heb genoemd, ik vind games leuk. In mijn vrije tijd speel ik spellen zoals Factorio, Rocket League, en Hunt: Showdown.</li>"

        // About tower control
        document.getElementById("controlText").innerHTML = "Vliegtuig controle";
        document.getElementById("basicInfoButtonText").innerHTML = "Basis info";
        document.getElementById("interestsButtonText").innerHTML = "Mijn interesses";
        document.getElementById("skillsButtonText").innerHTML = "Mijn skills";

        // About skills
        document.getElementById("skillText4").innerHTML = "Engels";
        document.getElementById("skillText5").innerHTML = "Nederlands";
        document.getElementById("skillText5").parentElement.style.width = "12%";

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

// Settings open/close
function settings(openClose) {
    if (openClose == 0) {
        document.getElementById("settingBox").style.height = "90vh";
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

// Animation switch
function animationSwitch(onOff) {
    if (onOff == 0) {
        document.getElementById("animationSwitch").setAttribute("onclick", "animationSwitch(1)");
        var ss = document.createElement("link");
        ss.rel = "stylesheet";
        ss.type = "text/css";
        ss.href = "./stylesheets/removeAnimations.css";
        ss.id = "removeAnimations";
        document.head.appendChild(ss);
    } else if (onOff == 1) {
        document.getElementById("animationSwitch").setAttribute("onclick", "animationSwitch(0)");
        document.getElementById("removeAnimations").remove();
    }
}

// Project extra info open/close
function showProject(projectNum) {
    if (projectNum != 0) {
        document.getElementById("projectMoreInfoClose").style.display = 'block';
        document.getElementById("projectMoreInfo").style.display = 'block';
        setTimeout(() => { document.getElementById("projectMoreInfo").style.opacity = '1'; }, 200);
    } else {
        document.getElementById("projectMoreInfo").style.opacity = '0';
        setTimeout(() => {
            document.getElementById("projectMoreInfoClose").style.display = 'none';
            document.getElementById("projectMoreInfo").style.display = 'none';
        }, 200);
    }
}

// Plane definitions and functions for about section
let planeOnSite = false;
let planesFlying = false;
// Main planes function
function flyPlanes(planeNumber) {
    if (planesFlying == false) {
        planesFlying = true;
        if (planeOnSite == false) {
            if (planeNumber == 1) { basicInfoPlane(0); }
            else if (planeNumber == 2) { interestsPlane(0); }
            else if (planeNumber == 3) { skillsPlane(0); }
            planeOnSite = true;
            setTimeout(() => { planesFlying = false; }, 500);
        } else if (planeOnSite == true) {
            basicInfoPlane(1); interestsPlane(1); skillsPlane(1);
            planeOnSite = false;
            setTimeout(() => {
                planesFlying = false;
                document.getElementById("basicInfoButton").style.backgroundColor = "rgb(80, 150, 80)";
                document.getElementById("interestsButton").style.backgroundColor = "rgb(80, 150, 80)";
                document.getElementById("skillsButton").style.backgroundColor = "rgb(80, 150, 80)";
            }, 1500);
        }
    }
}

// Different planes
function basicInfoPlane(inOut) {
    if (inOut == 0) {
        document.getElementById("infoBox1").style.display = "block";
        document.getElementById("basicInfo").style.opacity = "1";
        setTimeout(() => { document.getElementById("basicInfo").style.left = "15%"; }, 100);
        document.getElementById("interestsButton").style.backgroundColor = "rgb(150, 80, 80)";
        document.getElementById("skillsButton").style.backgroundColor = "rgb(150, 80, 80)";
    } else if (inOut == 1) {
        document.getElementById("basicInfo").style.left = "100%";
        document.getElementById("basicInfoButton").style.backgroundColor = "rgb(150, 80, 80)";
        setTimeout(() => { document.getElementById("basicInfo").style.opacity = "0"; }, 500);
        setTimeout(() => { document.getElementById("basicInfo").style.left = "-60%"; }, 500);
        catPlane(1); dogPlane(1);
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
        document.getElementById("interestsButton").style.backgroundColor = "rgb(150, 80, 80)";
        setTimeout(() => { document.getElementById("interests").style.opacity = "0"; }, 500);
        setTimeout(() => { document.getElementById("interests").style.left = "-60%"; }, 500);
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
        }, 1200);
        document.getElementById("basicInfoButton").style.backgroundColor = "rgb(150, 80, 80)";
        document.getElementById("interestsButton").style.backgroundColor = "rgb(150, 80, 80)";
    } else if (inOut == 1) {
        document.getElementById("skillsButton").style.backgroundColor = "rgb(150, 80, 80)";
        setTimeout(() => {
            document.getElementById("aboutSkills").style.left = "100%";
            document.getElementById("skillText1").style.opacity = "0";
            document.getElementById("skillText2").style.opacity = "0";
            document.getElementById("skillText3").style.opacity = "0";
            document.getElementById("skillText4").style.opacity = "0";
            document.getElementById("skillText5").style.opacity = "0";
            document.getElementById("skillText6").style.opacity = "0";
            document.getElementById("skillText7").style.opacity = "0";
            document.getElementById("htmlSkill").style.width = "0%";
            document.getElementById("cssSkill").style.width = "0%";
            document.getElementById("jsSkill").style.width = "0%";
            document.getElementById("otherSkills").style.width = "0%";
        }, 200);
        setTimeout(() => { document.getElementById("aboutSkills").style.opacity = "0"; }, 1000);
        setTimeout(() => { document.getElementById("aboutSkills").style.left = "-10%"; }, 1100);
    }
}

// Plane with cat/dog pics
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

// Contact link functions
function toGmail() { window.open('mailto: joepportfoliobusiness@gmail.com?Subject=Portfolio Contact'); }
function toLinkedIn() { window.open('https://www.linkedin.com/in/joep-van-dam-5a0072226 ', '_blank'); }
function toGithub() { window.open('https://www.github.com/JoepvanDam ', '_blank'); }
