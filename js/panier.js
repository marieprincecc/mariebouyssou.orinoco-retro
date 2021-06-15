const local= JSON.parse(localStorage.getItem("produit"))
if ( local!=null) {
    
    let prix= local.prix
    let nom= local.nom
    let qte= 1

   const objet = new LignePanier(nom,qte,prix);
   console.log(objet);

   document.getElementById("prix").textContent = "Prix: "+(objet.prixArticle)+"€ "+" Article:  "+(objet.nomArticle)+"   quantité:  "+(objet.qteArticle)
}

function LignePanier (nom, qte, prix)           //objet lignePanier 
{
    this.nomArticle = nom;
    this.qteArticle = qte;
    this.prixArticle = prix;
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

function Panier()                                           //objet panier
{
    this.liste = [];
    this.ajouterArticle = function(nom, qte, prix)
    { 
        var index = this.getArticle(nom);
        if (index == -1) this.liste.push(new LignePanier(nom, qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function()
    {
        var total = 0;
        for(var i = 0 ; i < this.liste.length ; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
    this.getArticle = function(nom)
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (code == this.liste[i].getNom()) return i;
        return -1;
    }
    this.supprimerArticle = function(nom)
    {
        var index = this.getArticle(nom);
        if (index > -1) this.liste.splice(index, 1);
    }
}