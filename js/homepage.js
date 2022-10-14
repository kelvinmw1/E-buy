firebase.firestore().collection("products").get().then((querySnapshot)=>{
    let content = '';
    querySnapshot.forEach((doc)=>{
        let itemname = doc.data().itemname;
        let description = doc.data().description;
        let itemprice = doc.data().itemprice;
        let timeStamp = doc.data().timeStamp;
        let docId = doc.data().docId;
        let profileimage = doc.data().profileimage;
        let imageLink = doc.data().imageLink;
        let productlink = "product.html" + "?" + docId

        content+= '<a href="'+productlink+'" class="items">' 

            content += '<img src="'+imageLink+'">'
            content+= '<div class="itemname">'+itemname+'</div>'
            content+= '<div class="description">'+description+'</div>'
            content+= '<div class="price"> KES '+itemprice+'</div>'
            

        content+= '</a>'
    })
    $("#products").append(content);
    
})