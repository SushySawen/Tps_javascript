var i = 0;
var width = 10;
function move() {
    var pas = document.getElementById("step").value;
    var elem = document.getElementById("myBar");
    

    if (width >= 100) {
    
    } else {
        width = parseFloat(width) + parseFloat(pas);
        var sizewidth = width + "%";
        $('#myBar').animate({width: sizewidth}, 1500);
        elem.innerHTML = width + "%";
    }
  
} 

function reset() {
    width = 0;
    $('#myBar').animate({width: "0%"}, 1500);
    elem.innerHTML = width + "%";
}