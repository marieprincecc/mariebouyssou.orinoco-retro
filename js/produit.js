function produit(i){
    fetch("http://localhost:3000/api/cameras") //appel des données a l'api
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value)
    let url= value[i].imageUrl;
    let nomCam= value[i].name;
    let prixProduit= value[i].price;
    let descriptionProduit= value[i].description;
    let lenseProduit= value[i].lenses;
    console.log(url, nomCam, prixProduit, descriptionProduit, lenseProduit);
    
                                            //execution des fonctions
    produitImg(value,i);
    produitNom(value,i); 
    produitPrice(value,i);
    produitDescription(value,i);
    produitLense(value,i);
    })
    
    .catch(function(err) {
        console.log("une erreure est survenue"); //reponse en cas d'erreur
        console.log(err);
    })}

produit(0)