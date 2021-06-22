function panier() {
    

const local= JSON.parse(localStorage.getItem("produit"))
const panier= JSON.parse(localStorage.getItem("panier"))

if ( panier!=null) {
    
    let prix= local.prix
    let nom= local.nom
    let img= local.img
    let qte= 1

   const objet = new LignePanier(nom,qte,prix,img);
   
   //console.log(objet);
   panier.push(objet);
   console.log(panier[0].nomArticle);
   localStorage.setItem("panier",JSON.stringify(panier))
   
  
   for (let i = 0; i < panier.length; i++) {
    insereRow(i)
    createImg(panier,i)
    nomArticle(panier,i)
    createPlacePrix(panier,i)
   }
}
}
  function LignePanier (nom, qte, prix,img)           //objet lignePanier 
{
    this.nomArticle = nom;
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.img= img;
    this.ajouterQte = function(qte)
    {
        this.qteArticle += qte;                         //ajoute la quatité a quantité
    }
    this.getPrixLigne = function()
    {
        var resultat = this.prixArticle * this.qteArticle;          //total de la ligne (prix*quantité)
        return resultat;
    }
    this.getNom = function() 
    {
        return this.nomArticle;                                     //nom de l'article
    }
}

const createRowPanier=(i)=>{                    //creation ligne de panier

    let row=document.createElement("div")
    row.classList.add("row")
    row.id=("rowPanier"+i)

    return row
}

const createColImagePanier=(i)=>{                   //création col pour image

    let colImgPanier=document.createElement("div")
    colImgPanier.classList.add("col-3")
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

const createTitre=(i)=>{                    //creation span titre

    let titreProduit=document.createElement("span")
    titreProduit.classList.add("h2")
    titreProduit.id=("titre"+i)

    return titreProduit
}

const createPrix=(i)=>{                     //creation span prix

    let prixProduit=document.createElement("span")
    prixProduit.classList.add("h3")
    prixProduit.id=("prix"+i)

    return prixProduit
}

const createcolQTE=(i)=>{               //creation de la col pour les quantité

    let colQTE=document.createElement("div")
    colQTE.classList.add("col-2")
    colQTE.id=("qte"+i)

    return colQTE
}

const createSelect=(i)=>{               //creation formSelect

    let formSelect=document.createElement("select")
    formSelect.classList.add("form-select")
    formSelect.id=("form-select"+i)

    return formSelect
}

const createOptionQTE=()=>{         //creation option "quantité"

    let optionQTE=document.createElement("option")
    optionQTE.setAttribute("selected","")
    optionQTE.innerHTML+="Quantité"

    return optionQTE
}

const createOption=()=>{                //creation option + boucle  0 a 10

    for (let i = 0;  i< 10;  i++) {
        let option=document.createElement("option")
        option.setAttribute("value",+i)
        return option 
    }
               
}

const createSousTotal=(i)=>{                    //creation sous total

    let SousTotal=document.createElement("div")
    SousTotal.classList.add("col-2")
    SousTotal.id=("sousTotal"+i)

    return SousTotal
}

const createSupprimer=(i)=>{                    //creation logo poubelle

    let corbeil=document.createElement("div")
    corbeil.classList.add("col-1")
    corbeil.id=("supprimer"+i)
    let logo= (' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">'
   )

  corbeil.innerHTML+= logo
  return corbeil
}


const createLigneComplete =(i)=>{       //appel des fonction pour crée toute la ligne 

    let row = createRowPanier(i)
    let colImg = createColImagePanier(i)
    let imgPanier = createImgPanier(i)
    let colProduit = createColProduit(i)
    let titre = createTitre(i)
    let prix = createPrix(i)
    let divQTE = createcolQTE(i)
    let select = createSelect(i)
    let optionSelect = createOptionQTE()
    let option = createOption()
    let sousTotal = createSousTotal(i)
    let supprimer = createSupprimer(i)

    colImg.appendChild(imgPanier)
    colProduit.appendChild(titre, prix)
    select.appendChild(optionSelect, option)
    divQTE.appendChild(select)
    row.appendChild(colImg)
    row.appendChild(colProduit)
    row.appendChild(divQTE)
    row.appendChild(sousTotal)
    row.appendChild(supprimer)
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
    let nomArticle = panier[i].nomArticle;  
    let titre = document.getElementById("titre"+i);
    //titre.innerHTML += nomArticle
    console.log(nomArticle);
}

const createPlacePrix= (panier,i) =>{              //affiche le prix  dans l'element #prix +i correspondant
    let prixArticle= panier[i].prixArticle;
    let prix = document.getElementById("prix"+i);
    //prix.textContent = prixArticle +"€ "
    console.log(prixArticle);
}
panier()