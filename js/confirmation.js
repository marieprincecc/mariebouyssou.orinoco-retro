function confirmation() {
    const confirmation= JSON.parse(JSON.stringify("champ","panier"))
    console.log(confirmation);
    fetch("http://localhost:3000/api/cameras/order")
    .then(function(res) {
        if (res.ok) {
            return res.json()   
                   //convertie les données json
        }
    })
    .then(function(value) {
        console.log(value);
    
})

.catch(function(err) {
    console.log("une erreure est survenue") 
    console.log(err)                     //afiche la reponse dans la console en cas d'erreur
})
}
confirmation()

