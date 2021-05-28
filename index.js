function produit(){
fetch("http://localhost:3000/api/cameras") //appel des données a l'api
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value);
})
.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
})
}

