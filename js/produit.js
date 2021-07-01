const produitSelect=()=>{

   /////////////////////RECUPERATION DE L'ID////////////////////////////////////////////////
    let params = new URLSearchParams(document.location.search.substring(1)); 
    let id = params.get("id")   
                       
   ////////////////////////RECUPERATION DES DONNE DE L'ARTICLE SELECTIONNE//////////////////

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
            optionProduit(value)
            
            
            let prixProduit= value.price
            let nomCamera= value.name
            let imgCamera= value.imageUrl
            let idCamera= value._id
            //object produit
            let produit={
                nom:nomCamera,
                prix:prixProduit,
                img:imgCamera,
                id: idCamera,
                qte:1
            }
            
            /////////////////////evenement ajout panier au click//////////////////////
            let btn= document.getElementById("ajoutPanier")

            btn.addEventListener('click',()=>{                
                if (localStorage.panier==null) {      //si pas de panier on met produit dans panier et on envoi panier dans le localStorage
                    panier.push(produit)
                    localStorage.setItem("panier",JSON.stringify(panier))  
           
                }else{           //sinon on recupère panier on verifie, si le produit y est on lui ajoute la +1 a la quantité
           
                    let panier=JSON.parse(localStorage.getItem("panier"))
                    console.log(produit);
                    console.log(panier);
                    const verif = panier.find(item => item.id === produit.id)
                    if(verif){
                        verif.qte++
                    }else{panier.push(produit)      //sinon on rajoute le produit dans panier
                    }     
             
                
                    localStorage.setItem("panier",JSON.stringify(panier)) //on renvoi panier dans le localStorage
                }
           })
            
            
           

        })
        .catch(function(err) {
            console.log("une erreure est survenue"); //reponse en cas d'erreur
            console.log(err);                          //affiche l'erreure dans la console
        })
}

const panier=[]    
   
    ///////////////////////////////AFFICHAGE DES CONTENU//////////////////////////////

const produitImgSelect= (value) =>{            //affichage de l'image 
    let imageUrl= value.imageUrl;
    let imgCamera = document.getElementById("appareil");
    imgCamera.setAttribute("src",imageUrl);
}
    
const produitNomSelect= (value) =>{             //affichage du nom
    let nomCamera= value.name;  
    let titre = document.getElementById("titre");
    titre.innerHTML += nomCamera; 
}
    
const produitPriceSelect= (value) =>{              //affichage du prix 
    let prixProduit= value.price;
    let prix = document.getElementById("prix");
    prix.innerHTML += prixProduit+"€";
}
    
const produitDescriptionSelect=(value)=>{            //affichage de la description  
    let descriptionProduit= value.description;
    let description = document.getElementById("description");
     description.innerHTML += descriptionProduit;
}
/////////////////////////CREATION DES OPTIONS/////////////////////////////

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