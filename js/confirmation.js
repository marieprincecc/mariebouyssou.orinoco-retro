function confirmation() {
    const recap= JSON.parse(localStorage.getItem("recap"))
console.log(recap);

let idDeCommande= document.getElementById("id")
let total= document.getElementById("total")
//let contact= document.getElementById("contact")

let id= recap.orderId
//let total= recap.products.price
//let adress= recap.contact
console.log(id,total);
idDeCommande.textContent += " " + id
total.textContent += " " + total

}
confirmation()

