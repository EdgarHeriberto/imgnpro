
$(document).ready(function(){

                var strspecname = localStorage.getItem("specname");
                var v_typespec = localStorage.getItem("typespec");
                var nDPI = localStorage.getItem("DPI");
                var currentdpinone = localStorage.getItem("dpinone");
                $('#specname').focus();
                if(strspecname !== null){
                    $("#specname").attr("value",strspecname);
                }
                if(nDPI !== null){
                    $("#depeis").attr("value",nDPI);
                }
                if (currentdpinone !== null){
                    if (currentdpinone === 'none'){
                        $('input:checkbox[name=dpinone]').prop('checked',true);
                    }
                    else{
                        $('input:checkbox[name=dpinone]').prop('checked',false);
                    }
                    desactAllNext();
                    //$('#marco').removeClass(currentClassName).addClass(currentAlignHor);  
                    //$('#' + currentAlignHor).prop("checked", true);
                }
                if (v_typespec == 'free'){

                    desactForm('specForm');       

                }

                $('#buttonspec').click(function (ev) {
                    var imageselected = localStorage.getItem('imageselected');
                    if ($('#specname').val().trim() === ''){
                        alert("Favor de capturar el nombre de la especificación");    
                        $('#specname').focus();
                    }
                    else{

                          localStorage.setItem("specname", $('input:text[name=name]').val());
                          localStorage.setItem("format", $('select[name="format"]').val());
                          localStorage.setItem("colormode", $('select[name="colormode"]').val());
                          localStorage.setItem("background", $('select[name="background"]').val());
                          localStorage.setItem("backgrndcolor", $('#colorselect').val());
                          localStorage.setItem("dpinone","");
                          localStorage.removeItem("DPI");

                        
                          if($('input:checkbox[name=dpinone]').is(":checked")) {
                            localStorage.setItem("dpinone", $('input:checkbox[name=dpinone]').val());
                          }
                          else
                          {
                            localStorage.setItem("DPI", $('input:text[name=DPI]').val());
                          }
                          document.location.href="/chooseasize";
                    }
                    ev.preventDefault();
                });
                // $("#imageForm input[name=image]").change(function(){
                //     var imageselected = $('input:radio[name=image]:checked').val();
                //     localStorage.setItem("imageselected", imageselected);
                // });

                // var buttonspec = $('#buttonspec');
                // var frm = $('#specForm');
                // buttonspec.click(function (ev) {
                //     $.ajax({
                //         type: frm.attr('method'),
                //         url: frm.attr('action'),
                //         data: frm.serialize(),
                //         success: function (data) {
                //             if (data.error == 1 ){
                //                 document.getElementById('res_message').innerHTML= data.message;    
                //             }
                //             else{
                //                 setTimeout(window.location='/subirimagen4.html',500);
                //             }
                //         }
                //     });
                //     ev.preventDefault();
                // });  
//$( "#myselect option:selected" ).text();

//                $("#background").change(function() {
//                    if($("#background option:selected").text() ==='COLOR' ){
//                        $('#colorselect').prop("disabled", false);
//                      }
//                    else{
//                       $('#colorselect').prop("value", '#ffffff');
//                       $('#colorselect').prop("disabled", true);
//
//                    }
                $("#background").change(function() {
                    if($("#background option:selected").text() ==='COLOR' ){
                        $('#colorselect').prop("disabled", false);
                      }
                    if($("#background option:selected").text() ==='BLANCO' ){
                        $('#colorselect').prop("value", '#FFFFFF');
                        $('#colorselect').prop("disabled", true);
                      }
                    if($("#background option:selected").text() ==='NEGRO' ){
                        $('#colorselect').prop("value", '#000000');
                        $('#colorselect').prop("disabled", true);
                      }
                    if($("#background option:selected").text() ==='SIN FONDO' ){
                        $('#colorselect').prop("value", '#E5E5E5');
                        $('#colorselect').prop("disabled", true);
                      }
                
                });
                $("#format").change(function() {

                    //alert( $("#format option:selected").text());
                      $('#sin_fondo').prop("disabled", false);
                      $('#mode_cmyk').prop("disabled", false);
                      if($("#format option:selected").text() ==='JPG' || $("#format option:selected").text() ==='JPG WEB' ){
                        $('#sin_fondo').prop("disabled", true);
                        $('#background').prop("value", 'blanco');
                        $('#colorselect').prop("value", '#ffffff');
                        $('#colorselect').prop("disabled", true);
                      }

                      if($("#format option:selected").text() ==='JPG WEB' || $("#format option:selected").text() ==='PNG' ){
                        localStorage.removeItem('clippingpath');
                        $('#mode_cmyk').prop("disabled", true);
                        $('#colormode').prop("value", 'rgb');
                       }
                  
                });

              function desactForm(formName){
                    $('#div_msgDemo').show();
                    //$('#' + formName).find('input, textarea, button, select').prop('disabled',true);
                    $('#specname').prop('disabled',true);
               } 


            });