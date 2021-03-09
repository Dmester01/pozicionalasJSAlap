
           /* global getElementById */

// alert("helló világ!");
            document.write ("helló világ a selectionba!"); 
            console.log("Lefutott a JS a selectionba ");
            document.getElementById("szoveg").innerHTML="Bekezdésbe irok!";
            
           function szamolas(){
           var valtA=Number(getElementById("a").value);
           var valtB=Number(getElementById("b").value);
           console.log(valtA);
           console.log(valtB);
           document.getElementById("szoveg").innerHTML=valtA+valtB;
           }
       
          function üdvözlés(){
              var valtNev=document.getElementById("nev").value;
              alert("szia"+valtNev);
              
          }