class Expresion {

  constructor(contenido) {
    this.contenido = contenido;
    this.reglas=[]
  }
  
  addRegla(arg,prod){

    this.reglas[arg]=prod
    
  }

  expandirse(){

    var resultado=""
    var reglas=this.reglas

    var lista=this.contenido.split("");
    lista.forEach(function(element) { 

      var regla=reglas[element]
      if(regla){
        resultado+=regla
      } else{
        resultado+=element
      }     
          
    });  
    this.contenido=resultado


  }
  expandir(n){

    console.log('koko')

    for (var i = 0; i < n; i++) { 
      this.expandirse()
    }
  }

  
}
