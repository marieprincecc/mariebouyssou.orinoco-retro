function panier() {
    

const local= JSON.parse(localStorage.getItem("produit"))
const panier= JSON.parse(localStorage.getItem("panier"))
console.log(panier);

if ( panier!=null) {
    panierNonVide()
    let prix= local.prix
    let nom= local.nom
    let img= local.img
    let qte= 1

   const objet = new LignePanier(nom,qte,prix,img);
   console.log(objet);
   //console.log(objet);
  
   // panier.push(objet);

  
   localStorage.setItem("panier",JSON.stringify(panier))
   
  
   for (let i = 0; i < panier.length; i++) {
    insereRow(i)
    createImg(panier,i)
    nomArticle(panier,i)
    createPlacePrix(panier,i)
    affichageQte(panier,i)
   }
} else {
   panierVide()
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

const createListe=(i)=>{
    let liste= document.createElement("ul")
    liste.classList.add("list-unstyled")
    liste.id=("articlePrixNom"+i)
    return liste
}
const createTitre=(i)=>{                    //creation span titre

    let titreProduit=document.createElement("li")
    
    titreProduit.id=("titre"+i)

    return titreProduit
}

const createPrix=(i)=>{                     //creation span prix

    let prixProduit=document.createElement("li")
    
    prixProduit.id=("prix"+i)

    return prixProduit
}


const createcolQTE=(i)=>{               //creation de la col pour les quantité

    let colQTE=document.createElement("div")
    colQTE.classList.add("col-2")
    colQTE.id=("colQte"+i)

    return colQTE
}

const btnSup = ()=>{
    let btnSup= document.createElement("button")
    btnSup.classList.add("btn","btn-light")
    btnSup.id=("plus")
    btnSup.textContent += "+"
    return btnSup
}

const btnMin = ()=>{
    let btnMin= document.createElement("button")
    btnMin.classList.add("btn","btn-light")
    btnMin.id=("moin")
    btnMin.textContent += "-"
    return btnMin
}

const createQte=(i)=>{
    let qte= document.createElement("span")
   
    qte.id=("qte"+i)
    return qte
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
    let liste = createListe(i)
    let titre = createTitre(i)
    let prix = createPrix(i)
    let colQte = createcolQTE(i)
    let plus = btnSup()
    let moin = btnMin()
    let qte= createQte(i)
    let sousTotal = createSousTotal(i)
    let supprimer = createSupprimer(i)

    colImg.appendChild(imgPanier)
    colProduit.appendChild(liste)
    liste.appendChild(titre)
    liste.appendChild(prix)
    colQte.appendChild(moin)
    colQte.appendChild(qte)
    colQte.appendChild(plus)
    row.appendChild(colImg)
    row.appendChild(colProduit)
    row.appendChild(colQte)
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
    let nom = panier[i].nom;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nom
    console.log(nom);
}

const createPlacePrix= (panier,i) =>{              //affiche le prix  dans l'element #prix +i correspondant
    let prixArticle= panier[i].prix;
    let prix = document.getElementById("prix"+i);
    prix.textContent = prixArticle +"€ "
    console.log(prixArticle);
}

const affichageQte =(panier,i)=>{
    let qteArticle= panier[i].qte
    let qte = document.getElementById("qte"+i)
    qte.innerHTML += qteArticle
}

panier()