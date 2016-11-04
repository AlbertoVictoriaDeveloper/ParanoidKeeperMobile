$("#registerbutton").click(function(){
    if($("#name").val()&&$("#description").val()&&$("#url").val()&&$("#pass").val()&&$("#enckey").val()){
        if(tiene_numeros($("#pass").val())&&tiene_minusculas($("#pass").val())&&tiene_mayusculas($("#pass").val())){
       var name = $("#name").val();
	   var description=$("#description").val();
	   var url =$("#url").val();
	   var pass =$("#pass").val();
	   var enckey= $("#enckey").val();
	   var token = localStorage.getItem("token");  
       var data = {
					name: name,
					description: description,
					url: url,
					token:token,
					pass:pass,
					enckey:enckey
				};
				
                $.ajax({async: true,
					type: "POST",
					dataType: "JSON",
					url: "http://192.168.1.66/paranoidkeeper/insertpass/registerPassMobile",
					data: data,
					success: function (data) {
						if (data.response == "ok") {
				        alert(data.message); 
					    window.location.assign("seepass.html");
						} else {
					    $("#alertedit").html("<strong>Attention</strong>"+ (data.message));
                        $("#alertedit").attr("style", "display:block;");
                        $("#alertedit").fadeOut(5000, "linear");
						}
					},
					timeout: 1000000,
					error: function (data) {
						alert("Revisa tus parametros");
					}
				});
        }else{
            $("#alertedit").html("<strong>Attention</strong> Your password must be more than 8 characters between uppercase and lowercase letters and numbers");
            $("#alertedit").attr("style","display:block;");  
            $( "#alertedit" ).fadeOut( 5000, "linear");
        }
    }else{
        $("#alertedit").html("<strong>Attention</strong> Complete all fields");
        $("#alertedit").attr("style","display:block;");  
        $( "#alertedit" ).fadeOut( 5000, "linear");
    }
});
function tiene_numeros(texto){
        var numeros="0123456789";
       for(i=0; i<texto.length; i++){
          if (numeros.indexOf(texto.charAt(i),0)!=-1){
             return 1;
          }
       }
       return 0;
    }
    function tiene_minusculas(texto){
        var letras="abcdefghyjklmnñopqrstuvwxyz";
       for(i=0; i<texto.length; i++){
          if (letras.indexOf(texto.charAt(i),0)!=-1){
             return 1;
          }
       }
       return 0;
    }
    function tiene_mayusculas(texto){
        var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
       for(i=0; i<texto.length; i++){
          if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
             return 1;
          }
       }
       return 0;
    }