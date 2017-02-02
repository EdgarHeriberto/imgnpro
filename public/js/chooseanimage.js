
 $(document).ready(function(){

                var v_specname = localStorage.getItem("specname");
                var v_typespec = localStorage.getItem("typespec");
                //var v_specid = localStorage.getItem("specid");

                localStorage.clear(); // limpia el localstorage
                localStorage.setItem("specname", '<%= specname %>');
                localStorage.setItem("typespec", '<%= typespec %>');
                //localStorage.setItem("specid", '<%= specid %>');

                if (v_typespec == 'free'){
                    localStorage.setItem("specname", v_specname);
                    localStorage.setItem("typespec", v_typespec);
                    //localStorage.setItem("specid", v_specid);
                }
                if ('<%= typespec %>' == 'normal'){
                    localStorage.clear();
                }

                $('#buttoncontorder').click(function (ev) {
                    var imageselected = localStorage.getItem('imageselected');
                    if (imageselected === null){
                        alert("Favor de seleccionar una imagen");    
                    }
                    else{
                          document.location.href="/chooseaspecification";
                    }
                    ev.preventDefault();
                });
                $("#imageForm input[name=image]").change(function(){
                    var imageselected = $('input:radio[name=image]:checked').val();
                    //var imageselected = $('input:radio[name=image]:checked').attr('src');
                    localStorage.setItem("imageselected", imageselected);
                });
                
            });
            