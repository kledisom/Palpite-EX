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



function salvar() {

  const nome = prompt("Digite seu nome!");

    var arr = [
        parseInt(document.querySelectorAll("input")[0].value),
        parseInt(document.querySelectorAll("input")[1].value),
        parseInt(document.querySelectorAll("input")[2].value),
        parseInt(document.querySelectorAll("input")[3].value),
        parseInt(document.querySelectorAll("input")[4].value),
        parseInt(document.querySelectorAll("input")[5].value),
        parseInt(document.querySelectorAll("input")[6].value),
        parseInt(document.querySelectorAll("input")[7].value),
        parseInt(document.querySelectorAll("input")[8].value),
        parseInt(document.querySelectorAll("input")[9].value),
        parseInt(document.querySelectorAll("input")[10].value),
        parseInt(document.querySelectorAll("input")[11].value),
        parseInt(document.querySelectorAll("input")[12].value),
        parseInt(document.querySelectorAll("input")[13].value),
        parseInt(document.querySelectorAll("input")[14].value),
        parseInt(document.querySelectorAll("input")[15].value),
        parseInt(document.querySelectorAll("input")[16].value),
        parseInt(document.querySelectorAll("input")[17].value),
        parseInt(document.querySelectorAll("input")[18].value),
        parseInt(document.querySelectorAll("input")[19].value)
      ];



    db.collection('john-doe').add({
        user: nome,
        time1: arr[0], time2: arr[1], time3: arr[2], time4: arr[3], time5: arr[4],
        time6: arr[5], time7: arr[6], time8: arr[7], time9: arr[8], time10: arr[9],      
        time11: arr[10], time12: arr[11], time13: arr[12], time14: arr[13], time15: arr[14],
        time16: arr[15], time17: arr[16], time18: arr[17], time19: arr[18], time20: arr[19],      
    })
    .then((docRef) => {
        log("salvo: ", docRef.id);
        
          swal("Copie a sua chave: ",docRef.id);
        
    })
    .catch((e) => {
        console.e("erro ao salvar: ", e);
    })
}

function pegarTime() {
	const store = db.collection('manager').doc('times');
	 const action = store.get();
	  
   action.then((doc) => { 
 
		const value = doc.data();
         		

			document.querySelectorAll("label")[1].innerHTML = value.time1;
		 	document.querySelectorAll("label")[3].innerHTML = value.time2;
	 		document.querySelectorAll("label")[4].innerHTML = value.time3;
			document.querySelectorAll("label")[6].innerHTML = value.time4;
			document.querySelectorAll("label")[7].innerHTML = value.time5;
			document.querySelectorAll("label")[9].innerHTML = value.time6;
			document.querySelectorAll("label")[10].innerHTML = value.time7;
			document.querySelectorAll("label")[12].innerHTML = value.time8;
			document.querySelectorAll("label")[13].innerHTML = value.time9;
			document.querySelectorAll("label")[15].innerHTML = value.time10;
			document.querySelectorAll("label")[16].innerHTML = value.time11;
			document.querySelectorAll("label")[18].innerHTML = value.time12;
			document.querySelectorAll("label")[19].innerHTML = value.time13;
			document.querySelectorAll("label")[21].innerHTML = value.time14
			document.querySelectorAll("label")[22].innerHTML = value.time15;
			document.querySelectorAll("label")[24].innerHTML = value.time16;
			document.querySelectorAll("label")[25].innerHTML = value.time17;
			document.querySelectorAll("label")[27].innerHTML = value.time18;
			document.querySelectorAll("label")[28].innerHTML = value.time19;
			document.querySelectorAll("label")[30].innerHTML = value.time20;  
		
				 
		 
		})
}

pegarTime()


/*function verificarVazio(){
      
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
       if(arr[0] || arr[1] || arr[1] || arr[1] || arr[1] || arr[1] || 
        arr[1] || arr[1] || arr[1] || arr[1] || arr[1] || arr[1] || arr[1]
         || arr[1] || arr[1] || arr[1] || arr[1] || arr[1] || arr[1] == '') {
        
          swal("Ops. Ainda tem campo fazio,  Por favor preencha todos os campos!");
       }else{};
      
}*/



























