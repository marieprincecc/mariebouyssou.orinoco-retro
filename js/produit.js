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
            createURLPanier()
            optionProduit(value)

            let prixProduit= value.price
            let nomCamera= value.name
            let imgCamera= value.imageUrl
            const produit={
                nom:nomCamera,
                prix:prixProduit,
                img:imgCamera
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

const createOption=(i)=>{               //creation de la ligne option value i et id i
    let option=document.createElement("option")
    option.setAttribute("value",i)
    option.id=(i)

    return option
}
const inserOption=(i)=>{                //insertion de la ligne option a sa place
    let select= document.getElementById("option")
    let option= createOption(i)

    select.appendChild(option)
}

const ajoutOption=(value,i)=>{                  // attribution d'une option par ligne option
    let arrayOption = value.lenses;
    let selectOption= document.getElementById(i)
    selectOption.innerHTML+=arrayOption[i]
}
 
const optionProduit=(value)=>{              //boucle pour cree une ligne par option, et leur donner leur valeur
    let arrayOption = value.lenses;
    for (let i = 0; i < arrayOption.length; i++){
        inserOption(i)
        ajoutOption(value,i)
    }
    
}


produitSelect();                 //appel la fonction 