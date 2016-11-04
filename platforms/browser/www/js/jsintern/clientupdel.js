/*$(".editthis").click(function(){
    var id=$(this).attr("value");
    $("#idedit").val(id);
});*/

   function editpass(id){
	   /*var id=$(this).attr("value");*/
       $("#idedit").val(id); 
	   $.colorbox({inline:true, width:"100%",height:"70%",open:true, href:"#editpass"});
	   
   }


/*$(".deletethis").click(function(){
    var id=$(this).attr("value");
    $("#iddelete").val(id);
});*/
  function deletepass(id){
    $("#iddelete").val(id);
    $.colorbox({inline:true, width:"100%",height:"35%",open:true, href:"#deletepass"});	
	}
	

/*$(".showp").click(function(){
    var id=$(this).attr("value");
    $("#idshow").val(id);
	alert("hola");
});*/
function showpass(id){
    $("#idshow").val(id);
	$.colorbox({inline:true, width:"100%",height:"63%",open:true, href:"#showpass"});
}

$("#canceldel").click(function(){
    $("#iddelete").val("");
    $("#deletepass").colorbox.close();
});
$("#canceledit").click(function(){
    $("#idedit").val("");
    $("#oldpass").val("");
    $("#newpass").val("");
    $("#confirmpass").val("");
    $("#updateenckey").val("");
    $("#alertedit").html("");
    $("#alertedit").attr("style","display:none;");       
    $("#editpass").colorbox.close();
});
$("#cancelshow").click(function(){
    $("#idedit").val("");
    $("#showenc").val("");
    $("#psw").text("");
    $("#showpass").colorbox.close();
    
});

$("#showpbutton").click(function(){
    var idregister = $("#idshow").val();
    var encval = $("#showenc").val();
	var token = localStorage.getItem("token");  
    var data = {
        idregister: idregister,
        encval: encval,
        token: token
        };
    $.ajax({
        async: true,
        type: "POST",
        dataType: "JSON",
        url: "http://192.168.1.66/paranoidkeeper/insertpass/getpass",
        data: data,
        success: function (data) {
          $("#psw").text(data.message);
        },
        timeout: 1000000,
        error: function (data) {
            alert("ocurrio error");
        }

    });
});



   $("#delpbutton").click(function(){
   var idregister = $("#iddelete").val();
   var token = localStorage.getItem("token");  
   var data = {
        idregister: idregister,
        token:token
        };
       $.ajax({
        async: true,
        type: "POST",
        dataType: "JSON",
        url: "http://192.168.1.66/paranoidkeeper/insertpass/delpass",
        data: data,
        success: function (data) {	
		$("#iddelete").val("");
		$("#deletepass").colorbox.close();
	    window.location.assign("seepass.html");
			

        },
        timeout: 1000000,
        error: function (data) {
            alert("ocurrio error");
        }

    }); 
}); 


$("#updatepbutton").click(function(){
    if($("#newpass").val().length>8 &&$("#confirmpass").val().length>8 && tiene_numeros($("#newpass").val())&& tiene_numeros($("#confirmpass").val()) && tiene_minusculas($("#newpass").val())&& tiene_minusculas($("#confirmpass").val()) && tiene_mayusculas($("#newpass").val())&&tiene_mayusculas($("#confirmpass").val())){
        var data = {
            oldpass: $("#oldpass").val(),
            newpass: $("#newpass").val(),
            confirmpass: $("#confirmpass").val(),
            encval: $("#updateenckey").val(),
            idregister:$("#idedit").val(),
            token:$("#token").val()
            };
        $.ajax({
            async: true,
            type: "POST",
            dataType: "JSON",
            url: "http://192.168.1.66/paranoidkeeper/insertpass/updatepass",
            data: data,
            success: function (data) {
				if(data.response == "ok"){
				  $("#idedit").val("");
                  $("#oldpass").val("");
                  $("#newpass").val("");
                  $("#confirmpass").val("");
                  $("#updateenckey").val("");
                  $("#alertedit").html("");
                  $("#alertedit").attr("style","display:none;");       
			      $("#editpass").colorbox.close();
                  alert("Password Changed"); 
				}else{
		    $("#alertedit").html("<strong>Attention</strong>"+ (data.message));
            $("#alertedit").attr("style","display:block;");  
            $( "#alertedit" ).fadeOut( 5000, "linear");  	
					
				}
            },
            timeout: 1000000,
            error: function (data) {
                alert("ocurrio error");
            }

        });
    }else{
        $("#alertedit").html("<strong>Attention</strong> Your password must be more than 8 characters between uppercase and lowercase letters and numbers");
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
	
	  $(document).ready(function(){
				var key = localStorage.getItem("token");
					var data = {
						token: key
					};
				$.ajax({async: true,
						type: "POST",
						dataType: "JSON",
						url: "http://192.168.1.66/paranoidkeeper/insertpass/getregistersmobile",
						data: data,
						success: function (data) {
							if (data.response == "ok") {
								$("#token").val(localStorage.getItem("token"));
								var registers = ("registers",JSON.stringify(data.info['pass']));	
							    var arrayregistros = $.parseJSON(registers);
				var tableregisters = "<thead>"+
                                '<tr role="row">'+
                                    "<th>Name</th>"+
                                    "<th>Description</th>"+

                          
						  
                                    "<th>Options</th>"+
                                "</tr>"+
                            "</thead><tbody>";
				if(arrayregistros){
					$.each(arrayregistros, function (i,v)
					{
						tableregisters= tableregisters+"<tr role='row' class='odd'>"+
											"<td>"+v.name+"</td>"+
                                            "<td >"+v.descripcion+"</td>"+
                                            "<td ><a class='inline editthis'  onclick='editpass("+v.id+")' href='#editpass' value='"+v.id+"' alt='Edit'><i class='fa fa-edit' ></i> </a>&nbsp;<a class='inline deletethis'  onclick='deletepass("+v.id+")' href='#deletepass' value='"+v.id+"' alt='Delete'><i class='fa fa-remove' ></i></a>&nbsp;&nbsp;<a class='inline showp' href='#showpass' onclick='showpass("+v.id+")' value='"+v.id+"' alt='show'><i class='fa fa-eye'></i></a></td>"+
                                "</tr>";								
					});
					tableregisters=tableregisters+"</tbody>";
					$("#datatable-responsive").html(tableregisters);
					
				}
							} else {
								alert(data.message);
							}
						},
						timeout: 1000000,
						error: function (data) {
							alert("error to get registers");
						}
					});

				
			



				$(".logout").click(function(){
					localStorage.removeItem("token");
					window.location = "index.html";
				});
});
