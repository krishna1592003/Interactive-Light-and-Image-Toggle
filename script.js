
function switchoff(){
    document.getElementById("blubimageid").src = "images/bulb-go-off-img.png";
    document.getElementById("catimageid").src = "images/cat-eyes-img.png";
    document.getElementById("switchoffid").style.background = "#cbd2d9";
    document.getElementById("switchonid").style.background = "green";
    document.getElementById("switchstatus").textContent="SwitchOFF";
    document.getElementById("catstatus").textContent="Where is the  Cat ??  Click the On Button";
}
function switchon(){
    document.getElementById("blubimageid").src = "images/bulb-go-on-img.png";
    document.getElementById("catimageid").src = "images/images.png";
    document.getElementById("switchoffid").style.background = "red";
    document.getElementById("switchonid").style.background = "#cbd2d9";
    document.getElementById("switchstatus").textContent="SwitchON";
    document.getElementById("catstatus").textContent="The Cat is Visible...";
}

//here the two function are used where initial the bulb is on when ever we off it the cat images changes nd bulb images is changed and on button action is changed again the off function is used to return to the initial start state 