{
  var arr1=["s", "v", "c", "o", "l", "l", "e", "g", "e"];
  var arr2=["f", "r", "o", "n", "t"," ",  "e", "n", "d"," ", "a"];
  var arr3=["o", "f", "i", "r", " ","r", "o", "t", "e", "m"];
  var arr4=["a", "b", "c"];

  var max=arr1.length;
  if(max<arr2.length){
      max=arr2;}
    if(max<arr3.length){
      max=arr3;}
    if(max<arr4.length){
      max=arr4;}
    alert(max);

  var min=arr1.length;
  if(min>arr2.length){
    min=arr1;}
   if(min>arr3.length){
     min=arr3;}
   if(min>arr4.length){
     min=arr4;}
   alert(min);



  var last1=max.pop();
  var last2=max.pop()
  min.push(last2);
  min.push(last1);
  alert(min);

  var conc=arr1.concat(arr3);
  alert(conc);


  if(max.length<conc.length){
    alert(max);}

  else if(max.length==conc.length){
    alert("EQUALS")}
 if(max.length>conc.length){
   conc.push("*");
   conc.unshift("*");
   alert(conc);}



}
