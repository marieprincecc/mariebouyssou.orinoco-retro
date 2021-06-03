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

console.log(url, nomCam, prixProduit,);

                                        //execution des fonctions
produitImg(value,i);
produitNom(value,i); 
produitPrice(value,i);

})

.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
    console.log(err);
})}


const toutElt=()=>{                     //boucle produit
    for (let i = 0; i < 5; i++) {
        produit(i)
    }
}

const createLodgingCardTitle=(i)=>{
 
    let cardTitle=document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.id=("titre"+i);
    return cardTitle;
}
const createLodgingCardText=(i)=>{
  
    let cardText=document.createElement("p");
    cardText.classList.add("card-text");
    cardText.id=("prix"+i);
    return cardText;
}
const createLodgingImg=(i)=>{
    
    let image= document.createElement("img");
    image.classList.add("card-img-top");
    
        image.id = ("appareil"+i);
    
        return image;
}
const createLinkCard=(i)=>{
    let pageProduit= ("html/produit.html");
    let link= document.createElement("a");
    link.classList.add("btn","btn-secondary","stretched-link");
    link.id= ("linkProduit"+i)
    link.setAttribute("href",pageProduit);
    link.innerHTML="voir plus";
    
    return link;
}

const createLodgingCardBody=(i)=>{
    let cardBody= document.createElement("div");
    cardBody.classList.add("card-body","text-center");

    let cardTitle= createLodgingCardTitle(i);
    cardBody.appendChild(cardTitle);

    let cardText= createLodgingCardText(i);
    cardBody.appendChild(cardText);

    let link= createLinkCard(i);
    cardBody.appendChild(link);

    return cardBody;
}

const createLodgingCard=(i)=>{
    let card= document.createElement("div");
    card.classList.add("card");

    let image= createLodgingImg(i);
    card.appendChild(image);

    let cardBody= createLodgingCardBody(i);
    card.appendChild(cardBody);

    return card;
}

const createLodgingCol=(i)=>{
    let col= document.createElement("div");
    col.classList.add("col-12","col-md-6","col-lg-4");

    const card= createLodgingCard(i);
    col.appendChild(card);
    return col;
}
const insereCol=(i)=>{
    let row= document.getElementById("rowProduit");
    let col= createLodgingCol(i);
    row.appendChild(col);
}

const elt= () =>{ 
      // crée le html en fonction du nombre d'article
for (let i=0; i<5; i++){
   
   insereCol(i)

}}

const selectProduit= (i)=>{

}

elt();
toutElt();      //execute toutElt
