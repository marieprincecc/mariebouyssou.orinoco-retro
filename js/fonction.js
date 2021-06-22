const produitImg= (value, i) =>{            //attribut l'url de l'image dans l'element #appareil +i correspondant
    let imageUrl= value[i].imageUrl;
    let imgCamera = document.getElementById("appareil"+i);
    imgCamera.setAttribute("src",imageUrl);
}

const produitNom= (value,i) =>{             //attribut le nom de la camera dans l'element #titre +i correspondant
    let nomCamera= value[i].name;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nomCamera; 
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

const createURLPanier=()=>{                            //fonction qui créer l'url vers le panier
    const URLProduit=(url,id)=> {                      //constructor url
        this.url=url,
        this.id=id
        return url+id
    }
    let params = new URLSearchParams(document.location.search.substring(1)); //récupère search dans l'url
    let id = params.get("id")

    let URL = URLProduit("panier.html?id=",id);        //nouvel objet
    let link= document.getElementById("ajoutPanier");
    link.setAttribute("href",URL)
}
const createImg= (objet, i) =>{            //attribut l'url de l'image dans l'element #appareil +i correspondant
    let img= objet[i].img;
    let imgCamera = document.getElementById("image"+i);
    imgCamera.setAttribute("src",img);
}

const nomArticle= (objet,i) =>{             //attribut le nom de la camera dans l'element #titre +i correspondant
    let nomArticle= objet[i].nomArticle;  
    let titre = document.getElementById("titre"+i);
    titre.textContent=nomArticle
}

const prix= (objet,i) =>{              //affiche le prix  dans l'element #prix +i correspondant
    let prixArticle= objet[i].price;
    let prix = document.getElementById("prix"+i);
    prix.textContent = prixArticle +"€ "
}
const insereRow=(i)=>{
    let detailPanier = document.getElementById("detailPanier")
    let row = createLigneComplete(i)
    detailPanier.appendChild(row)

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
    optionQTE.setAttribute("selected","")
    optionQTE.innerHTML+="Quantité"

    return optionQTE
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





const Img= (objet, i) =>{            //attribut l'url de l'image dans l'element #appareil +i correspondant
    let img= objet[i].img;
    let imgCamera = document.getElementById("image"+i);
    imgCamera.setAttribute("src",img);
}

const createNomArticle= (objet,i) =>{             //attribut le nom de la camera dans l'element #titre +i correspondant
    let nomArticle= objet[i].nomArticle;  
    let titre = document.getElementById("titre"+i);
    titre.textContent=nomArticle
}

const createPlacePrix= (objet,i) =>{              //affiche le prix  dans l'element #prix +i correspondant
    let prixArticle= objet[i].price;
    let prix = document.getElementById("prix"+i);
    priix.textContent = prixArticle +"€ "
}



