let body = document.querySelector("body");
let calculator = document.querySelector("#calculator")
let headerTitle = document.querySelector("#headerTitle");
let headerSub = document.querySelector("#headerSub");


let modeToggle = document.querySelector("#toggle");
let modeTitle = document.querySelector("#modeTitle");

let topScreen = document.querySelector("#topScreen");
let bottomScreen = document.querySelector("#bottomScreen");

let buttons = document.querySelector(".buttons");

let shift = document.querySelector("#shift");
let sqrt = document.querySelector("#sqrt");
let nroot = document.querySelector("#nroot");
let sin = document.querySelector("#sin");
let cos = document.querySelector("#cos");
let tan = document.querySelector("#tan");
let log = document.querySelector("#log");
let ln = document.querySelector("#ln");

let angleType = document.querySelector("#angleType");

let topS, bottomS;

headerSub.textContent = "";
headerSub.textContent = "rg-23";



modeToggle.addEventListener('click', function () {

    if (this.checked) {
        console.log("Checkbox is checked..");
        modeTitle.innerHTML = "";
        modeTitle.innerHTML = "Low-spec Scientific e-Calculator <br> ***UNDER CONSTRUCTION***";
        modeTitle.style.textAlign = "center";
        modeTitle.style.fontSize = "2.5em";

        calculator.classList.add("sci-calc-container");
        calculator.classList.remove("calc-container");
        
        headerSub.textContent = "";
        headerSub.textContent = "rg-23VR PLUS";
    } else {
        console.log("Checkbox is not checked..");
        modeTitle.textContent = "";
        modeTitle.textContent = "Simple Calculator";
        modeTitle.style.textAlign = "center";
        modeTitle.style.fontSize = "2.5em";

        calculator.classList.add("calc-container");
        calculator.classList.remove("sci-calc-container");
        headerSub.textContent = "";
        headerSub.textContent = "rg-23";
    }
});

// Declare Variables for Equals and Shift States
let equals = false;
let shiftPressed = false;

buttons.addEventListener('click', (e) => {
    let notRestricted = (e.target.className !== "buttons") && (e.target.className !== "buttons-set-1")
        && (e.target.className !== "buttons-set-2") && (e.target.className !== "buttons-set-3");

    if (notRestricted) {
        if (/Error/.test(topScreen.textContent) || equals) {
            topScreen.textContent = bottomScreen.textContent ? topScreen.textContent + bottomScreen.textContent : "";
            bottomScreen.textContent = "";
            equals = false;
        };
        console.log(e.target.innerHTML);
        switch (e.target.innerHTML) {
            case 'DEL':
                if (bottomScreen.textContent) bottomScreen.textContent = bottomScreen.textContent.slice(0, -1);
                break;

            case 'AC':
                topScreen.textContent = "";
                bottomScreen.textContent = "";
                break;

            case '=':
                equals = true;
                try {
                    topScreen.textContent = bottomScreen.textContent ? bottomScreen.textContent + "=" : "";
                    bottomScreen.textContent = math.evaluate(bottomScreen.textContent).toLocaleString("en-US", {
                        maximumFractionDigits: 10});
                } catch {
                    topScreen.textContent = "";
                    bottomScreen.textContent = "Syntax Error";
                }
                break;

            case 'SHIFT':
                shiftPressed = shiftPressed ? false : true;
                break;

            case 'x<sup>2</sup>':
                bottomScreen.textContent += "^2";
                break;

            default:
                bottomScreen.textContent += e.target.textContent;
                break;
        }
    }

});