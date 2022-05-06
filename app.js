
function myFunction(){
  let b = document.getElementById("en").value;
  let a =   (parseInt( document.getElementById("en").value));
   b= b.length;
   let x=0;
   for(let i = 0 ;i<b;i++){
    
     let temp = a%10;
     a=(a-temp)/10;
     
     x= x + temp;
    
   }  
  if(a%x===0){
    document.getElementById("sonuc").innerText="true";
  }
  else {
    document.getElementById("sonuc").innerText="false";
  }

};
myFunction();