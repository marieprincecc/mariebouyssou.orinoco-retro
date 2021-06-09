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
const createURL=(value,i)=>{
    let idProduit= value[i]._id;
    const URLProduit=(url,id)=> {
        this.url=url,
        this.id=id
        return url+id
    };
    let URL = URLProduit("html/produit.html?id=",idProduit);
    let link= document.getElementById("lienAppareil"+i);
    link.setAttribute("href",URL)
}
//const idUnProduit= (value,i) =>{
   // let idProduit= value[i]._id;
    //let link= document.getElementById("lienAppareil"+i)
    //let urlPage= ("html/produit.html/?id="+idProduit)
   //link.setAttribute("href",urlPage)}

