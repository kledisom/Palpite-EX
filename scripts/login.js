const nome = 'teste';
const senha = 123;

const supernome = 'tiago';
const supersenha = 305022;




function acessar() {
	
const user = document.getElementById('users').value;
const pass = document.getElementById('password').value;
	
	if(user == nome && pass == senha) {
		location.href="../pages/palpite.html"
	}else if(user == supernome && pass == supersenha) {
		location.href="../pages/C-PANEL.html"
	}else{alert('ACESSO NEGADO!')}
	
}