document.getElementById('btnIngresarOtroValor').addEventListener('click', cargarPaises);

document.getElementById('campoValor').addEventListener('blur', activarBoton);


function activarBoton() {
    // console.log(2+2);
      if($("#campoValor").val()!="") {
          $("#btnIngresarOtroValor").removeClass("disabled");
      }
      else if ($("#campoValor").val() == ""){
         $("#btnIngresarOtroValor").addClass("disabled");
      }
}





function cargarPaises() {
    
    //    //   aqui realizamos la conecion ya sea a una archvo o a una appi
    // fetch('js/plugins/countries.json')
    //     .then((respuesta) => {
          
    //         // console.log(respuesta.json());
    //         return respuesta.json(); //nos retorna una promesa
    //     })
    //     .then(data => { //hacemosel then para mostrar la promesa retornada en fetch
    //         let html='';           
    //         data.forEach((pais) => {
                 
    //            html += `
    //                <option value="${pais.code}">${pais.name}</option>              
    //             `;
    //         })
    //         document.getElementById('pais').innerHTML+=html;
    //     }, error => {
    //         console.log(error);
    //     })

    // AGREGAMOS EL VALOR INGRESADO POR EL USUARIO
      $(".valor").text(Number($("#campoValor").val()));
      $(".valor").attr("valor",$("#campoValor").val());

      pagarConPayu()
}


// ACCION CUANDO CAMBIAMOS DE DIVISA
let divisaBase = "USD";

$("#divisa").change(function(){
 
    $(".alert").remove();

    $(".nombreDivisa").text($(this).val() + " " + "$");

    let divisa = $(this).val();
    
    $.ajax({
        url: "http://free.currconv.com/api/v7/convert?q="+divisaBase+"_"+divisa+"&compact=ultra&apiKey=c0a8365d0710af5ca93b",
        type: "GET",
        cache: false,
        contentType: false,
        processData: false,
        dataType: "jsonp",
        success: function (respuesta) {
            pagarConPayu()
            let conversion = (respuesta["USD_"+divisa]).toFixed(2);
            // console.log(conversion);
            
            $(".nombreDivisa").html(divisa+" $");
            

            $(".subTotal, .total").html(
               
                (Number(conversion) * Number($(".subTotal").attr("valor"))).toFixed(2)

             )

             total = (Number(conversion) * Number($(".subTotal").attr("valor"))).toFixed(2);

        }

    }) 
    
})


// FUNCION PAGAR CON PAYU
function pagarConPayu(){

  let apiKey = "5YweubKwiHN15QoRMF9w39Tk7s";
  
  let merchantId = 843063;
    // console.log(merchantId);
  let accountId = 850547;
    // console.log(accountId);
  let amount = $(".subTotal").html();
  let donacion = (Number(Math.ceil(Math.random()*1000000))+Number(amount).toFixed());
    console.log(donacion);
  let divisa = $("#divisa").val();
    // console.log(divisa);
    // console.log("==============================");
  let signature = hex_md5(apiKey+"~"+merchantId+"~"+donacion+"~"+amount+"~"+divisa);
//   console.log(signature);

  let buyerEmail="ricacor3@gmail.com";

  $(".formPayu input[name='merchantId']").attr("value", merchantId);
  $(".formPayu input[name='accountId']").attr("value", accountId);
  $(".formPayu input[name='signature']").attr("value", signature);
  $(".formPayu input[name='amount']").attr("value", amount);
  
  $(".formPayu input[name='referenceCode']").attr("value", donacion);
//   $(".formPayu input[name='shipmentValue']").attr("value", envio);
  $(".formPayu input[name='currency']").attr("value", divisa);
  


}





