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

