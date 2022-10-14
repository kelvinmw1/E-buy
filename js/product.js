let receivedId = decodeURIComponent(window.location.search);

let productId = receivedId.substring(1)
console.log(productId);
firebase.firestore().collection("products").doc(productId).get().then((doc)=>{

    let itemname = doc.data().itemname;
    let description = doc.data().description;
    let itemprice = doc.data().itemprice;
    let timeStamp = doc.data().timeStamp;
    let imageLink = doc.data().imageLink;

    document.getElementById("productimage").src = imageLink;
    document.getElementById("productname").innerHTML = itemname;
    document.getElementById("description").innerHTML = description;
    document.getElementById("price").innerHTML = itemprice;

})







