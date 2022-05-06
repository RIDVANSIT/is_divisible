
function myFunction(){
  let b = document.getElementById("en").value;
  let a =   (parseFloat( document.getElementById("en").value));
  let d =a;
   b= b.length;
   let x=0;
   for(let i = 0 ;i<b;i++){
    
     let temp = a%10;
     a=(a-temp)/10;
     
     x+= temp;

   }
   
  if(d%x===0){

    document.getElementById("sonuc").innerText="True the number is divisible";
  }
  else {
    document.getElementById("sonuc").innerText="False the number is not divisible";
  }


};
myFunction();
