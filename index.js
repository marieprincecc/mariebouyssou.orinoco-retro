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

const createLodgingCardTitle=(i)=>{

    const cardTitle=document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.id="titre"+i;
    return cardTitle;
}
const createLodgingCardText=(i)=>{
    const cardText=document.createElement("p");
    cardText.classList.add("card-text");
    cardText.id="prix"+i;
    return cardText;
}
const createLodgingImg=(i)=>{
    const image= document.createElement('img');
    image.classList.add('card-img-top');
    image.id= "appareil"+i;
    return image;
}

const createLodgingCardBody=()=>{
    const cardBody= document.createElement('div');
    cardBody.classList.add("card-body"+"text-center");

    const cardTitle= createLodgingCardTitle();
    cardBody.appendChild(cardTitle);

    const cardText= createLodgingCardText();
    cardBody.appendChild(cardText);

    return cardBody;
}

const createLodgingCard=()=>{
    const card= document.createElement('card');
    card.classList.add('card');

    const image= createLodgingImg();
    card.appendChild(image);

    const cardBody= createLodgingCardBody();
    card.appendChild(cardBody);

    return card;
}

const createLodgingCol=()=>{
    const col= document.createElement('div');
    col.classList.add("col-12"+"col-md-6"+"col-lg-4");

    const card= createLodgingCard();
    col.appendChild(card);
    return col;
}

const elt= () =>{ 
      // crée le html en fonction du nombre d'article
for (let i=0; i<6; i++){
    let row= document.getElementById("rowProduit");
    const col= createLodgingCol(i);
    row.appendChild(col);
}}

elt();

toutElt();      //execute toutElt