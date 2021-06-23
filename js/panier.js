function monPanier() {
    
    const panier= JSON.parse(localStorage.getItem("panier"))

            if ( panier!=null) {
                panierNonVide()
      
            for (let i = 0; i < panier.length; i++) {
                insereRow(i)
                createImg(panier,i)
                nomArticle(panier,i)
                createPlacePrix(panier,i)
                total(panier,i)
            }
            } else {
                panierVide()
            }
    
    
            const reducer = (accumulator, currentValue) => accumulator + currentValue
            let prixTotale= prixTotalPanier.reduce(reducer)
            let affichageTotal = document.getElementById("total")
            affichageTotal.innerHTML =("Prix total:"+ prixTotale + "€")
            
}
    
const total=(panier,i)=>{

    let prixArticleDansLePanier = panier[i].prix
    prixTotalPanier.push(prixArticleDansLePanier)
}

const panierVide=()=>{                                  //affichage panier vide
    let p = document.createElement("p")
    p.classList.add("h2", "text-center")
    p.innerHTML= "Votre panier est vide"
    let detailPanier = document.getElementById("detailPanier")
    detailPanier.appendChild(p)
   
}

const panierNonVide=()=>{                                  //affichage panier vide
    let p = document.createElement("p")
    p.classList.add("h2", "text-center")
    p.innerHTML= "Contenu de votre panier"
    let detailPanier = document.getElementById("detailPanier")
    detailPanier.appendChild(p)

}

const createRowPanier=(i)=>{                    //creation ligne de panier

    let row=document.createElement("div")
    row.classList.add("row")
    row.id=("rowPanier"+i)

    return row
}

const createColImagePanier=(i)=>{                   //création col pour image

    let colImgPanier=document.createElement("div")
    colImgPanier.classList.add("col-4")
    colImgPanier.id=("colImg"+i)

    return colImgPanier
}

const createImgPanier=(i)=>{                        // creation balise img panier
    
    let imgPanier=document.createElement("img")
    imgPanier.classList.add("img-thumbnail","w-auto")
    imgPanier.id=("image"+i)

    return imgPanier
}

const createColProduit=(i)=>{                       //creation div contenant titre et prix

    let colProduit=document.createElement("div")
    colProduit.classList.add("col-4")
    colProduit.id=("colPrixTitre"+i)

    return colProduit
}

const createListe=(i)=>{
    let liste= document.createElement("ul")
    liste.classList.add("list-unstyled")
    liste.id=("articlePrixNom"+i)

    return liste
}

const createTitre=(i)=>{                    //creation span titre

    let titreProduit=document.createElement("li")
    titreProduit.classList.add("h3")
    titreProduit.id=("titre"+i)

    return titreProduit
}

const createPrix=(i)=>{                     //creation span prix

    let prixProduit=document.createElement("li")
    prixProduit.classList.add("h4")
    prixProduit.id=("prix"+i)

    return prixProduit
}


const createBtnSupProduit=(i)=>{                       //creation div contenant titre et prix

    let btnSupProduit=document.createElement("button")
    btnSupProduit.classList.add("col-4","btn","btn-secondary")
    btnSupProduit.id=("btnSupProduit"+i)
    btnSupProduit.textContent = "Retirer du panier"

    return btnSupProduit
}

const createLigneComplete =(i)=>{       //appel des fonction pour crée toute la ligne 

    let row = createRowPanier(i)
    let colImg = createColImagePanier(i)
    let imgPanier = createImgPanier(i)
    let colProduit = createColProduit(i)
    let liste = createListe(i)
    let titre = createTitre(i)
    let prix = createPrix(i)
    let btnSupProduit = createBtnSupProduit(i)

    colImg.appendChild(imgPanier)
    colProduit.appendChild(liste)
    liste.appendChild(titre)
    liste.appendChild(prix)
    row.appendChild(colImg)
    row.appendChild(colProduit)
    row.appendChild(btnSupProduit)
   
    return row
}

const insereRow=(i)=>{                  //insertion de la ligne complete dans le code html
    let detailPanier = document.getElementById("detailPanier")
    let row = createLigneComplete(i)
    detailPanier.appendChild(row)

}

const createImg= (panier, i) =>{            //attribut l'url de l'image dans l'element #appareil +i correspondant
    let img= panier[i].img;
    let imgCamera = document.getElementById("image"+i);
    imgCamera.setAttribute("src",img);
}

const nomArticle= (panier,i) =>{             //attribut le nom de la camera dans l'element #titre +i correspondant
    let nom = panier[i].nom;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nom
}

const createPlacePrix= (panier,i) =>{              //affiche le prix  dans l'element #prix +i correspondant
    let prixArticle= panier[i].prix;
    let prix = document.getElementById("prix"+i);
    prix.textContent = prixArticle +"€ "
}

let toutSupprimer = document.getElementById("corbeil")          //tout supprimer du panier dans storage
toutSupprimer.addEventListener("click",(e)=>{
e.preventDefault
localStorage.clear()
alert("Votre panier est vide")
window.location.reload()
})

const verifFormulaire=()=> {
    let prenom= document.getElementById("firstname")
    let nom= document.getElementById("lastname")
    let dateDeNaissance=document.getElementById("dateDeNaissance")
    let adress = document.getElementById("adresse")
    let city = document.getElementById("ville")
    let mail = document.getElementById("e-mail")
}
let prixTotalPanier=[]

monPanier()
