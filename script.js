let outputscreen = document.getElementById("display");

function displayvalue(num){
    outputscreen.value += num;
}
function displayeval(){
    try{
        outputscreen.value = eval(outputscreen.value)
    }
    catch(err){
        // alert("Syntax Error");
        outputscreen.value =  "Invalid Syntax";
    }
}
function displayclear(){
    outputscreen.value = "";
}
