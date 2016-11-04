function sendMail() {
    var mail = $("#mail").val();

    if (!mail) {

        $("#alert").attr("style", "display:none");
        $("#alert").fadeToggle("slow");
        $("#messageAlert").html("<strong>Attention!</strong>Please write an mail");
        $("#mail").attr("style", "border-color:red");

    } else {
        var data = {
            mail: mail,
        };
        $.ajax({async: true,
            type: "POST",
            dataType: "JSON",
            url: "login/dataregister",
            data: data,
            success: function (data) {
                if (data.response == "OK") {
                    $("#loginMail").attr("style", "display:none");
                    $("#mail").attr("style", "border-color:#c8c8c8");
                    $("#password").attr("style", "display:none");
                    $("#information").attr("style", "display:none");
                    $("#information").fadeToggle("slow");
                    $("#informationBlue").html("<strong>Information!</strong>" + (data.message));
                    $("#loginMail").fadeToggle("slow");
                    $("#password").fadeToggle("slow");
                    $("#alertRegistry").attr("style", "display:none");
                    $("#registry").attr("style", "display:hidden");
                    $("#registry").fadeOut("fast");
                    $("#alert").attr("style", "display:none");
                    $("#sendUser").attr("style", "display:none");
                } else {


                    $("#alert").attr("style", "display:none");
                    $("#alert").fadeToggle("slow");
                    $("#messageAlert").html("<strong>Attention!</strong>" + (data.message));
                    $("#mail").attr("style", "border-color:red");
                }





            },
            timeout: 1000000,
            error: function (data) {
                alert("ocurrio error");
            }

        });
    }
}




function registerMail() {

    $("#alert").attr("style", "display:none");
    $("#mail").attr("style", "border-color:#c8c8c8");
    $("#registryEmail").attr("style", "display:none");
    $("#registryEmail").fadeToggle("slow");
    $("#information").attr("style", "display:none");
    $("#information").fadeToggle("slow");
    $("#informationBlue").html("<strong>Information!</strong>Please write an mail.");
    $("#registry").attr("style", "display:hidden");
    $("#registry").fadeOut("fast");
    $("#sendUser").attr("style", "display:none");

}


function  registerUser() {
    var mail = $("#mail").val();
    if (!mail) {
        $("#alert").attr("style", "display:none");
        $("#alert").fadeToggle("slow");
        $("#messageAlert").html("<strong>Attention!</strong>Please write an mail");
        $("#mail").attr("style", "border-color:red");
        $("#information").attr("style","display:none");
    } else {
        var data = {
            mail: mail


        };
        $.ajax({async: true,
            type: "POST",
            dataType: "JSON",
            url: "login/registerUser",
            data: data,
            success: function (data) {
                if (data.response == "OK") {
                    $("#alert").attr("style", "display:none");
                    $("#alert").fadeToggle("slow");
                    $("#messageAlert").html("<strong>Attention!</strong>"+(data.message));
                    $("#mail").attr("style","border-color:red");
                    $("#information").attr("style","display:none"); 
                } else {
                      $("#alert").attr("style", "display:none");
                      $("#registryEmail").attr("style","display:none");
                      $("#loginMail").attr("style", "display:none");
                      $("#loginMail").fadeToggle("slow");
                      $("#mail").attr("style", "border-color:#c8c8c8");
                      $("#information").fadeToggle("slow");
                      $("#informationBlue").html("<strong>Information!</strong>" +(data.message));
                      $("#password").attr("style", "display:none");
                      $("#password").fadeToggle("slow"); 

                }
            },
            timeout: 1000000,
            error: function (data) {
                alert("ocurrio error");
            }

        });
    }
}


function loginUser() {
    var mail = $("#mail").val();
    var pass = $("#pass").val();

    if (!mail && !pass) {
        $("#mail").attr("style", "border-color:red");
        $("#pass").attr("style", "border-color:red");
        $("#alert").attr("style", "display:none");
        $("#alert").fadeToggle("slow");
        $("#messageAlert").html("<strong>Attention!</strong>Please write your email and password.");
        $("#information").attr("style", "display:none");

    } else if (!mail && pass) {
        $("#mail").attr("style", "border-color:red");
        $("#pass").attr("style", "border-color:#c8c8c8");
        $("#alert").attr("style", "display:none");
        $("#alert").fadeToggle("slow");
        $("#messageAlert").html("<strong>Attention!</strong>Please write your email.");
        $("#information").attr("style", "display:none");
    } else if (mail && !pass) {
        $("#mail").attr("style", "border-color:#c8c8c8");
        $("#pass").attr("style", "border-color:red");
        $("#alert").attr("style", "display:none");
        $("#alert").fadeToggle("slow");
        $("#messageAlert").html("<strong>Attention!</strong>Please write your password.");
        $("#information").attr("style", "display:none");

    } else if (mail && pass) {
        $("#form").submit();


    }

}
