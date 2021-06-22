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
   console.log(panier[1].nomArticle);
   localStorage.setItem("panier",JSON.stringify(panier))
   for (let i = 0; i < panier.length; i++) {
    insereRow(i)
      createImg(objet,i)
      createNomArticle(objet,i)
      createPlacePrix(objet,i)}
   
  
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
