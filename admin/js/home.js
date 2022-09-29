document.getElementById("submit").onclick = function(){
    let profileimage = document.getElementById("file").files[0];
    let storageref = firebase.storage().ref();
    let uploadtask = storageref.child("photo/").child(Math.random() + profileimage.name).put(profileimage);
    let itemname = document.getElementById("itemname").value;
    let description = document.getElementById("description").value;
    let itemprice = document.getElementById("price").value;
    let timeStamp = new Date();

    uploadtask.on('state_changed', (snapshot) =>{
        let uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(uploadprogress)
    },(error)=>{
        //handle unsuccessful uploads
    }, ()=>{
        //handle successful uploads
        console.log("image uploaded successfully")

        //getting download url/ image / file link
        uploadtask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
            console.log(downloadURL)

            //updating the image uploaded to my firestore
            let addproduct = firebase.firestore().collection("products").doc();
    addproduct.set({


        docId:addproduct.id,
        timeStamp:timeStamp,
        itemname:itemname,
        description:description,
        itemprice:itemprice,
        imageLink:downloadURL,
       
        
    }).then(()=>{
        window.location.reload();
    })
           
        })
    })
}

   
    // Read data

firebase.firestore().collection("products").get().then((querySnapshot)=>{
    let content = '';
    querySnapshot.forEach((doc)=>{
        let itemname = doc.data().itemname;
        let description = doc.data().description;
        let itemprice = doc.data().itemprice;
        let timeStamp = doc.data().timeStamp;
        let docId = doc.data().docId;
        let imageLink = doc.data().imageLink;
        

      
        

        


        content+= '<tr>' 

            content+= '<td>'+itemname+'</td>'
            content+= '<td>'+description+'</td>'
            content+= '<td> KES '+itemprice+'</td>'
            //content+= '<td><button class="btn btn-success">Edit</button></td>'
           // content+= '<td><button onclick = "deleteDoc(\'' +docId+ '\')" class="btn btn-danger"data-bs-toggle="modal" data-bs-target="#deletemodal">Delete</button></td>'
            content+= '<td><a href="'+imageLink+'">viewimage</a></td>'

        content+= '</tr>'
    })
    $("#allproducts").append(content);
})