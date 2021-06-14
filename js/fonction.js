const produitImg= (value, i) =>{            //attribut l'url de l'image dans l'element #appareil +i correspondant
    let imageUrl= value[i].imageUrl;
    let imgCamera = document.getElementById("appareil"+i);
    imgCamera.setAttribute("src",imageUrl);
}

const produitNom= (value,i) =>{             //attribut le nom de la camera dans l'element #titre +i correspondant
    let nomCamera= value[i].name;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nomCamera; 
}

const produitPrice= (value,i) =>{              //affiche le prix  dans l'element #prix +i correspondant
    let prixProduit= value[i].price;
    let prix = document.getElementById("prix"+i);
    prix.innerHTML += prixProduit+"€";
}

const produitDescription=(value,i)=>{            //affiche la description  dans l'element #description +i correspondant
    let descriptionProduit= value[i].description;
    let description = document.getElementById("description"+i);
    description.innerHTML += descriptionProduit;
}
const produitLense= (value,i) =>{                      //affiche l'array des personnalisations dans l'element #persoProduit +i correspondant
    let lenseProduit= value[i].lenses;
    let lenses =document.getElementById("persoProduit"+i);
    lenses.innerHTML += "Modèles disponibles: "+lenseProduit;
}
const createURL=(value,i)=>{                            //fonction qui créer l'url d'un produit
    let idProduit= value[i]._id;
    const URLProduit=(url,id)=> {                      //constructor url
        this.url=url,
        this.id=id
        return url+id
    }
    let URL = URLProduit("html/produit.html?id=",idProduit);        //nouvel objet
    let link= document.getElementById("lienAppareil"+i);
    link.setAttribute("href",URL)
}

const createURLPanier=()=>{                            //fonction qui créer l'url vers le panier
    const URLProduit=(url,id)=> {                      //constructor url
        this.url=url,
        this.id=id
        return url+id
    }
    let params = new URLSearchParams(document.location.search.substring(1)); //récupère search dans l'url
    let id = params.get("id")

    let URL = URLProduit("panier.html?id=",id);        //nouvel objet
    let link= document.getElementById("ajoutPanier");
    link.setAttribute("href",URL)
}


