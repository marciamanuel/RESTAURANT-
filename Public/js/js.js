
    function media(){
     var nota1 = parseFloat(document.getElementById("nota1").value);
     var nota2 = parseFloat(document.getElementById("nota2").value);
     var Mac = parseFloat(document.getElementById("Mac").value);

     var media = (nota1 + nota2+Mac)/3 ;

     if(media >= 7)
      if(media==10)
       alert("Uau! Aprovado!");
      else
       alert("Parabens, aprovado! Media "+media);
     else
      alert("Reprovado!")

    }
