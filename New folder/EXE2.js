{

    var str = "SVCOLLEGE";

    if(str.length>=10){
        var temp = str.charAt(str.length-1);
        alert(temp);
    }
    else if(str.length>=6 && str.length<=9){
        if(str.indexOf('a')!=-1 || str.indexOf('A')!=-1){
            alert("Great");

        }
        else{
            alert("NotGood");
        }

    }
    else if(str.length>=1&&str.length<=5){
        var sub = str.substring(2,4);
        if(sub.indexOf('l')!=-1||sub.indexOf('L')!=-1){
            alert("L:)");
        }
        else{
            alert("L:(");
        }
    }
    else{
        alert("null");
    }
    










}


































    // function ff(){
    // var t = document.getElementById("test").value;
    // if(t==6){
    //     alert("gg");
    //  }
    //  else
    //     alert("HH");
     
    // }








// function bla(){
//     d=document.getElementById("demo").value;
//     if(d>150){
//         alert("noooooooo")
//     }
//     else{
//         alert("yaaaaaaaa");
//     }
// }





//}



