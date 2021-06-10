function produit(){
    fetch("http://localhost:3000/api/cameras") //appel des données a l'api
        .then(function(res) {
            if (res.ok) {
                return res.json()          //convertie les données json
            }
        })
        .then(function(value) {
            for (let i = 0; i < value.length; i++) {      //boucle tant qu'il y a des produit pour créer l'element html et son contenue
    
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

const createLinkCard=(i)=>{                             //fonction, créé a + ses classes (btn "voir plus" de la carte)
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

const createLodgingCol=(i)=>{               //la div col et y place la card

    let col= document.createElement("div")
    col.classList.add("col-12","col-md-6","col-lg-4")

    const card= createLodgingCard(i)
    col.appendChild(card)

    return col
}

const insereCol=(i)=>{                          //place la div col a sa place dans le html

    let row= document.getElementById("rowProduit")
    let col= createLodgingCol(i)
    row.appendChild(col)
}

produit()           //appel la fonction produit
 