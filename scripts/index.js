const el = document.getElementById('entrar');
el.addEventListener("click", () => { location.href="./pages/login.html" });

const elCont = document.getElementById('contato');
elCont.addEventListener("click", () => { location.href="http://api.whatsapp.com/send?1=pt_BR&phone=5582988767988" });

const elManut = document.getElementById('manut');
elManut.addEventListener("click", () => { location.href="./pages/login-manut.html" });


