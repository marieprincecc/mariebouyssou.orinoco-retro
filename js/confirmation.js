function confirmation() {
    const recap= JSON.parse(localStorage.getItem("recap"))
console.log(recap);

let idDeCommande= document.getElementById("id")


let id= recap.orderId
let products= recap.products

for (let i = 0; i < products.length; i++) {
totalDeLaCommande(products, i)

}

idDeCommande.textContent += " " + id

const reducer = (accumulator, currentValue) => accumulator + currentValue
            let prixTotale= totalCommande.reduce(reducer)
            let affichageTotal = document.getElementById("total")
            affichageTotal.innerHTML =( prixTotale + "€")

}
const totalDeLaCommande=(products,i)=>{

    let prixArticleDansLePanier = products[i].price
    totalCommande.push(prixArticleDansLePanier)
    console.log(totalCommande);
}
  

let totalCommande=[]

confirmation()

