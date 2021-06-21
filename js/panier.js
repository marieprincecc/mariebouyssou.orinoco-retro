const local= JSON.parse(localStorage.getItem("produit"))
const panier= JSON.parse(localStorage.getItem("panier"))
if ( panier!=null) {
    
    let prix= local.prix
    let nom= local.nom
    let img= local.img
    let qte= 1

   const objet = new LignePanier(nom,qte,prix,img);
   panier.push(objet);
   console.log(panier);
   localStorage.setItem("panier",JSON.stringify(panier))
    document.getElementById("image").setAttribute("src",img)
    document.getElementById("titre").textContent= objet.nomArticle
   document.getElementById("prix").textContent = objet.prixArticle +"€ "

  
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

const createRowPanier=(i)=>{

    let row=document.createElement("div")
    row.classList.add("row")
    row.id=("rowPanier"+i)

    return row
}

const createColImagePanier=(i)=>{

    let colImgPanier=document.createElement("div")
    colImgPanier.classList.add("col-3")
    colImgPanier.id=("colImg"+i)

    return colImgPanier
}

const createImgPanier=(i)=>{
    
    let imgPanier=document.createElement("img")
    imgPanier.classList.add("img-thumbnail","w-auto")
    imgPanier.id=("image"+i)

    return imgPanier
}

const createColProduit=(i)=>{

    let colProduit=document.createElement("div")
    colProduit.classList.add("col-4")
    colProduit.id=("colPrixTitre"+i)

    return colProduit
}

const createTitre=(i)=>{

    let titreProduit=document.createElement("span")
    titreProduit.classList.add("h2")
    titreProduit.id=("titre"+i)

    return titreProduit
}

const createPrix=(i)=>{

    let prixProduit=document.createElement("span")
    prixProduit.classList.add("h3")
    prixProduit.id=("prix"+i)

    return prixProduit
}

const createcolQTE=(i)=>{

    let colQTE=document.createElement("div")
    colQTE.classList.add("col-2")
    colQTE.id=("qte"+i)

    return colQTE
}

const createSelect=(i)=>{

    let formSelect=document.createElement("select")
    formSelect.classList.add("form-select")
    formSelect.id=("form-select"+i)

    return formSelect
}

const createOptionQTE=()=>{

    let optionQTE=document.createElement("option")
    optionQTE.setAttribute("selected")
    optionQTE.innerHTML+="Quantité"

    return optionQTE
}

const createOption=()=>{

    for (let i = 0;  i< 10;  i++) {
        let option=document.createElement("option")
        option.setAttribute("value",i)
    }
        return option        
}

const createSousTotal=(i)=>{

    let SousTotal=document.createElement("div")
    SousTotal.classList.add("col-2")
    SousTotal.id=("sousTotal"+i)

    return SousTotal
}

const createSupprimer=(i)=>{

    let corbeil=document.createElement("div")
    corbeil.classList.add("col-1")
    corbeil.id=("supprimer"+i)
    let logo= (' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">'
   )

  corbeil.innerHTML+= logo
}

const createLigneComplete =(i)=>{

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
    row.appendChild(colImg, colProduit, divQTE, sousTotal, supprimer)

    
}

const insereRow=()=>{
    let detailPanier = document.getElementById("detailPanier")
    let row = createLigneComplete()
    detailPanier.appendChild(row)
}