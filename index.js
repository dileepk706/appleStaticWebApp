var a = confirm(" agree with our  terms and conditions?");
var text="";
var errtxt="";
var count=0;
if(a){
    text="congragulation!!! You got the access to all products"
    var b=document.getElementById("demo");
    b.style.backgroundColor="lightgreen";
    c()
}else{
    text="Ooops!!! Yor account has blocked  Please agree with our terms and conditions";
    var b=document.getElementById("demo");
    b.style.backgroundColor="lightcoral";
    c()
}
function c(){
    document.getElementById("demo").innerHTML = text;
}
function erase(){
    count=count+1;
    if(count==1){
        document.getElementById("demo").innerHTML =errtxt;
        var d=document.getElementById("demo");
        d.style.backgroundColor="white";
        console.log(count);
    }else{
        text=`you pressed ${count} times the erase button`;
        var bg=document.getElementById("demo");
        bg.style.backgroundColor="lightblue";
        c()
    }
    
}

