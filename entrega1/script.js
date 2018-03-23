
function redraw(){

	axioma=$("#axioma").val()

	const expresion = new Expresion(axioma)

	N=$("#iteraciones").val()
		
	var_angulo = document.getElementById('var_angulo').value;

	reglas=$("#reglas").children()

	var arg;
	var prod;

	reglas.each(function() {
		inputs=$( this ).find("input")
	  	inputs.each(function(index) {
	  		if(index%2==0){
	  			arg=$( this ).val()
	  		}else{
				prod=$( this ).val()  			
	  		}
		});
		expresion.addRegla(arg,prod)
	});

	kook=expresion.expandir(N)

	result= expresion.contenido


	if (Pjs) {
		Pjs.remove();
	}
	try {
		Pjs = new p5(s, "p5Canvas");
	} catch(e) {
		alert(e);
	}

}
var room = 1;
function education_fields() {
 
    room++;
    var objTo = document.getElementById('reglas')
    var divtest = document.createElement("li");
	divtest.setAttribute("class", "list-group-item removeclass"+room);
	var rdiv = 'removeclass'+room;  
    divtest.innerHTML = ' <div class="row"> <div class="col-md-5"> <input type="text" class="form-control" placeholder="Argumento"> </div> <div class="col-md-5"> <input type="text" class="form-control" placeholder="Producción"> </div> <div class="col-md-2"> <button class="btn btn-danger btn-block" type="button"  onclick="remove_education_fields('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button> </div> </div> ';
    
    objTo.appendChild(divtest)
}
   function remove_education_fields(rid) {
	   $('.removeclass'+rid).remove();
   }


