

//Spojování řetězců
var a='Chello';



document.getElementById("app").innerHTML =a +`
<br/> <br>
`;
document.getElementById("app").innerHTML = document.getElementById("app").innerHTML + 'ahoj';

//Sčítání
var x=2;
var y=7;
var z=x+y;
document.getElementById("daun").innerHTML = "Cauky 2 plus 7 se rovná "+ z; 
//Příkazy
/*
var year=prompt('Ve kterém roce jsi se narodil','');




if(year<2000){
alert('Jsi nula');
} else {
  alert('Jsi bomba');
}
*/

/*
var osmnact=confirm('bylo vám osmnáct?');
alert(osmnact);
*/

var cislo=18;
var osmnact;
if(cislo<18){
  osmnact='neBylo';
} else{
  osmnact='Bylo';
}



document.getElementById("cislo").innerHTML = osmnact;
//alternativa předchozího
osmnact=(cislo<18)? 'neBylo' :'Bylo' ;

document.getElementById("cislo").innerHTML = document.getElementById("cislo").innerHTML +osmnact;

//var promenna= prompt('Zadej cislo','');
//alert(+promenna+100);

function Vypiscislo(x)
{
  return +x-3
}
//alert(Vypiscislo(7));


for(var i=0;i<7;i++)
    alert(Vypiscislo(i))