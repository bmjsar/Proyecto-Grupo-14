
function myFunction() {
  let numuno = parseFloat(prompt("ponga el precio en euros sin ningún punto") )
  let numdos = parseFloat(prompt("ponga la cotizacion del euro con el punto correspondiente") )

  let multi = numuno*numdos
  
  console.log(multi)
  
  document.getElementById("multi").innerHTML =
    "El valor del auto es  "  +    multi    +     "  millones de pesos";
}

