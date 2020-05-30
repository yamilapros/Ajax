$(document).ready(function(){
    sendData()
    getData()
    addData()

    //Guardar datos
    function sendData(){
        $('#formulario').submit(function(e){
            //Prevengo que se mande el formulario
            e.preventDefault()
            //Recibir datos de formulario
            var usuario = {
                name : $('input[name="name"]').val(),
                job : $('input[name="job"]').val()
            }
            //Método Ajax
            $.ajax({
                type : 'POST',
                url : 'procesar.php',
                data : usuario,
                beforeSend : function(){
                    console.log("Enviando datos...")
                },
                success : function(response){
                    var objeto = JSON.parse(response)
                    console.log(objeto[0])
                    $('.response').append('El nombre es ' + objeto[0] + ' y el apellido es ' + objeto[1])
                },
                error : function(){
                    console.log("Ha ocurrido un error")
                },
                timeout : 2000
            })
        })
    }

    //Recibir datos
    function getData(){
        $('#getData').click(function(){
            $.ajax({
                type : 'GET',
                url : 'https://reqres.in/api/users?page=2',
                beforeSend : function(){
                    console.log("Trayendo datos del usuario")
                },
                success : function(response){
                    response.data.forEach(function(elem, index){
                        $('#tbody').append('<tr><td>'+elem.id+'</td><td>'+elem.first_name+'</td><td>'+elem.last_name+'</td><td>'+elem.email+'</td></tr>')
            
                    })
                },
                error: function(){
                    console.log("Hay un error en la consulta")
                }
            })
        })
    }

    //Realizar operaciones con Ajax
    function addData(){
        $('#btn-add').click(function(){
            var numeros = {
                num1 : $('input[name="num1"]').val(),
                num2 : $('input[name="num2"]').val()
            }
            
            $.ajax({
                url : 'sumar.php',
                type : 'POST',
                data : numeros,
              
                beforeSend : function(){
                    console.log("Esperando suma")
                },
                success : function(response){
                    $('.result').append("El resultado es: " + response)
                }
            })
        })
    }
})

