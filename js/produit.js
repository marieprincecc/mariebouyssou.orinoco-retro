const produitSelect=()=>{
   
    let params = new URLSearchParams(document.location.search.substring(1)); //récupère search dans l'url
    let id = params.get("id")                      //extrait l'id de l'url
   
    fetch("http://localhost:3000/api/cameras/"+id) //appel des données a l'api
    
        .then(function(res) {
                if (res.ok) {
                    return res.json();              //convertie les données json
                }
        })
        .then(function(value) {
                                    
            produitImgSelect(value)          //appel des fonctions
            produitPriceSelect(value)
            produitNomSelect(value)
            produitDescriptionSelect(value)
            produitLenseSelect(value)
            createURLPanier()
            let prixProduit= value.price
            let nomCamera= value.name
            const produit={
                nom:nomCamera,
                prix:prixProduit
            }
            localStorage.setItem("produit",JSON.stringify(produit))
        })
    
        .catch(function(err) {
            console.log("une erreure est survenue"); //reponse en cas d'erreur
            console.log(err);                          //affiche l'erreure dans la console
        })
}
const produitImgSelect= (value) =>{            //attribut l'url de l'image dans l'element #appareil 
    let imageUrl= value.imageUrl;
    let imgCamera = document.getElementById("appareil");
    imgCamera.setAttribute("src",imageUrl);
}
    
const produitNomSelect= (value) =>{             //attribut le nom de la camera dans l'element #titre 
    let nomCamera= value.name;  
    let titre = document.getElementById("titre");
    titre.innerHTML += nomCamera; 
}
    
const produitPriceSelect= (value) =>{              //affiche le prix  dans l'element #prix
    let prixProduit= value.price;
    let prix = document.getElementById("prix");
    prix.innerHTML += prixProduit+"€";
}
    
const produitDescriptionSelect=(value)=>{            //affiche la description  dans l'element #description
    let descriptionProduit= value.description;
    let description = document.getElementById("description");
     description.innerHTML += descriptionProduit;
}
const produitLenseSelect= (value) =>{                      //affiche l'array des personnalisations  dans l'element #persoProduit
    let lenseProduit= value.lenses;
    let lenses =document.getElementById("persoProduit");
    lenses.innerHTML += "Modèles disponibles: "+lenseProduit;
}   
 
produitSelect()                 //appel la fonction produitSelect



