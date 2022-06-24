const log = console.log;

  const firebaseConfig = {
    apiKey: "AIzaSyBnl9WC5RY8bSf3k7lKPg8Cvr97lqiI6dk",
    authDomain: "palpite-ex.firebaseapp.com",
    projectId: "palpite-ex",
    storageBucket: "palpite-ex.appspot.com",
    messagingSenderId: "596394361681",
    appId: "1:596394361681:web:98e875cf810b7a9b42c970",
    measurementId: "G-T8KRCS401B"
  };

  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Initialize Cloud Firestore
  const db = firebase.firestore();

  log('conectado');


  function pegarChave() {
    const store = db.collection('manager').doc('chaves');
     const action = store.get();
      
     action.then((doc) => { 
   
      const value = doc.data();
               
        document.querySelectorAll("input")[0].value = value.chave1;
        document.querySelectorAll("input")[1].value = value.chave2;
        document.querySelectorAll("input")[2].value = value.chave3;
        document.querySelectorAll("input")[3].value = value.chave4;
        document.querySelectorAll("input")[4].value = value.chave5;
        document.querySelectorAll("input")[5].value = value.chave6;
        document.querySelectorAll("input")[6].value = value.chave7;
        document.querySelectorAll("input")[7].value = value.chave8;
        document.querySelectorAll("input")[8].value = value.chave9;
        document.querySelectorAll("input")[9].value = value.chave10;       
      })
  }
  
  pegarChave();


	var chaves = [
  document.querySelectorAll("input")[0],
	document.querySelectorAll("input")[1],
	document.querySelectorAll("input")[2],
	document.querySelectorAll("input")[3],
	document.querySelectorAll("input")[4],
	document.querySelectorAll("input")[5],
	document.querySelectorAll("input")[6],
	document.querySelectorAll("input")[7],
	document.querySelectorAll("input")[8],
	document.querySelectorAll("input")[9],
	document.querySelectorAll("input")[10],
  ]


  function teste() {
  var Ref = db.collection('manager').doc('chaves');
        Ref.update({
        chave1: chaves[0].value,
        chave2: chaves[1].value,
        chave3: chaves[2].value,
        chave4: chaves[3].value,
        chave5: chaves[4].value,
        chave6: chaves[5].value,
        chave7: chaves[6].value,
        chave8: chaves[7].value,
        chave9: chaves[8].value,
        chave10: chaves[9].value,
    }).then(() => {
        location.href="./C-PANEL.html"
    }).catch((e) => {
       log.e(e);
    })
  }


    