

firebase.initializeApp({
    apiKey:"AIzaSyBwRWg1oJcLoAd9UjI-b1JXvFCE7XeI-qI",
    authDomain:"firestore-database-aec7d.firebaseapp.com",
    projectId: "firestore-database-aec7d"
  });
  
  var db = firebase.firestore();

  function addData(){
      
    db.collection("orders").add({

        date:new Date().getTime(),
        // costumerName:document.getElementById('inpName').Value,
        coustomerName: document.getElementById("inpName").value,
        orderTitle:"khoya",
        quantityInKG:2,
        address:"akjgaj,Karachi.",
        phoneNumber:"03387373"


        
        // first: "Ada",
        // last: "Lovelace",
        // born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
}



function getData(){
    db.collection("orders").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById('orderlist').innerHTML+=
            `<p> ${JSON.stringify(doc.data())}</p>`


            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}


// db.collection("orders")
//     .onSnapshot(function(snapshot) {
//         snapshot.docChanges().forEach(function(change) {
//             if (change.type === "added") {

//                 document.getElementById('orderlist').innerHTML=
//                 `<p> ${JSON.stringify ( change.doc.data())}</p>`+ document.getElementById('orders').innerHTML;



//                 console.log("New orders: ", change.doc.data());
//             }
//             if (change.type === "modified") {
//                 console.log("Modified orders: ", change.doc.data());
//             }
//             if (change.type === "removed") {
//                 console.log("Removed orders: ", change.doc.data());
//             }
//         });
//     });