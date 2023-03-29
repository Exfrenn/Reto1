function ejecuta(){
	cad = document.sign_in.s_acc.value;
	op = document.sign_in.s_psw.value;
		abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		llave="cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ab";
			salida="";
			salida1="";
			cont=0;
			cont1=0;
			while(cont<cad.length){
				letra=cad.charAt(cont);
				pos=abc.indexOf(letra);
				salida=salida+llave.charAt(pos);
				cont++;
		}
		while(cont1<op.length){
			letra=op.charAt(cont1);
			pos=abc.indexOf(letra);
			salida1=salida1+llave.charAt(pos);
			cont1++
		}
	document.sign_in.encriptado.value=salida;
	document.sign_in.encriptado1.value=salida1;
	alert(document.sign_in.encriptado.value);
	alert(document.sign_in.encriptado1.value);
}