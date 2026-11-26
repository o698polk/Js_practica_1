function obtenerNumeros() {
    let numero1= parseFloat(document.getElementById("numero1").value);
    let numero2= parseFloat(document.getElementById("numero2").value);
    
    if(isNaN(numero1) || isNaN(numero2)){
         alert("Por favor ingrese los dos numeros.")
         return;
    }
    
    let resultado = sumar();
 
    document.getElementById("resultado").textContent = resultado;

 
}

function sumar(){
    obtenerNumeros()
    return n1 + n2 ;

}