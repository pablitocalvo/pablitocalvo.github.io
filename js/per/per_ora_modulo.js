 
 ora_minuti_element=document.getElementById("per_ora_minuti");
 modulo_element = document.getElementById("per_modulo");
 const i_oraIng = 8*60 ;
 const i_oraUsc = 14*60 + 18 ;
       
 function aggiorna(){

	 
 
	    var d = new Date();
        var t = d.getTime();
        //var giorno=d.getDay();
        var ora=d.getHours();
        var minuti=d.getMinutes();

		ora_minuti_element.innerHTML= ora+":"+minuti;
		
//giorno=2;
// ora=8; minuti=15;
//alert ( "testing g="+giorno+" h="+ora+" m="+minuti+" 5C_si");
//traduce ora:minuti in ora espressa in minuti (dalla mezzanotte)
         var i_orario =  ora*60 + minuti;

        if ((i_orario < i_oraIng ) || (i_orario > i_oraUsc ))  {
			modulo_element.innerHTML= "free time !!";
			return;
        }

        // orascol è la ora scolastica [ 1 , 7 ]
        var oraScol= Math.floor((i_orario - i_oraIng) /54) +1 ;
		modulo_element.innerHTML= oraScol;
		return;
}

//aggiorna();
