function produit(i){
fetch("http://localhost:3000/api/cameras") //appel des données a l'api
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value)
let url= value[i].imageUrl;
let nomCam= value[i].name;
let prixProduit= value[i].price;

console.log(url, nomCam,prixProduit);
                                        //execution des fonctions
produitImg(value,i);
produitNom(value,i); 
produitPrice(value,i);

})

.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
    console.log(err);
})}

const produitImg= (value, i) =>{            //affiche les images 
    let url= value[i].imageUrl;
    let imgCam = document.getElementById("appareil"+i);
    imgCam.setAttribute("src",url);
}

const produitNom= (value,i) =>{             //affiche le nom
    let nomCam= value[i].name;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nomCam; 
}

const produitPrice= (value,i) =>{              //affiche le prix
    let prixProduit= value[i].price;
    let prix = document.getElementById("prix"+i);
    prix.innerHTML += prixProduit+"€";
}

const toutElt=()=>{                     //boucle produit
    for (let i = 0; i < 5; i++) {
        produit(i)
    }
}


const elt= () =>{                       // crée le html en fonction du nombre d'article
    for (let i=0; i<6; i++){
        let row= document.getElementById("rowProduit");
       
     
       
}} 




toutElt();      //execute toutElt