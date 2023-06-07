function Change(){
    var a =document.getElementById("color");
    var b =a.value ;
    a.style.color=b;
}

function Para(){
    var b =document.getElementsByClassName("name");
    
    b[0].style.fontSize="40px";
}

function ad(){
    var c =document.getElementsByTagName("input");
    console.log(c[1].value);
    var d =c[1].value;
document.body.style.backgroundColor=d;
}

