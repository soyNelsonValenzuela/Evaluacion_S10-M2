$(document).ready(function() {
  
    $("#Rio").click(function() {
      var idBoton = $("#Rio").attr("id");
      $("#detalles" + idBoton).toggle();
    });
    
     $("#Baires").click(function() {
       var idBoton = $("#Baires").attr("id");
       $("#detalles" + idBoton).toggle();
     });

     $("#MachuPicchu").click(function() {
       var idBoton = $("#MachuPicchu").attr("id");
       $("#detalles" + idBoton).toggle();
     });


    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
  });