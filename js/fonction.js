const produitImg= (value, i) =>{            //attribut l'url de l'image dans l'element #appareil +i correspondant
    let url= value[i].imageUrl;
    let imgCam = document.getElementById("appareil"+i);
    imgCam.setAttribute("src",url);
}

const produitNom= (value,i) =>{             //attribut le nom de la camera dans l'element #titre +i correspondant
    let nomCam= value[i].name;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nomCam; 
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

