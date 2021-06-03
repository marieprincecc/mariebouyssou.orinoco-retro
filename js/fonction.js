const produitImg= (value, i) =>{            //affiche les images 
    let url= value[i].imageUrl;
    let imgCam = document.getElementById("appareil"+i);
    imgCam.setAttribute("src",url);
}

const produitNom= (value,i) =>{             //affiche le nom
    let nomCam= value[i].name;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nomCam; 
}

const produitPrice= (value,i) =>{              //affiche le prix
    let prixProduit= value[i].price;
    let prix = document.getElementById("prix"+i);
    prix.innerHTML += prixProduit+"€";
}

const produitDescription=(value,i)=>{            //affiche la description
    let descriptionProduit= value[i].description;
    let description = document.getElementById("description"+i);
    description.innerHTML += descriptionProduit;
}
const produitLense= (value,i) =>{                      //affiche l'array des personnalisations
    let lenseProduit= value[i].lenses;
    let lenses =document.getElementById("persoProduit"+i);
    lenses.innerHTML += "Modèles disponibles: "+lenseProduit;
}