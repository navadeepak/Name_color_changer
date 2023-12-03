function txtch(){
    let txt=prompt("Enter Your Name: ");
    document.getElementById("txtarea").innerHTML=txt;
}
function light(){
    document.getElementById("clor").style="background-color:white";
    document.getElementById("bt_1").style="border: 2px solid black;color:black";
    document.getElementById("bt_2").style="border: 2px solid black;color:black";
}
function dark(){
    document.getElementById("clor").style="background-color:black";
    document.getElementById("bt_1").style="border: 2px solid white;color:white";
    document.getElementById("bt_2").style="border: 2px solid white;color:white";
}