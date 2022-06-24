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



function update() {		
		
   var arr = [
      document.querySelectorAll("input")[0].value,
      document.querySelectorAll("input")[1].value,
      document.querySelectorAll("input")[2].value,
      document.querySelectorAll("input")[3].value,
      document.querySelectorAll("input")[4].value,
      document.querySelectorAll("input")[5].value,
      document.querySelectorAll("input")[6].value,
      document.querySelectorAll("input")[7].value,
      document.querySelectorAll("input")[8].value,
      document.querySelectorAll("input")[9].value,
      document.querySelectorAll("input")[10].value,
      document.querySelectorAll("input")[11].value,
      document.querySelectorAll("input")[12].value,
      document.querySelectorAll("input")[13].value,
      document.querySelectorAll("input")[14].value,
      document.querySelectorAll("input")[15].value,
      document.querySelectorAll("input")[16].value,
      document.querySelectorAll("input")[17].value,
      document.querySelectorAll("input")[18].value,
      document.querySelectorAll("input")[19].value
    ];
  
	var novo = db.collection('manager').doc('times');
	
	novo.update({
		time1: arr[0], time2: arr[1], time3: arr[2], time4: arr[3], time5: arr[4],
        time6: arr[5], time7: arr[6], time8: arr[7], time9: arr[8], time10: arr[9],      
        time11: arr[10], time12: arr[11], time13: arr[12], time14: arr[13], time15: arr[14],
        time16: arr[15], time17: arr[16], time18: arr[17], time19: arr[18], time20: arr[19]
	})
   .then(() => {
	log("alterado com sucesso!");
      /* swal("Salvo!"); */
      location.href="../pages/C-PANEL.html"; 
   })
   .catch((e) => {
	log.e("falha na alteração: ", e);
   })
};
