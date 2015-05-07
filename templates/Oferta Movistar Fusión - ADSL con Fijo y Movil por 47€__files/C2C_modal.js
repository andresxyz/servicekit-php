
/**
 * Objeto pensado para gestionar lo relacionado con los popup
 * 
 * Crea un objeto modal con identificador id
 * 
 * @param idModal:String Identificador del div del modal a crear
 * @param tipoModal:String [info | url]
 * @param contenido {} Objeto con el contenido del modal
 * 			content.mensaje =""; Es el mensaje a mostrar
 * 			content.url = ""; Solo para el caso tipo url, indica la url de la que obtener la info
 * 
 * @returns El modal
 */
function Modal(idModal, tipoModal, contenido){
	
	
	var version =  (superCapaVersion != undefined)? superCapaVersion : "5.30";
	
	var jModal = null;								//Puntero jQuery
	var cargado = false; 							//Determina si ya se cargo el modal
	var id = idModal || "";							//Identificador del modal
	var capa = ""; if(id) capa = "#" + id;
	
	var tipo = tipoModal || "";						//Tipo del modal [info]
	this.content = contenido || {} ;				//Contenido del modal [mensaje | url]
	
	
	var cont_html = {
		info: '<link rel="stylesheet" href="//www.movistar.es/estaticos/html/modal/css/c2c-modal-gen-v2.css"><div class="c2c-modal" id="modal-c2c"><div class="c2c-modal-container"><div class="c2c-modal-body"><div class="mod-header mod-section"><div class="mod-row"><div class="mod-col-xs-10"><img style="width:30%;" src="http://www.movistar.es/estaticos/landings/img/common/logo-movistar.png"></div><div class="mod-col-xs-2"><a class="mod-close c2c-btn-close" href="javascript:void(0);">X</a></div></div></div><div class="mod-content mod-section"><div class="mod-row"><div class="mod-col-xs-12"><div class="mod-separador"><div class="mod-title"><h1>Servicio de Atenci&oacute;n Online</h1></div></div></div></div></div><div class="mod-content mod-section"><div class="mod-row"><div class="mod-col-xs-12"><div class="c2c-modal-mensaje"></div></div></div></div><div class="mod-footer mod-section"><div class="mod-row"></div></div></div></div></div><script>var body = document.body,html = document.documentElement;var height = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );var Dtop = (window.pageYOffset || html.scrollTop)  - (html.clientTop || 0);document.getElementsByClassName("c2c-modal")[0].style.height = height+"px";document.getElementsByClassName("c2c-modal")[0].style.paddingTop = Dtop+"px";</script>',
		url: '<div class="c2c-modal" id="modal-c2c" tabindex="-1" role="dialog"><div class="c2c-modal-container"><div class="c2c-modal-body"><div class="c2c-modal-mensaje"></div></div></div></div>'
	};
	
	/**
	 * Cierra el modal. 
	 * 
	 * @param id Identificador del modal
	 * @param eliminar si true, se elimina el html
	 */
	this.closeC2CModal = function(eliminar){
		
		
		if(eliminar == true){
			$(capa + ".c2c-modal").fadeOut(function(){
				$(capa + ".c2c-modal").remove();
				cargado = false;
			});	
		
		}else{
			$(capa + ".c2c-modal").fadeOut();
		}
	};
	
	
	/**
	 * Establece la accion de los elementos, botones y demás
	 * 
	 * @returns Objeto jQuery con la ventana
	 */
	this.startModal = function(){
		
		if(jModal){
			
			var yo = this;
			jModal.fadeIn();		
			
			jModal.find(".c2c-btn-close").click(function(){
				yo.closeC2CModal(false);		
			});
			
			$(document).keyup(function(e){
			    if(e.keyCode === 27)
			    	yo.closeC2CModal(false);
			});
			
			if(yo.content){
				if(yo.content.mensaje)
					jModal.find(".c2c-modal-mensaje").html(yo.content.mensaje);
			}
			
			//Ajuste contenido
			if(screen.height < jModal.find(".c2c-modal-container").height()){
			    jModal.find(".c2c-modal-body").height(screen.height);
			    jModal.find(".c2c-modal-body").css("overflow-y", "scroll");
			}
			
			return $(capa + ".c2c-modal");
		}
	};


	/**
	 * Hace la petición para la carga del modal
	 * 
	 * @param funcOnLoad:function Función que se ejecutará tras la carga
	 */
	this.loadModal = function(funcOnLoad){
		
		var yo = this;
		
		//Si no ha sido cargado ya
		if(cargado==false || !jModal){
			
			var currentData = cont_html[tipo];
			
			if(currentData){
				
				$(".c2c-modal").remove(); 		//Existencia previa
				$("body").append(currentData);
				
				$("#modal-c2c").attr("id", id);
				
				//Inicializar
				jModal = $(capa + ".c2c-modal");
			    
			    if(tipo == "url" && yo.content.url){
					$.post(yo.content.url, function(data){
						
						jModal.find(".c2c-modal-mensaje").append(data);
						
					    if(funcOnLoad)
					    	funcOnLoad();
					    
					    cargado = true;
					    yo.startModal();
					});
				}else{
					
					if(funcOnLoad)
				    	funcOnLoad();
				    
				    cargado = true;
				    yo.startModal();
				}
			    
			}
			
		}else{
			yo.startModal();
			
			if(funcOnLoad)
		    	funcOnLoad();
		}
	};	
	
	
	/**
	 * Devuelve el id
	 */
	this.getId = function(){
		return id+"";
	};
	
	
	this.getVersion = function(){
		return version;
	};
}

//---------------c2c_modal.js-----------------------

