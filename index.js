let body = document.querySelector("body");
let calculator = document.querySelector("#calculator");
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

headerSub.textContent = "";
headerSub.textContent = "rg-23";


modeToggle.addEventListener('click', () => {

    if (modeTitle.innerHTML === "Simple") {
        console.log("Current Mode: Simple");
        alert("Scientific Mode: ***UNDER CONSTRUCTION***");
        /**
         * * Sci-Mode Toggle
         * ! Under Construction 
         * */
        // modeTitle.innerHTML = "";
        // modeTitle.innerHTML = "Scientific";
        // modeTitle.style.fontSize = "1.35em";

        // calculator.classList.add("sci-calc-container");
        // calculator.classList.remove("calc-container");

        // headerSub.textContent = "";
        // headerSub.textContent = "rg-23VR PLUS";
    } else {
        console.log("Current Mode: Scientific");

        modeTitle.textContent = "";
        modeTitle.textContent = "Simple";
        modeTitle.style.fontSize = "1.5em";

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
    let notRestricted = (e.target.className !== "buttons")
        && (e.target.className !== "buttons-set-1")
        && (e.target.className !== "buttons-set-2")
        && (e.target.className !== "buttons-set-3");

    if (notRestricted) {
        if (modeTitle.innerHTML === "Simple") {
            // * Simple Calculator Buttons

            if (/Syntax Error/.test(bottomScreen.textContent) || equals) {
                topScreen.textContent = bottomScreen.textContent !== "Syntax Error" ? topScreen.textContent + bottomScreen.textContent : "";
                bottomScreen.textContent = "";
                equals = false;
            };
            // ? console.log(e.target.innerHTML);
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
                        bottomScreen.textContent = bottomScreen.textContent ? math.evaluate(bottomScreen.textContent).toLocaleString("en-US", {
                            maximumFractionDigits: 10
                        }) : "";
                    } catch {
                        topScreen.textContent = "";
                        bottomScreen.textContent = "Syntax Error";
                    }
                    break;

                default:
                    bottomScreen.textContent += e.target.textContent;
                    break;
            }
        }
        else {
            alert("Scientific Mode: ***UNDER CONSTRUCTION***");
            /**
            * * Scientific Buttons
            * ! Under Construction 
            * TODO Implement Trigonometric Functions
            * */
            // case 'SHIFT':
            //     shiftPressed = shiftPressed ? false : true;
            //     break;

            // case 'x<sup>&#9634</sup>':
            //     bottomScreen.textContent += "^";
            //     break;

            // case 'sin':
            //     bottomScreen.textContent += "sin(";
            //     break;
            // case 'cos':
            //     bottomScreen.textContent += "cos(";
            //     break;
            // case 'tan':
            //     bottomScreen.textContent += "tan(";
            //     break;
        }
    }

});