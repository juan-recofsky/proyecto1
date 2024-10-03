function clasesparticulares (sesion,hora){
   clase= prompt("ingrese el nombre de su clase")
   horas= parseInt(prompt("ingrese la cantidad de horas"))



   if (clase.trim()===""){
       while (clase.trim()==="") (

         clase= prompt("por favor ingrese su clase")
       );

    
    }  elif (isNaN(horas)) ;{ 

          while(isNaN(horas))(
            horas= parseInt(prompt("el campo esta vacio"))
            
            
            

          
        );
       
        
     }
         
   
 console.log ("la clase elegida" + sesion + " y durara "  + horas ) 

    
}



    
const costoclase = 400

let horastotales= clasesparticulares * costoclase

console.log("el costo total de tus clases es" + horastotales)
    
    


clasesparticulares() 





