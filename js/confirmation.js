////////////////////RECUPERATION DES DONN2ES ET AFFICHAGE DES INFOS DE COMMANDE/////////////////////
function confirmation() {
  
    const recap= JSON.parse(localStorage.getItem("recap"))
console.log(recap);
const total=JSON.parse(localStorage.getItem("total"))
let idDeCommande= document.getElementById("id")


let id= recap.orderId



idDeCommande.textContent += " " + id


            let affichageTotal = document.getElementById("total")
            affichageTotal.innerHTML =( total + "€")

}

  



confirmation()

