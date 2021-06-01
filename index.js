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

produitImg(value,i);
produitNom(value,i); 
produitPrice(value,i);

})

.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
    console.log(err);
})}

const produitImg= (value, i) =>{
    let url= value[i].imageUrl;
    let imgCam = document.getElementById("appareil"+i);
    imgCam.setAttribute("src",url);
}

const produitNom= (value,i) =>{
    let nomCam= value[i].name;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nomCam; 
}

const produitPrice= (value,i) =>{
    let prixProduit= value[i].price;
    let prix = document.getElementById("prix"+i);
    prix.innerHTML += prixProduit+"€";
}



const elt= () =>{
    for (let i=0; i<6; i++){
        let row= document.getElementById("rowProduit");
       
     
       
}} 

const toutElt=()=>{
    for (let i = 0; i < 5; i++) {
        produit(i)
    }
}


toutElt();