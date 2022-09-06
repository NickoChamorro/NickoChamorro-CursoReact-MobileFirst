const navegador = document.querySelector('.nav');

document.querySelector('#boton-menu').addEventListener('click', () => {
	navegador.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth > 480){
		if (!(navegador.classList.contains("active"))){
		    navegador.classList.add('active');
    	}
    }else{
        navegador.classList.remove('active');
    }
	if(window.innerWidth > 768){
		document.querySelector(".logo__h2").innerHTML = "king market";
	}else{
		document.querySelector(".logo__h2").innerHTML = "km";
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});

function closeMenu(){
	if(window.innerWidth < 480){
		navegador.classList.remove('active');
	}	
}