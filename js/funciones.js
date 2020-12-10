
var nombre = document.getElementById('Nombre');
var correo = document.getElementById('Correo');
var contraseña = document.getElementById('Contraseña');
var error = document.getElementById('error');
var abrir = document.getElementById('vent');



function enviarFormulario()
{ console.log('Enviando...');

var mensajesError = [];

if(correo.value==0 || correo.value ===''){
    mensajesError.push('Opps! Por favor escribe un correo valido');
    
}

else if(nombre.value==0 || nombre.value ===''){
    mensajesError.push('¡Opps! Por favor escribe un nombre valido');
    
}


else if(contraseña.value==0 || contraseña.value ===''){
    mensajesError.push('¡Opps! Campo de contraseña vacio');
} 
else{
    
    
    document.getElementById('vent').style.display="block";
    

}







    



error.innerHTML = mensajesError.join('');
return false;


    }
  

    
    

    

    

   