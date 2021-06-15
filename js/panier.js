const local= JSON.parse(localStorage.getItem("produit"))
if ( local!=null) {
    document.getElementById("prix").textContent = "Prix: "+(local.prix )+"€ "+" Model:  "+(local.nom)
   
}
