function saffronVisibility() {
    let kesariya = document.getElementById("saffron");
    kesariya.style.visibility = "visible";
}
function chakra() {
    let ashokaChakra = document.getElementById("chakra");
    ashokaChakra.style.visibility = "visible";
}
function green() {
    let greenColor = document.getElementById("green");
    greenColor.style.visibility = "visible";
}
let smallFlag = ()=>{
    document.getElementById("foldedFlag").style.visibility="hidden";
}
 setTimeout(saffronVisibility , 2500)
        setTimeout(chakra , 2500)
        setTimeout(green , 2500)


    setTimeout(smallFlag , 2500)
    let msg = ()=> {
         document.getElementById("message").style.visibility = "visible"
    }
    setTimeout(msg , 2500);