{
 function register(){
   var username=document.getElementById("username").value;
   if(username.charAt(0)>=0 && username.charAt(0)<=9){
    document.getElementById("error1").innerHTML="*first character can't be a number";}
   if(username.length<4){
    document.getElementById("error1").innerHTML="*need to be at least 4 characters";}


   var fullname=document.getElementById("fullname").value;
   if(fullname.indexOf(" ")==-1){
    document.getElementById("error2").innerHTML="*the full name must be 2 words";}

   var password=document.getElementById("password").value;
   if(password.length<=7 || password.length>12){
     document.getElementById("error3").innerHTML="*the password must contain 8-12 characters";}
   if (password.search(/[a-z]/) == -1){
    document.getElementById("error3").innerHTML+="*must contain minimum 1 lowerCase letter";}
   if (password.search(/[A-Z]/) == -1){
    document.getElementById("error3").innerHTML+="*must contain minimum 1 UpperCase letter";}
   if (password.search(/[0-9]/) == -1){
    document.getElementById("error3").innerHTML+="*must contain minimum 1 numeric character";}


   var conpassword=document.getElementById("confirm password").value;
   if(conpassword!=password){
    document.getElementById("error4").innerHTML="*doesn't match to the password";}


   var email=document.getElementById("email").value;
   if(email.indexOf('@')==-1 || email.charAt(0)=='@' || email.charAt(email.length-1)=='@'){
    document.getElementById("error5").innerHTML="*the @ must be in the middle of the email address";}

   if(document.getElementById("error3").innerHTML=="" && document.getElementById("error1").innerHTML=="" && document.getElementById("error2").innerHTML=="" && document.getElementById("error4").innerHTML=="" && document.getElementById("error5").innerHTML==""){
     document.getElementById("gooduser").innerHTML=username;
     document.getElementById("goodfull").innerHTML=fullname;
     document.getElementById("goodpass").innerHTML=password;
     document.getElementById("goodemail").innerHTML=email;}


 }



}
