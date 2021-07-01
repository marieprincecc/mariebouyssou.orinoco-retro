function produit(){
    ///////////////////////////////RECUPERATION DES DONNEES//////////////////////////////////////////
    fetch("http://localhost:3000/api/cameras") 
        .then(function(res) {
            if (res.ok) {
                return res.json()          //conversion des données
            }
        })
        .then(function(value) {
    //////////////////BOUCLE D'ITERATION POUR CREER LES ELEMENTS EN HTML SELON LE NOMBRE D'ARTICLE
            for (let i = 0; i < value.length; i++) {      
    
                insereCol(i)                            // appel les fonctions
                produitImg(value,i)
                produitNom(value,i)
                produitPrice(value,i)
                createURL(value,i)
            }  
        })

        .catch(function(err) {
            console.log("une erreure est survenue") 
            console.log(err)                     //afiche la reponse dans la console en cas d'erreur
        })
}

//////////////////////////////////CREATION DES ELEMENTS////////////////////////////////////

const createLodgingCardTitle=(i)=>{             //fonction, créé le h4 + ses classes(titre de la carte)
 
    let cardTitle=document.createElement("h4")
    cardTitle.classList.add("card-title")
    cardTitle.id=("titre"+i)

    return cardTitle
}

const createLodgingCardText=(i)=>{              //fonction, créé le p + ses classes (texte prix de la carte)
  
    let cardText=document.createElement("p")
    cardText.classList.add("card-text")
    cardText.id=("prix"+i)

    return cardText
}

const createLodgingImg=(i)=>{                   //fonction, créé img + ses classes (image de la carte)
    
    let image= document.createElement("img")
    image.classList.add("card-img-top")
    image.id = ("appareil"+i)
    
    return image
}

const createLinkCard=(i)=>{                          //fonction, créé a + ses classes (btn "voir plus" de la carte)
    let link= document.createElement("a")
    link.classList.add("btn","btn-secondary","stretched-link","text-white")
    link.id= ("lienAppareil"+i)   
    link.innerHTML="voir plus"   

    return link
}

const createLodgingCardBody=(i)=>{                      //fonction, créé le body de la carte en y incluant le titre, le texte, et le lien

    let cardBody= document.createElement("div")
    cardBody.classList.add("card-body","text-center")

    let cardTitle= createLodgingCardTitle(i)
    cardBody.appendChild(cardTitle)

    let cardText= createLodgingCardText(i)
    cardBody.appendChild(cardText)

    let link= createLinkCard(i)
    cardBody.appendChild(link)

    return cardBody
}

const createLodgingCard=(i)=>{                  //fonction, créé la carte et ses contenus

    let card= document.createElement("div")
    card.classList.add("card")

    let image= createLodgingImg(i)
    card.appendChild(image)

    let cardBody= createLodgingCardBody(i)
    card.appendChild(cardBody)

    return card
}

const createLodgingCol=(i)=>{               //créer la div col et y place la card

    let col= document.createElement("div")
    col.classList.add("col-12","col-md-6","col-lg-4")

    const card= createLodgingCard(i)
    col.appendChild(card)

    return col
}

const insereCol=(i)=>{                          //insere la div col a sa place dans le html

    let row= document.getElementById("rowProduit")
    let col= createLodgingCol(i)
    row.appendChild(col)
}

//////////////////////////////AFFICHAGE DES CONTENUS//////////////////////////////////////////

const produitImg= (value, i) =>{            //affichage de l'image des articles
    let imageUrl= value[i].imageUrl;
    let imgCamera = document.getElementById("appareil"+i);
    imgCamera.setAttribute("src",imageUrl);
}

const produitNom= (value,i) =>{             //affichage du nom des articles
    let nomCamera= value[i].name;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nomCamera; 
}

const produitPrice= (value,i) =>{              //affiche le prix  des articles
    let prixProduit= value[i].price;
    let prix = document.getElementById("prix"+i);
    prix.innerHTML += prixProduit+"€";
}
/////////////////////////////////CREATION DE L'URL D'UN PRODUIT//////////////////////////////////////

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



produit()           //appel la fonction produit
