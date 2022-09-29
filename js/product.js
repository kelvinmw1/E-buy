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

        content+= '<a href="" class="item">' 
        
            content += '<img src="'+imageLink+'">'
            content+= '<div class="itemname">'+itemname+'</div>'
            content+= '<div class="description">'+description+'</div>'
            content+= '<div class="price"> KES '+itemprice+'</div>'
            content += '<button class="btn btn-primary">Pay</button>'
            

        content+= '</a>'
    })
    $("#product").append(content);
    
})