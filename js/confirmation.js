function confirmation() {
    const confirmation= JSON.parse(JSON.stringify("contact","products"))
    console.log(confirmation);
    fetch("http://localhost:3000/api/cameras/order")
    .then(function(res) {
        if (res.ok) {
            return res.json()   
                   //convertie les données json
        }
    })
    .then(function(value) {
        console.log(value,1);
    
})

.catch(function(err) {
    console.log("une erreure est survenue") 
    console.log(err)                     //afiche la reponse dans la console en cas d'erreur
})
}
confirmation()

