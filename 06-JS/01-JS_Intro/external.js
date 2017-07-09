/*
function add(){
    var a = document.getElementById("box_1");
    var b = document.getElementById("box_2");
    var c = parseInt(a.value) + parseInt(b.value);
    document.getElementById("result").innerHTML = c;
}*/

window.addEventListener("load", add);

function add(){
    var a = document.getElementById("box_1");
    var b = document.getElementById("box_2");
    document.getElementById("add").addEventListener("click", function(){
        var c = parseInt(a.value) + parseInt(b.value);
        document.getElementById("result").innerHTML = c;
    })
}