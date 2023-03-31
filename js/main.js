let lEmail = document.getElementById("email");
let lPass = document.getElementById("pass");

let InpE = document.querySelector("input[type='text']")
let InpPass = document.querySelector("input[type='password']")


InpE.onfocus = function () {
    if (InpE.value === "") {
        lEmail.style.bottom = "55px";
    }
}
InpE.onblur = function () {
    InpE.value !== "" ? lEmail.style.bottom = "55px" : lEmail.style.bottom = "calc(17px + 12.5px)";
}


InpPass.onfocus = function () {
    if (InpPass.value === "") {
        lPass.style.bottom = "55px";
    }
}
InpPass.onblur = function () {
    InpPass.value !== "" ? lPass.style.bottom = "55px" : lPass.style.bottom = "calc(17px + 12.5px)";
}