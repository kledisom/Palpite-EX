
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
   

/* function salvar() {
    db.collection('manager').add({
        user: 'rodada', id: 01,
        time1: 0, time2: 0, time3: 0, time4: 0, time5: 0,
        time6: 0, time7: 0, time8: 0, time9: 0, time10: 0,      
        time11: 0, time12: 0, time13: 0, time14: 0, time15: 0,
        time16: 0, time17: 0, time18: 0, time19: 0, time20: 0,      
    })
    .then((docRef) => {
        log("salvo: ", docRef.id);
    })
    .catch((e) => {
        console.e("erro ao salvar: ", e);
    })
}; */

let array = [];

function tabelaTemporeal() {
const store = db.collection('manager').get();
		store.then((query) => {
			query.forEach((doc) => {
				array.push(doc.data());

				 
			});
		
			document.querySelectorAll("input")[0].value = array[0].time1;
			document.querySelectorAll("input")[1].value = array[0].time2;
			document.querySelectorAll("input")[2].value = array[0].time3;
			document.querySelectorAll("input")[3].value = array[0].time4;
			document.querySelectorAll("input")[4].value = array[0].time5;
			document.querySelectorAll("input")[5].value = array[0].time6;
			document.querySelectorAll("input")[6].value = array[0].time7;
			document.querySelectorAll("input")[7].value = array[0].time8;
			document.querySelectorAll("input")[8].value = array[0].time9;
			document.querySelectorAll("input")[9].value = array[0].time10;
			document.querySelectorAll("input")[10].value = array[0].time11;
			document.querySelectorAll("input")[11].value = array[0].time12;
			document.querySelectorAll("input")[12].value = array[0].time13;
			document.querySelectorAll("input")[13].value = array[0].time14;
			document.querySelectorAll("input")[14].value = array[0].time15;
			document.querySelectorAll("input")[15].value = array[0].time16;
			document.querySelectorAll("input")[16].value = array[0].time17;
			document.querySelectorAll("input")[17].value = array[0].time18;
			document.querySelectorAll("input")[18].value = array[0].time19;
			document.querySelectorAll("input")[19].value = array[0].time20;
					
		});
}

tabelaTemporeal();



function pegarDoc(td, id, cel) {

   const store = db.collection('john-doe').doc(id);
    const action = store.get();
	 
	action.then((doc) => {

		var result = {
			a: parseInt(array[0].time1),
			b: parseInt(array[0].time2),
			c: parseInt(array[0].time3),
			d: parseInt(array[0].time4),
			e: parseInt(array[0].time5),
			f: parseInt(array[0].time6),
			g: parseInt(array[0].time7),
			h: parseInt(array[0].time8),
			i: parseInt(array[0].time9),
			j: parseInt(array[0].time10),
			k: parseInt(array[0].time11),
			l: parseInt(array[0].time12),
			m: parseInt(array[0].time13),
			n: parseInt(array[0].time14),
			o: parseInt(array[0].time15),
			p: parseInt(array[0].time16),
			q: parseInt(array[0].time17),
			r: parseInt(array[0].time18),
			s: parseInt(array[0].time19),
			t: parseInt(array[0].time20),
		}

		const value = doc.data();


		function status(pa, pb, ra, rb, cel) {
 			if(pa == ra && pb == rb) {
			 var pont = parseInt(document.querySelectorAll('td')[cel].innerHTML);
			  document.querySelectorAll('td')[cel].innerHTML = pont + 10;			 
				 
			 }
			 else if(pa > pb && ra > rb || pb > pa && rb > ra) {
			  var pont = parseInt(document.querySelectorAll('td')[cel].innerHTML);
			   document.querySelectorAll('td')[cel].innerHTML = pont + 5;
			   				 
			  }
			  else if(pa > pb && ra < rb || pb > pa && rb < ra) {
			   var pont = parseInt(document.querySelectorAll('td')[cel].innerHTML);
			   //document.querySelectorAll('td')[cel].innerHTML = pont + 5;	 	
			   log("ok") 	
			   	 
			 }
			 else if(pa == pb) {
				log("solução")
			 }
			 else if(pb > pa && rb < ra)
			  {log("esta correto")}
			  else if(ra == rb) {
				 log("empate!")
			 }else{log("perdido!")} 
 

		 };

	/* 	 else if(ra >= pa && rb < pa || rb >= pb && ra < pb) {
			var pont = parseInt(document.querySelectorAll('td')[cel].innerHTML);
			 document.querySelectorAll('td')[cel].innerHTML = pont + 5; */
			 
		 status(value.time1, value.time2, result.a, result.b, td);
	 	 status(value.time3, value.time4, result.c, result.d, td);
		 status(value.time5, value.time6, result.e, result.f, td);
		 status(value.time7, value.time8, result.g, result.h, td);
		 status(value.time9, value.time10, result.i, result.j, td); 
		 status(value.time10, value.time11, result.k, result.l, td);
		 status(value.time12, value.time13, result.m, result.n, td);
		 status(value.time14, value.time15, result.o, result.p, td);
		 status(value.time16, value.time17, result.q, result.r, td);
		 status(value.time18, value.time19, result.s, result.t, td); 

		 document.querySelectorAll('td')[cel].innerHTML = value.user;
		
		
	})
 }

const key = [];

 function pegarChave() {
    const store = db.collection('manager').doc('chaves');
     const action = store.get();
      
     action.then((doc) => { 
   
      const value = doc.data();

	  key.push(value);        
	  
 	      if(key[0].chave1 != '') {
		  pegarDoc(4, key[0].chave1, 0)	  
		 } 
 	      if(key[0].chave2 != '') {
		  pegarDoc(10, key[0].chave2, 6)	  
		 }
		 if(key[0].chave3 != '') {
		  pegarDoc(16, key[0].chave3, 12)	  
		 } 
	     if(key[0].chave4 != '') {
		  pegarDoc(22, key[0].chave4, 18)	  
		 } 
	     if(key[0].chave5 != '') {
		  pegarDoc(28, key[0].chave5, 24)	  
		 }
	      if(key[0].chave6 != '') {
		  pegarDoc(34, key[0].chave6, 30)	  
		 }
	     if(key[0].chave7 != '') {
		  pegarDoc(40, key[0].chave7, 36)	  
		 }
	     if(key[0].chave8 != '') {
		  pegarDoc(46, key[0].chave8, 42)	  
		 }
	     if(key[0].chave9 != '') {
		  pegarDoc(52, key[0].chave9, 48)	  
		 }
	     if(key[0].chave10 != '') {
		  pegarDoc(58, key[0].chave10, 54)	  
		 }   
      })


  }

  pegarChave();


  /* if(key[9] == 'none') {
	pegarDoc(4, key[0], 0)	  
	pegarDoc(10, key[1], 6)  
	  pegarDoc(16, key[2], 0)
	pegarDoc(22, key[3], 6)  
	 pegarDoc(26, key[4], 0)
	pegarDoc(32, key[5], 6)  
	 pegarDoc(38, key[6], 0)
	pegarDoc(44, key[7], 6)  
	 pegarDoc(50, key[8], 0)
	 log("teste") */
  /* else if(chaves.i == '') {
	pegarDoc(4, chaves.a, 0)	  
	pegarDoc(10, chaves.b, 6)  
	  pegarDoc(16, chaves.c, 0)
	pegarDoc(22, chaves.d, 6)  
	 pegarDoc(26, chaves.e, 0)
	pegarDoc(32, chaves.f, 6)  
	 pegarDoc(38, chaves.g, 0)
	pegarDoc(44, chaves.h, 6)  
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.h == '' ) {
	pegarDoc(4, chaves.a, 0)	  
	pegarDoc(10, chaves.b, 6)  
	  pegarDoc(16, chaves.c, 0)
	pegarDoc(22, chaves.d, 6)  
	 pegarDoc(26, chaves.e, 0)
	pegarDoc(32, chaves.f, 6)  
	 pegarDoc(38, chaves.g, 0)
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.g == '') {
	pegarDoc(4, chaves.a, 0)	  
	pegarDoc(10, chaves.b, 6)  
	  pegarDoc(16, chaves.c, 0)
	pegarDoc(22, chaves.d, 6)  
	 pegarDoc(26, chaves.e, 0)
	pegarDoc(32, chaves.f, 6)  
	pegarDoc(44, chaves.h, 6)  
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.f == '') {
	pegarDoc(4, chaves.a, 0)	  
	pegarDoc(10, chaves.b, 6)  
	  pegarDoc(16, chaves.c, 0)
	pegarDoc(22, chaves.d, 6)  
	 pegarDoc(26, chaves.e, 0)
	 pegarDoc(38, chaves.g, 0)
	pegarDoc(44, chaves.h, 6)  
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.e == '') {
	pegarDoc(4, chaves.a, 0)	  
	pegarDoc(10, chaves.b, 6)  
	  pegarDoc(16, chaves.c, 0)
	pegarDoc(22, chaves.d, 6)  
	pegarDoc(32, chaves.f, 6)  
	 pegarDoc(38, chaves.g, 0)
	pegarDoc(44, chaves.h, 6)  
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.d == '') {
	pegarDoc(4, chaves.a, 0)	  
	pegarDoc(10, chaves.b, 6)  
	  pegarDoc(16, chaves.c, 0)
	 pegarDoc(26, chaves.e, 0)
	pegarDoc(32, chaves.f, 6)  
	 pegarDoc(38, chaves.g, 0)
	pegarDoc(44, chaves.h, 6)  
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.c == '') {
	pegarDoc(4, chaves.a, 0)	  
	pegarDoc(10, chaves.b, 6)  
	 pegarDoc(26, chaves.e, 0)
	pegarDoc(32, chaves.f, 6)  
	 pegarDoc(38, chaves.g, 0)
	pegarDoc(44, chaves.h, 6)  
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.b == '') {
	pegarDoc(4, chaves.a, 0)	  
	  pegarDoc(16, chaves.c, 0)
	 pegarDoc(26, chaves.e, 0)
	pegarDoc(32, chaves.f, 6)  
	 pegarDoc(38, chaves.g, 0)
	pegarDoc(44, chaves.h, 6)  
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else if(chaves.a == '') {
	pegarDoc(10, chaves.b, 6)  
	  pegarDoc(16, chaves.c, 0)
	 pegarDoc(26, chaves.e, 0)
	pegarDoc(32, chaves.f, 6)  
	 pegarDoc(38, chaves.g, 0)
	pegarDoc(44, chaves.h, 6)  
	 pegarDoc(50, chaves.i, 0)
	pegarDoc(56, chaves.j, 6) 
  }else{log("perdido")} */




/* var arrayClient = [];

function andamento() {
	const store = db.collection('john-doe').get();
	 store.then((query) => {
		query.forEach((doc) => {

			
			var value = doc.data().user;
			log(value)
			
			arrayClient.push(value);
	        log(arrayClient)
			
		})			
			var result = {
				a: parseInt(array[0].time1),
				b: parseInt(array[0].time2),
				c: parseInt(array[0].time3),
				d: parseInt(array[0].time4),
				e: parseInt(array[0].time5),
				f: parseInt(array[0].time6),
				g: parseInt(array[0].time7),
				h: parseInt(array[0].time8),
				i: parseInt(array[0].time9),
				j: parseInt(array[0].time10),
				k: parseInt(array[0].time11),
				l: parseInt(array[0].time12),
				m: parseInt(array[0].time13),
				n: parseInt(array[0].time14),
				o: parseInt(array[0].time15),
				p: parseInt(array[0].time16),
				q: parseInt(array[0].time17),
				r: parseInt(array[0].time18),
				s: parseInt(array[0].time19),
				t: parseInt(array[0].time20),
			}
				//log(resultAtual.b)
				
				var palpit = {
				 a: arrayClient[0].time1, b: arrayClient[0].time2, c: arrayClient[0].time3, d: arrayClient[0].time4,
				 e: arrayClient[0].time5, f: arrayClient[0].time6, g: arrayClient[0].time7, h: arrayClient[0].time8,				
				 i: arrayClient[0].time9, j: arrayClient[0].time10, k: arrayClient[0].time11, l: arrayClient[0].time12,
				 m: arrayClient[0].time13, n: arrayClient[0].time14, o: arrayClient[0].time15, p: arrayClient[0].time16,
				 q: arrayClient[0].time17, r: arrayClient[0].time18, s: arrayClient[0].time19, t: arrayClient[0].time20,
				
			    }

		 		 var palpit2 = {
					a: arrayClient[1].time1, b: arrayClient[1].time2, c: arrayClient[1].time3, d: arrayClient[1].time4,
					e: arrayClient[1].time5, f: arrayClient[1].time6, g: arrayClient[1].time7, h: arrayClient[1].time8,				
					i: arrayClient[1].time9, j: arrayClient[1].time10, k: arrayClient[1].time11, l: arrayClient[1].time12,
					m: arrayClient[1].time13, n: arrayClient[1].time14, o: arrayClient[1].time15, p: arrayClient[1].time16,
					q: arrayClient[1].time17, r: arrayClient[1].time18, s: arrayClient[1].time19, t: arrayClient[1].time20,
			    } 

		 		var palpit3 = {
					a: arrayClient[2].time1, b: arrayClient[2].time2, c: arrayClient[2].time3, d: arrayClient[2].time4,
					e: arrayClient[2].time5, f: arrayClient[2].time6, g: arrayClient[2].time7, h: arrayClient[2].time8,				
					i: arrayClient[2].time9, j: arrayClient[2].time10, k: arrayClient[2].time11, l: arrayClient[2].time12,
					m: arrayClient[2].time13, n: arrayClient[2].time14, o: arrayClient[2].time15, p: arrayClient[2].time16,
					q: arrayClient[2].time17, r: arrayClient[2].time18, s: arrayClient[2].time19, t: arrayClient[2].time20,
			    } 

		 		var palpit4 = {
					a: arrayClient[3].time1, b: arrayClient[3].time2, c: arrayClient[3].time3, d: arrayClient[3].time4,
					e: arrayClient[3].time5, f: arrayClient[3].time6, g: arrayClient[3].time7, h: arrayClient[3].time8,				
					i: arrayClient[3].time9, j: arrayClient[3].time10, k: arrayClient[3].time11, l: arrayClient[3].time12,
					m: arrayClient[3].time13, n: arrayClient[3].time14, o: arrayClient[3].time15, p: arrayClient[3].time16,
					q: arrayClient[3].time17, r: arrayClient[3].time18, s: arrayClient[3].time19, t: arrayClient[3].time20,
			    } 

		 		var palpit5 = {
					a: arrayClient[4].time1, b: arrayClient[4].time2, c: arrayClient[4].time3, d: arrayClient[4].time4,
					e: arrayClient[4].time5, f: arrayClient[4].time6, g: arrayClient[4].time7, h: arrayClient[4].time8,				
					i: arrayClient[4].time9, j: arrayClient[4].time10, k: arrayClient[4].time11, l: arrayClient[4].time12,
					m: arrayClient[4].time13, n: arrayClient[4].time14, o: arrayClient[4].time15, p: arrayClient[4].time16,
					q: arrayClient[4].time17, r: arrayClient[4].time18, s: arrayClient[4].time19, t: arrayClient[4].time20,
			    } 

		 		var palpit6 = {
					a: arrayClient[5].time1, b: arrayClient[5].time2, c: arrayClient[5].time3, d: arrayClient[5].time4,
					e: arrayClient[5].time5, f: arrayClient[5].time6, g: arrayClient[5].time7, h: arrayClient[5].time8,				
					i: arrayClient[5].time9, j: arrayClient[5].time10, k: arrayClient[5].time11, l: arrayClient[5].time12,
					m: arrayClient[5].time13, n: arrayClient[5].time14, o: arrayClient[5].time15, p: arrayClient[5].time16,
					q: arrayClient[5].time17, r: arrayClient[5].time18, s: arrayClient[5].time19, t: arrayClient[5].time20,
			    } 


		function status1(pa, pb, ra, rb, cel) {
	 		  if(pa == ra && pb == rb) {
				var pont = parseInt(document.querySelectorAll('td')[cel].innerHTML);
				 document.querySelectorAll('td')[cel].innerHTML = pont + 10;			 
					
				}else if(ra >= pa && rb < pa || rb >= pb && ra < pb) {
				 var pont = parseInt(document.querySelectorAll('td')[cel].innerHTML);
				  document.querySelectorAll('td')[cel].innerHTML = pont + 5;
					
				}else if(ra == rb) {
					log("empate!")
				}else if(ra > rb || rb > ra) {
					log("derrota!");
				}else{log("perdido!")} 
			};

			
		 	status1(palpit.a, palpit.b, result.a, result.b, 4);
			status1(palpit.c, palpit.d, result.c, result.d, 4);
			status1(palpit.e, palpit.f, result.e, result.f, 4);
			status1(palpit.g, palpit.h, result.g, result.h, 4);
			status1(palpit.i, palpit.j, result.i, result.j, 4);
			status1(palpit.k, palpit.l, result.k, result.l, 4);
			status1(palpit.m, palpit.n, result.m, result.n, 4);
			status1(palpit.o, palpit.p, result.o, result.p, 4);
			status1(palpit.q, palpit.r, result.q, result.r, 4);
			status1(palpit.s, palpit.t, result.s, result.t, 4); 
			

			
		 	status1(palpit2.a, palpit2.b, result.a, result.b, 10);
			status1(palpit2.c, palpit2.d, result.c, result.d, 10);
			status1(palpit2.e, palpit2.f, result.e, result.f, 10);
			status1(palpit2.g, palpit2.h, result.g, result.h, 10);
			status1(palpit2.i, palpit2.j, result.i, result.j, 10);
			status1(palpit2.k, palpit2.l, result.k, result.l, 10);
			status1(palpit2.m, palpit2.n, result.m, result.n, 10);
			status1(palpit2.o, palpit2.p, result.o, result.p, 10);
			status1(palpit2.q, palpit2.r, result.q, result.r, 10);
			status1(palpit2.s, palpit2.t, result.s, result.t, 10);  
			
		 	status1(palpit3.a, palpit3.b, result.a, result.b, 16);
			status1(palpit3.c, palpit3.d, result.c, result.d, 16);
			status1(palpit3.e, palpit3.f, result.e, result.f, 16);
			status1(palpit3.g, palpit3.h, result.g, result.h, 16);
			status1(palpit3.i, palpit3.j, result.i, result.j, 16);
			status1(palpit3.k, palpit3.l, result.k, result.l, 16);
			status1(palpit3.m, palpit3.n, result.m, result.n, 16);
			status1(palpit3.o, palpit3.p, result.o, result.p, 16);
			status1(palpit3.q, palpit3.r, result.q, result.r, 16);
			status1(palpit3.s, palpit3.t, result.s, result.t, 16);  
		    
		 	status1(palpit4.a, palpit4.b, result.a, result.b, 22);
			status1(palpit4.c, palpit4.d, result.c, result.d, 22);
			status1(palpit4.e, palpit4.f, result.e, result.f, 22);
			status1(palpit4.g, palpit4.h, result.g, result.h, 22);
			status1(palpit4.i, palpit4.j, result.i, result.j, 22);
			status1(palpit4.k, palpit4.l, result.k, result.l, 22);
			status1(palpit4.m, palpit4.n, result.m, result.n, 22);
			status1(palpit4.o, palpit4.p, result.o, result.p, 22);
			status1(palpit4.q, palpit4.r, result.q, result.r, 22);
			status1(palpit4.s, palpit4.t, result.s, result.t, 22);
	     
		 	status1(palpit5.a, palpit5.b, result.a, result.b, 28);
			status1(palpit5.c, palpit5.d, result.c, result.d, 28);
			status1(palpit5.e, palpit5.f, result.e, result.f, 28);
			status1(palpit5.g, palpit5.h, result.g, result.h, 28);
			status1(palpit5.i, palpit5.j, result.i, result.j, 28);
			status1(palpit5.k, palpit5.l, result.k, result.l, 28);
			status1(palpit5.m, palpit5.n, result.m, result.n, 28);
			status1(palpit5.o, palpit5.p, result.o, result.p, 28);
			status1(palpit5.q, palpit5.r, result.q, result.r, 28);
			status1(palpit5.s, palpit5.t, result.s, result.t, 28);  
		    
		 	status1(palpit6.a, palpit6.b, result.a, result.b, 34);
			status1(palpit6.c, palpit6.d, result.c, result.d, 34);
			status1(palpit6.e, palpit6.f, result.e, result.f, 34);
			status1(palpit6.g, palpit6.h, result.g, result.h, 34);
			status1(palpit6.i, palpit6.j, result.i, result.j, 34);
			status1(palpit6.k, palpit6.l, result.k, result.l, 34);
			status1(palpit6.m, palpit6.n, result.m, result.n, 34);
			status1(palpit6.o, palpit6.p, result.o, result.p, 34);
			status1(palpit6.q, palpit6.r, result.q, result.r, 34);
			status1(palpit6.s, palpit6.t, result.s, result.t, 34);  
		   
 
		
	 })
	 .catch((e) => {
		log.e("falha: ", e);
	 })
} */

/*andamento(); */





function update() {

	var arr = [document.querySelectorAll("input")[0].value,
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
	document.querySelectorAll("input")[19].value,
	];

			log(arr[0])
				
	var novo = db.collection('manager').doc('DSCoDZVcMv2s4sjoc4Mz');
	
	novo.update({
		time1: arr[0], time2: arr[1], time3: arr[2], time4: arr[3], time5: arr[4],
        time6: arr[5], time7: arr[6], time8: arr[7], time9: arr[8], time10: arr[9],      
        time11: arr[10], time12: arr[11], time13: arr[12], time14: arr[13], time15: arr[14],
        time16: arr[15], time17: arr[16], time18: arr[17], time19: arr[18], time20: arr[19]
	})
   .then(() => {
	log("alterado com sucesso!");
	  location.reload(); 
   })
   .catch((e) => {
	log.e("falha na alteração: ", e);
   })
};

const elClubs = document.getElementById('clubs');
elClubs.addEventListener("click", () => { location.href="./inserirClub.html" });

const elKeys = document.getElementById('keys');
elKeys.addEventListener("click", () => { location.href="./validaKey.html" });


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





 

 

 




 




















