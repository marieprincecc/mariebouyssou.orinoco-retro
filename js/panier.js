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

const createRowPanier=()=>{

    let row=document.createElement("div")
    row.classList.add("row")
    row.id=("rowPanier")

    return row
}

const createColImagePanier=()=>{

    let colImgPanier=document.createElement("div")
    colImgPanier.classList.add("col-3")
    colImgPanier.id=("colImg")

    return colImgPanier
}

const createImgPanier=()=>{
    
    let imgPanier=document.createElement("img")
    imgPanier.classList.add("img-thumbnail","w-auto")
    imgPanier.id=("image")

    return imgPanier
}

const createColProduit=()=>{

    let colProduit=document.createElement("div")
    colProduit.classList.add("col-4")
    colProduit.id=("colPrixTitre")

    return colProduit
}

const createTitre=()=>{

    let titreProduit=document.createElement("span")
    titreProduit.classList.add("h2")
    titreProduit.id=("titre")

    return titreProduit
}

const createPrix=()=>{

    let prixProduit=document.createElement("span")
    prixProduit.classList.add("h3")
    prixProduit.id=("prix")

    return prixProduit
}

const createcolQTE=()=>{

    let colQTE=document.createElement("div")
    colQTE.classList.add("col-2")
    colQTE.id=("qte")

    return colQTE
}

const createSelect=()=>{

    let formSelect=document.createElement("select")
    formSelect.classList.add("form-select")
    formSelect.id=("form-select")

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

const createSousTotal=()=>{

    let SousTotal=document.createElement("div")
    SousTotal.classList.add("col-2")
    SousTotal.id=("sousTotal")

    return SousTotal
}

const createSupprimer=()=>{

    let corbeil=document.createElement("div")
    corbeil.classList.add("col-1")
    corbeil.id=("supprimer")
    let logo= (' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">'
    '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>'
    '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>'
  '</svg>')

  corbeil.innerHTML+= logo
}

const createLigneComplete =()=>{

    let row = createRowPanier()
    let colImg = createColImagePanier()
    let imgPanier = createImgPanier()
    let colProduit = createColProduit()
    let titre = createTitre()
    let prix = createPrix()
    let divQTE = createcolQTE()
    let select = createSelect()
    let optionSelect = createOptionQTE()
    let option = createOption()
    let sousTotal = createSousTotal()
    let supprimer = createSupprimer()

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