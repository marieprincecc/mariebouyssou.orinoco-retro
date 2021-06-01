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

let imgCam = document.getElementById("appareil"+i);
imgCam.setAttribute("src",url);
    
   
   


  
  let titre = document.getElementById("titre"+i);
  titre.innerHTML += nomCam; 
 console.log(nomCam);



    
 
    let prix = document.getElementById("prix"+i);
    prix.innerHTML += prixProduit+"€";

})


.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
    console.log(err);
})}









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