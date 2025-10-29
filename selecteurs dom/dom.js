let titre = document.getElementById("titre-principal");
console.log("Texte du titre : " + titre.innerText);
titre.innerHTML = "changed";
console.log("Texte du titre : " + titre.innerText);

let bouton = document.querySelector(".btn");
console.log("Texte du bouton : " + bouton.innerText);
bouton.innerHTML = "changed";
console.log("Texte du bouton : " + bouton.innerText);