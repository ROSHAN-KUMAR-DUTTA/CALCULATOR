console.log("My Calculator");
let display=document.getElementById("display");
function toogleclick(value){
    display.value+= value;
}
function cleardisplay(){
    display.value="";
}
function calculate(){
    try{

        display.value=eval(display.value);
    }
    catch(error){
        display.value="";
    }
    
}