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
    let imgCam = document.getElementById("appareil"+i);
    imgCam.setAttribute("src",url);
})
.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
})
}

const elt= () =>{
    for (let i=0; i<6; i++){
        let row= document.getElementById("rowProduit");
        let url= value[i].imageUrl;
     
       
}} 
    

console.log(elt);

produit();
