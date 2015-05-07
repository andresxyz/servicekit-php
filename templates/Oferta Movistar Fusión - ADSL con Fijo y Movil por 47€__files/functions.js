//===========================================>*/
//Functions JS */
//<==========================================================================================================>*/
//Author: GW */
//Date: 06/10/2014 */
//Version: 1.40*/
//<==========================================================================================================>*/
//Session
var utma = getCookie('__utma');
var idSession=utma.split('.')[1]+utma.split('.')[2]; //GLOBAL IDSESSION EN LANDINGS
var CMN_CAPA_EXPRES_ON_WEEK = [8, 23]; //Intervalo Activo de CMN en CapaExpress Diario 
var CMN_CAPA_EXPRES_ON_SATURDAY = [8, 22]; //Intervalo Activo de CMN en CapaExpress Sabado
var CMN_CAPA_EXPRES_ON_SUNDAY = [10, 22]; //Intervalo Activo de CMN en CapaExpress Domingo

//FUNCIONES
function getCookie(cname){	
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
return "";
}

function setCookie(cname,value,exdays){
	var exdate= new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var cvalue=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()+";path=/");
	document.cookie=cname + "=" + cvalue;
}

function getURLvar(var_name){
    var re = new RegExp(var_name + "(?:=([^&]*))?", "i");
    var pm = re.exec(decodeURIComponent(location.search));
    if(pm === null) return undefined;
    return pm[1] || "";
}

/*
 * Asigna la funcionalidad de abrir modal en el botón de condiciones. (importante incluir C2C_modal.js en la landing)
 */
function modalCondiciones(){
	var modalCond = null;
	var id = 'Condiciones';
	var mensaje='<div style="font-family: arial;text-align: left;font-size: 12px;">De conformidad con lo dispuesto en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, Telefónica de España SAU y Telefónica Móviles España SAU (en adelante Movistar) le informan que los datos recabados en este formulario serán incluidos en un fichero automatizado titularidad de dichas empresas, con la finalidad de gestionar su pedido. '+
		'Movistar garantiza la adopción de las medidas necesarias para asegurar el tratamiento confidencial de dichos datos y le informa de la posibilidad de ejercitar, conforme a dicha normativa, los derechos de acceso, rectificación, cancelación y oposición, dirigiendo un escrito, bien a Telefónica de España SAU , apartado de correo 46155 28080 Madrid y/o a Telefónica Móviles España SAU, apartado de correos 56 48080 Bilbao.</div>'; 
	modalCond = new Modal(id, 'info', {'mensaje': mensaje});			
	modalCond.loadModal();
	modalCond.startModal();	
}

/**
 * Determina si CMN-CapaExpress esta activo 
 * 
 * @returns true si CMN esta activo, false en otro caso
 */
function statusCapaCRM(){	
	var estado = "";
	var now = new Date();
	var nowDay = now.getDay();
	var nowHour = now.getHours();
	
	if (1 <= nowDay && 5 >= nowDay){ //DIARIO
		if (CMN_CAPA_EXPRES_ON_WEEK[0] <= nowHour && CMN_CAPA_EXPRES_ON_WEEK[1] > nowHour){
			estado = "on";
		}
		else{
			if(nowHour < CMN_CAPA_EXPRES_ON_WEEK[0])
				estado = "off-today";
			else
				estado = "off-tomorrow";
		}
	}
	
	else if (nowDay == 6){ //SABADO
		if (CMN_CAPA_EXPRES_ON_SATURDAY[0] <= nowHour && CMN_CAPA_EXPRES_ON_SATURDAY[1] > nowHour){
			estado = "on";
		}
		else{
			if(nowHour < CMN_CAPA_EXPRES_ON_SATURDAY[0])
				estado = "off-today";
			else
				estado = "off-tomorrow";
		}			
	}
	
	else if (nowDay == 0){ //SUNDAY
		if (CMN_CAPA_EXPRES_ON_SUNDAY[0] <= nowHour && CMN_CAPA_EXPRES_ON_SUNDAY[1] > nowHour){
			estado = "on";
		}
		else{
			if(nowHour < CMN_CAPA_EXPRES_ON_SUNDAY[0])
				estado = "off-today";
			else
				estado = "off-tomorrow";
		}			
	}
	
	return estado;
}


/**Función para lanzamiento de SC.lanzar previo check de campos de formulario C2C
 * @param order: indice del form (landing movistar TV)
 */

function checkAndSend(order){
	var funcionalidad = SC.getFuncionalidadC2C();
	
	if (funcionalidad == "completo"){//FUNC COMPLETO CAPA
		SC.lanzar("completo");
	}
	else{	
		if (order == undefined || order == null || order == "")
			order = "";
		else
			order = "-"+order;
	
		if (validarCamposC2C(order)){				
			campos={};
			campos.nombre=$('.sc-nombre-in'+order).val();
			campos.telefono=$('.sc-tel-in'+order).val();
			
			if(SC.getIdC2C() == "capaExpres"){ //IF CAPAEXPRESS
				if (statusCapaCRM() != "on"){ //IF FUERA DE HORARIO
					campos.fecha = 'Mañana';
					if (statusCapaCRM() == "off-today")
						campos.fecha = "Hoy";
					
					campos.hora = '12:00 a 15:00';
					SC.lanzar('cml',campos);
				}
				else{//DENTRO DE HORARIO
					SC.lanzar('cmn', campos);
				}
			}
			else{//VACOLBA
				SC.lanzar('cmn',campos);
			}
		}
	}
}



/**
 * Funcion que valida los campos del formulario
 * 
 * @returns true si los campos son correctos, false en otro caso
 */
function validarCamposC2C(order) {	
	var msgError = "Introduce tu nombre" ;
	var nombIn = "Nombre";

	var teL = $('.sc-tel-in'+order).val();
	var nombrE = $('.sc-nombre-in'+order).val();
	var correcto = false;
	
	$(".sc-error-nombre"+order).html("&nbsp;");
	
	if (nombrE == "" || nombrE == nombIn || valid_esNumero(nombrE)){
		$(".sc-error-nombre"+order).text(msgError);
		correcto = false;
		
	}else{
		correcto = true;
	}

	var correctoTel = validarTelefonoC2C(teL, order);
	var correctoCheck = validarCheckC2C(order);
	
	return correcto && correctoTel && correctoCheck;
}

/**
 * Valida el check de politica
 * @param order: indice del form
 * 
 * @returns true si marcado, false en otro caso
 */
function validarCheckC2C(order) {	
	var msgError = "Acepta la política de privacidad" ;	
	$(".sc-error-politica"+order).html("&nbsp;");		
	if ($(".sc-politica-in"+order).prop("checked")) {
		return true;
		
	} else {
		$(".sc-error-politica"+order).html(msgError);
		return false;
	}

}

/**
 * Funcion que valida el telefono del C2C
 * @param telefono: teléfono introducido en el formulario
 * @param capa: será el contenedor que contiene el formulario,puede ser un id o una clase
 * 
 * @returns true si correcto, false en otro caso
 */
function validarTelefonoC2C(telefono, order) {		
	var msgError = "Introduce un número válido" ;
	var correcto = false;	
	$(".sc-error-telefono"+order).html("&nbsp;");
	
	try {
		
		if (telefono.length != 9 || (telefono.substring(0, 1) != 6 && telefono.substring(0, 1) != 9
						&& telefono.substring(0, 1) != 7 && telefono.substring(0, 1) != 8)) {			
			correcto = false;
			
		} else if (valid_esNumero(telefono) ) {
			correcto=true;
			msgError = "&nbsp;";
		}

	} catch (err) {
		msgError = "Se ha producido un error al validar el campo";
	}
	
	$(".sc-error-telefono"+order).html(msgError);
	return correcto;
}

/**
 * Funcion que valida si el valor es numérico
 * @param valor: en el valor del campo que quieres validar
 * 
 * @returns true si es numerico, false en otro caso
 */
function valid_esNumero(valor) {
	
	if(!valor)
		return false;

	var numerico = /^\d{1,}$/;
	if (valor.search(numerico) == -1)
		return false;
	else
		return true;
}

$(document).ready(function(){
	try	{
		/*Cartel Cookies*/
		var segmento = "particulares";
		var esPrivada = /\/miMovistar\/|\/mimovistar\/|\/canalcliente\/|\/mimovistar-cliente\/|\/Microsites\//;
		if ($("meta[name='chan']").attr('content') != undefined)
			segmento = acentuado_minuscula($("meta[name='chan']").attr('content'));
	    var contCookies = '<div style="text-align:center; background-color:#00344e;color: #f5f6f6;overflow: hidden;position: fixed;bottom: 0px;left: 0px;width: 100%;z-index: 100;display:none;" id="contenedorCookies"><div style="padding: 10px;font-family: MovistarTextRegular;font-size: 13px;width:auto;margin:auto;" id="avisoCookies">Nuestra web utiliza cookies propias para ofrecerle un mejor servicio. Si continúa navegando, consideramos que acepta su uso.</br>Puede cambiar la configuración u obtener más información<a style="color:#5cd2ed;" href="/'+segmento+'/cookies">  aquí</a>.</div><a href="#"><div  style="background: url(/estaticos/img/btn_lightbox_close.gif) no-repeat scroll right .6em transparent;width: 20px;height: 30px;padding-bottom: 5px;position: absolute;top:10%;left: 90%;" id="cierreAviso"></div></a></div>';
	    var tieneCookie = getCookie('compruebaCkE');
	    var expireTime =  365;
	
	    if(!esPrivada.test(window.location.href)){ 
	        top.$("body").prepend(contCookies);
	        $('#cierreAviso').bind('click', function() {	            
	            $('#contenedorCookies').slideUp(); 
	        });
	
	        //Si no tiene cookie 
	        if(!tieneCookie){	
	            $('#contenedorCookies').slideDown();
	            $('#wrapper').css('position','relative');
	
	            //Si el usuario hace click o scroll consideramos que contin�a navegando
	            $(document).bind('scroll click',function(){	
	                setCookie('compruebaCkE', '1', expireTime);
	                $(document).unbind('scroll click');
	            });
	        }
    	}
	}
	catch (error)
	{}
	
	$('a.smooth').click(function(e) {
		//if (e.preventDefault) e.preventDefault();
		var $link = $(this);
		var anchor = $link.attr('href');
		$('html, body').stop().animate({
			scrollTop : $(anchor).offset().top
		}, 500);
		return false;
	});
});

//<==========================================================================================================>*/


