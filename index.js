function imgProduit(i){
fetch("http://localhost:3000/api/cameras") //appel des données a l'api
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value[i].imageUrl);
})
.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
})
}

function descriptionProduit(i) {
    fetch("http://localhost:3000/api/cameras") //appel des données a l'api
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value[i].description);
})
.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
})
}

function nameProduit(i) {
    fetch("http://localhost:3000/api/cameras") //appel des données a l'api
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value[i].name);
})
.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
})
}

function priceProduit(i) {
    fetch("http://localhost:3000/api/cameras") //appel des données a l'api
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function(value) {
    console.log(value[i].price);
})
.catch(function(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
})
}

priceProduit(0)
nameProduit(0)
descriptionProduit(0)
imgProduit(0)
