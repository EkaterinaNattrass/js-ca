const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function(){
    const age = input.value;
    const isAgeOk = isOldEnough(age);
    if (isAgeOk) {
        console.log("Entering website");
        document.location.href="home.html"
    }
    else {
        console.log ("You are too young to enter the website");
        document.location.href="noAccess.html"
    }
}

function isOldEnough (ageToCheck) {
    if (ageToCheck >= 18) {
        return true;
    }
    else {return false;}
}
