fetch("http://localhost:3000/api/cameras") //appel des données a l'api
.then(function data(res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function data(value) {
    console.log(value);
})
.catch(function data(err) {
    console.log("une erreure est survenue"); //reponse en cas d'erreur
})

