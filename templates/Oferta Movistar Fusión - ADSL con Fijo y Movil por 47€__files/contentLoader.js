(function() {
	//APP COMUN PARA LANDINGS
  var app = angular.module('prodMod', []);
  	//CONTROLLER PARA LANDING FUSION
  app.controller('ProdController', function(){
	
	this.sProducts = ['oferta-combinada;movistar-fusion-tv-contigo',
	                  'oferta-combinada;movistar-fusion-tv-contigo-100mb',
	                  'oferta-combinada;movistar-fusion-tv',
	                  'oferta-combinada;movistar-fusion-tv-100mb'];  
	  
    this.getUrlVar = function (var_name){    	
    	var re = new RegExp(var_name + "(?:=([^&]*))?", "i");
		var pm = re.exec(decodeURIComponent(location.search));
		if(pm === null) return undefined;
		return pm[1] || "";
    };
    
    
    /*
     * Muestra los elementos que se le indique asociados a esa campaña
     * @param name string es el nombre del parametro
     * @param value string es el valor del parametro
     * @param classId array de clases/ids que se ocultarán cuando la campaña exista
     */
    this.showCampania = function (name, value, classId){
    	if (this.getUrlVar(name) == value){
    		if (typeof classId == 'string')
    			$(classId).attr('style','display: block !important');
    		if (typeof classId == 'object'){
    			for (var i = 0; i < classId.length; i++){
    				$(classId[i]).attr('style','display: block !important');
    			}
    		}
    	}    	
    };
    
    /*
     * Oculta los elementos que se le indique asociados a esa campaña
     * @param name string es el nombre del parametro
     * @param value string es el valor del parametro
     * @param classId array clases que se ocultarán cuando la campaña exista
     */
    this.hideCampania = function (name, value, classId){
    	if (this.getUrlVar(name) == value){
    		if (typeof classId == 'string')
    			$(classId).attr('style','display: none !important');
    		if (typeof classId == 'object'){
    			for (var i = 0; i < classId.length; i++){
    				$(classId[i]).attr('style','display: none !important');
    			}
    		}
    	}    	
    };
    
    this.ajustCampania = function (name, value){
    	if (this.getUrlVar(name) == value){
    		if (value == 'tar-dis-fusiontvcontigo10mb-rtb-0-201410'){
	    		$('#pill-4').attr('style','display: none !important');
	    		$('.tar-purchase').attr('style','display: none !important');
        		var e2 = $('.ld-nav-multi-desktop').children('.col-xs-2');
        		e2.removeClass('col-xs-offset-2');
        		e2.addClass('col-xs-offset-8');    
        		var e1 = $('.ld-nav-multi-desktop').children('.col-xs-8');
        		e1.removeClass();
        		e1.addClass('col-xs-2');
    		}
    		if (value == 'C-nuevacoberturafibracentro'){
    			var e1 = $('.ld-nav-multi-desktop').children('.col-xs-8');
        		e1.removeClass();
        		e1.addClass('col-xs-4');
        		var e2 = $('.ld-nav-multi-desktop').children('.col-xs-2');
        		e2.removeClass('col-xs-offset-2');
        		e2.addClass('col-xs-offset-6');    
    		}
    	}    	
    };   
    
    this.getProd = function(){
    	var prod = this.getUrlVar('prod');
    	var index = 1;
    	switch (prod){
	    	case "fusion-contigo":
	    		index = 1;
	    		break;
	    	case "fusion-contigo-100":
	    		index = 2;
	    		break;
	    	case "fusion-todos":
	    		index = 3;
	    		break;
	    	case "fusion-todos-100":
	    		index = 4;
	    		break;
	    	default:		    	
    	}
    	window.s.products=this.sProducts[index-1];
    	this.hideCampania('utm_content','nuevacoberturafibracentro',['.fusion-1', '.fusion-3']);
    	this.ajustCampania('utm_content','C-nuevacoberturafibracentro'); //Ajusto elementos que acabo de ocultar de esa campania
    	this.hideCampania('utm_content','tar-dis-fusiontvcontigo10mb-rtb-0-201410',['#ADO-fusion-promo', '#ADO-fusion-det','.fusion-2','.fusion-3','.fusion-4']);
		this.ajustCampania('utm_content','tar-dis-fusiontvcontigo10mb-rtb-0-201410');
    	
    	return index-1;
    };
    
    this.indexProduct = this.getProd();
    this.products = data;
    this.currentProduct = data[this.indexProduct];
    
    this.updateProduct = function (index){
    	$('.sc-menu > li').removeClass('sel');
    	$('.sc-menu > .fusion-'+index).addClass('sel');
    	$('.ld-tabla-contratar').children().removeClass('sel');
    	$('.ld-tabla-contratar > .fusion-'+index).addClass('sel');
    	
    	window.s.products=this.sProducts[index-1];
    	this.currentProduct = data[index-1];
    	this.indexProduct = index-1;
    };
    
  });

	  var data = [{ 
		id: '1',
		name : 'Fusión TV Contigo',
		claim : 'Ven a Fusión y disfruta de Fibra 10Mb a precio ADSL',
		imgFlecha : '/estaticos/landings/particulares/fusion/img/Flecha_fusion_contigo.png',
		price : 47,
		p1Caract1 : "Fibra Óptica",
		p1Caract2 : "Fijo",
		p1Caract3 : "Móvil",
		p1Caract4 : "TV Online",
		p1Desc1 : "10Mb",
		p1Desc2 : "Línea Incluida + llamadas a fijos ilimitadas",
		p1Desc3 : "100min/mes + 500MB máx. vel con 4G",
		p1Desc4 : "Series, documentales, infantil, cine... para que lo veas en tu tablet, PC y Smartphone",
		imgCreat: "/estaticos/landings/particulares/fusion/img/img-contigo.png",
		urlComprar : "/coberturas?canalOrigen=b4259340f0721410VgnVCM1000003028240aRCRD&origen=landing_fusion&ionC=C0022836&ionF=C0022944",
		imgMovil : "/estaticos/landings/particulares/fusion/img/pastilla-terminales-fusion.png?12", 
		imgTV : "/estaticos/landings/img/common/transparent-png.png",
		p2Caract1 : "Internet Fibra Óptica 10Mb.",
		p2Caract2 : "Llamadas, Internet y SMS desde móvil.",
		p2Caract3 : "Cuota de línea y llamadas desde fijo.",
		p2Caract4 : "Canales temáticos y TDT.",
		legal: "P.V.P. Microsoft  Lumia 435, Samsung Galaxy Young 2, LG L35, Alcatel One Touch Fire C, ZTE KIS II MAX: 0 €. Oferta válida hasta el 31/5/2015  para nuevas altas en contrato, portabilidades a contrato, migraciones a contrato y renovaciones de terminal con cualquier modalidad Fusión (línea principal y adicionales). Permanencia para nuevas altas, migraciones y portabilidades 18 meses y penalización en función de cada terminal. La renovación implica contrato de permanencia de 24 meses en Movistar y penalización de 145,2 € máximo. Contratación exclusiva en movistar.es.",
		p2Desc1 :{
			c1:"Si tienes cobertura de Fibra Óptica ¡disfruta de todas las ventajas de tener 10Mb reales en tu conexión!",
			c2:"Velocidad sujeta a cobertura. En caso de no cobertura Fibra, la conexión será por ADSL a máxima velocidad (Hasta 20Mb)",
			c3:"",
			c4:"",
			},
		p2Desc2 :{
			c1:"100 min/mes a todos los operadores (establecimiento de llamada incluido). Una vez superados los 100 min. "+
			"el precio de las siguientes es de 21,78 cts/min. (impuestos incl.) + est. de llamada de 18,15 cts. (impuestos incl).",
			c2:"SMS 15 cts.",
			c3:"500MB de Internet Móvil. Al finalizarlas, mantendrás máxima velocidad en modalidad de pago por uso a 1,5 cts/MB hasta 500MB adicionales. Superadas éstas, podrás seguir navegando a velocidad reducida sin coste adicional. Te iremos informando por SMS cuando cambies a modalidad de pago.",
			c4: "Disponibilidad 4G",
				},
		p2Desc3 :{
			c1:"Incluye: ",
			c2:"- Cuota de línea.",
			c3:"- Todas las llamadas que quieras a teléfonos fijos de ámbito metropolitano, provincial"
				+" y nacional sin horarios.",
			c4:"",
			},
		p2Desc4 :{
			c1:"Disfruta de todas las series en tu smartphone, PC o Tablet.",
			c2:"FOX, AXN, Cosmo, Comedy Central, TNT, Calle 13 y un canal invitado nuevo cada mes.",
			c3:"",
			c4:"",
				}
	},	{
		id: '2',
		name : 'Fusión TV Contigo 100Mb',
		claim : 'Ven a Movistar, Fibra 100Mb y TV online al mejor precio',
		imgFlecha : '/estaticos/landings/particulares/fusion/img/Flecha_fusion_contigo_100.png',
		price : 59,
		p1Caract1 : "Fibra Óptica",
		p1Caract2 : "Fijo",
		p1Caract3 : "Móvil",
		p1Caract4 : "TV Online",
		p1Desc1 : "100Mb",
		p1Desc2 : "Línea Incluida + llamadas a fijos ilimitadas",
		p1Desc3 : "100min/mes + 500MB máx. vel con 4G",
		p1Desc4 : "Series, documentales, infantil, cine... para que lo veas en tu tablet, PC y Smartphone",
		imgCreat: "/estaticos/landings/img/common/transparent-png.png", //TRANSPARENTE
		urlComprar : "/coberturas?canalOrigen=b4259340f0721410VgnVCM1000003028240aRCRD&origen=landing_fusion&ionC=C0022920&ionF=C0022920",
		imgMovil : "/estaticos/landings/particulares/fusion/img/pastilla-terminales-fusion.png?12", 
		imgTV : "/estaticos/landings/img/common/transparent-png.png",
		p2Caract1 : "Internet Fibra Óptica 100Mb.",
		p2Caract2 : "Llamadas, Internet y SMS desde móvil.",
		p2Caract3 : "Cuota de línea y llamadas desde fijo.",
		p2Caract4 : "Canales temáticos y TDT.",
		legal: "P.V.P. Microsoft  Lumia 435, Samsung Galaxy Young 2, LG L35, Alcatel One Touch Fire C, ZTE KIS II MAX: 0 €. Oferta válida hasta el 31/5/2015  para nuevas altas en contrato, portabilidades a contrato, migraciones a contrato y renovaciones de terminal con cualquier modalidad Fusión (línea principal y adicionales). Permanencia para nuevas altas, migraciones y portabilidades 18 meses y penalización en función de cada terminal. La renovación implica contrato de permanencia de 24 meses en Movistar y penalización de 145,2 € máximo. Contratación exclusiva en movistar.es.",
		p2Desc1 :{
			c1:"Si tienes cobertura de Fibra Óptica ¡disfruta de todas las ventajas de tener 100Mb reales en tu conexión!",
			c2:"",
			c3:"",
			c4:"",
			},
		p2Desc2 :{
			c1:"100 min/mes a todos los operadores (establecimiento de llamada incluido). Una vez superados los 100 min. "+
			"el precio de las siguientes es de 21,78 cts/min. (impuestos incl.) + est. de llamada de 18,15 cts. (impuestos incl).",
			c2:"SMS 15 cts.",
			c3:"500MB de Internet Móvil. Al finalizarlas, mantendrás máxima velocidad en modalidad de pago por uso a 1,5 cts/MB hasta 500MB adicionales. Superadas éstas, podrás seguir navegando a velocidad reducida sin coste adicional. Te iremos informando por SMS cuando cambies a modalidad de pago.",
			c4: "Disponibilidad 4G",
				},
		p2Desc3 :{
			c1:"Incluye: ",
			c2:"- Cuota de línea.",
			c3:"- Todas las llamadas que quieras a teléfonos fijos de ámbito metropolitano, provincial"
				+" y nacional sin horarios.",
			c4:"",
			},
		p2Desc4 :{
			c1:"Disfruta de todas las series en tu smartphone, PC o Tablet.",
			c2:"FOX, AXN, Cosmo, Comedy Central, TNT, Calle 13 y un canal invitado nuevo cada mes.",
			c3:"",
			c4:"",
				}
	}, {
		id: '3',
		name : 'Fusión TV Para Todos',
		claim : 'Ven a Movistar y disfruta de la máxima velocidad',
		imgFlecha : '/estaticos/landings/particulares/fusion/img/Flecha_fusion_todos.png',
		price : 65,
		p1Caract1 : "Fibra Óptica",
		p1Caract2 : "Fijo",
		p1Caract3 : "Móvil",
		p1Caract4 : "TV",
		p1Desc1 : "10Mb",
		p1Desc2 : "Línea Incluida + llamadas a fijos ilimitadas + 550 min/mes a móviles.",
		p1Desc3 : "Llamadas ilimitadas + 2GB con vel 4G",
		p1Desc4 : "Series, documentales, infantil, cine y deporte con Multipantalla, para que lo veas en tu televisión, tablet, PC y Smartphone. Servicio de Grabaciones incluido.",
		imgCreat: "/estaticos/landings/img/common/transparent-png.png", //TRANSPARENTE
		urlComprar : "/coberturas?canalOrigen=b4259340f0721410VgnVCM1000003028240aRCRD&origen=landing_fusion&ionC=C0022035&ionF=C0022443",
		imgMovil : "/estaticos/landings/particulares/fusion/img/test-financing.png?12", 
		imgTV : "/estaticos/landings/img/common/transparent-png.png",
		p2Caract1 : "Internet Fibra Óptica 10Mb.",
		p2Caract2 : "Llamadas, Internet y SMS desde móvil.",
		p2Caract3 : "Cuota de línea y llamadas desde fijo.",
		p2Caract4 : "Canales temáticos y TDT.",
		legal: "P.V.P. Microsoft  Lumia 435, Samsung Galaxy Young 2, LG L35, Alcatel One Touch Fire C, ZTE KIS II MAX: 0 €. Oferta válida hasta el 31/5/2015  para nuevas altas en contrato, portabilidades a contrato, migraciones a contrato y renovaciones de terminal con cualquier modalidad Fusión (línea principal y adicionales). Permanencia para nuevas altas, migraciones y portabilidades 18 meses y penalización en función de cada terminal. La renovación implica contrato de permanencia de 24 meses en Movistar y penalización de 145,2 € máximo. Contratación exclusiva en movistar.es.",
		p2Desc1 :{
			c1:"Si tienes cobertura de Fibra Óptica ¡disfruta de todas las ventajas de tener 10Mb reales en tu conexión!",
			c2:"Velocidad sujeta a cobertura. En caso de no cobertura Fibra, la conexión será por ADSL a máxima velocidad (Hasta 20Mb)",
			c3:"",
			c4:"",
			},
		p2Desc2 :{
			c1:"Llamadas ilimitadas a fijos y móviles nacionales de cualquier operador sin límite de llamadas y sin horarios.",
			c2:"SMS ilimitados",
			c3:"2GB de Internet Móvil. Al finalizarlas, mantendrás máxima velocidad en modalidad de pago por uso a 1,5 cts/MB hasta 500MB adicionales. Superadas éstas, podrás seguir navegando a velocidad reducida sin coste adicional. Te iremos informando por SMS cuando cambies a modalidad de pago.",
			c4: "Disponibilidad 4G",
				},
		p2Desc3 :{
			c1:"Incluye: ",
			c2:"- Cuota de línea y llamadas a fijos nacionales ilimitadas",
			c3:"- 500 min/mes en llamadas a móviles nacionales los fines de semana.",
			c4:"- 50min/mes en llamadas a móviles nacionales de lunes a domingo.",
			},
		p2Desc4 :{
			c1:"Movistar TV Para Todos: Una Completa oferta de series y cine en HD:",
			c2:"Canales destacados: FOX, AXN, Calle13, Disney Junior, Nickelodeon, Cosmo, Comedy Central, Syfy, 40TV, Eurosport, Iberalia y Fútbol Replay.",
			c3:"Acceso Multipantalla y Grabaciones Gratis: 50 horas de grabación y 30 días de disponibilidad de contenido.",
			c4:"",
				}
	}, {
		id: '4',
		name : 'Fusión TV Para Todos 100Mb',
		claim : 'Lo mejor para toda la familia',
		imgFlecha : '/estaticos/landings/particulares/fusion/img/Flecha_fusion_todos_100.png',
		price : 77,
		p1Caract1 : "Fibra Óptica",
		p1Caract2 : "Fijo",
		p1Caract3 : "Móvil",
		p1Caract4 : "TV",
		p1Desc1 : "100Mb",
		p1Desc2 : "Línea Incluida + llamadas a fijos ilimitadas + 550 min/mes a móviles.",
		p1Desc3 : "Llamadas ilimitadas + 2GB con vel 4G",
		p1Desc4 : "Series, documentales, infantil, cine y deporte con Multipantalla, para que lo veas en tu televisión, tablet, PC y Smartphone. Servicio de Grabaciones incluido.",
		imgCreat: "/estaticos/landings/img/common/transparent-png.png", //TRANSPARENTE
		urlComprar : "/coberturas?canalOrigen=b4259340f0721410VgnVCM1000003028240aRCRD&origen=landing_fusion&ionC=C0020552&ionF=C0020552",
		imgMovil : "/estaticos/landings/particulares/fusion/img/pastilla-terminales-fusion.png?12",
		imgTV : "/estaticos/landings/img/common/transparent-png.png", 
		p2Caract1 : "Internet Fibra Óptica 100Mb.",
		p2Caract2 : "Llamadas, Internet y SMS desde móvil.",
		p2Caract3 : "Cuota de línea y llamadas desde fijo.",
		p2Caract4 : "Canales temáticos y TDT.",
		legal: "P.V.P. Microsoft  Lumia 435, Samsung Galaxy Young 2, LG L35, Alcatel One Touch Fire C, ZTE KIS II MAX: 0 €. Oferta válida hasta el 31/5/2015  para nuevas altas en contrato, portabilidades a contrato, migraciones a contrato y renovaciones de terminal con cualquier modalidad Fusión (línea principal y adicionales). Permanencia para nuevas altas, migraciones y portabilidades 18 meses y penalización en función de cada terminal. La renovación implica contrato de permanencia de 24 meses en Movistar y penalización de 145,2 € máximo. Contratación exclusiva en movistar.es.",
		p2Desc1 :{
			c1:"Si tienes cobertura de Fibra Óptica ¡disfruta de todas las ventajas de tener 100Mb reales en tu conexión!",
			c2:"",
			c3:"",
			c4:"",
			},
		p2Desc2 :{
			c1:"Llamadas ilimitadas a fijos y móviles nacionales de cualquier operador sin límite de llamadas y sin horarios.",
			c2:"SMS ilimitados",
			c3:"2GB de Internet Móvil. Al finalizarlas, mantendrás máxima velocidad en modalidad de pago por uso a 1,5 cts/MB hasta 500MB adicionales. Superadas éstas, podrás seguir navegando a velocidad reducida sin coste adicional. Te iremos informando por SMS cuando cambies a modalidad de pago.",
			c4: "Disponibilidad 4G",
				},
		p2Desc3 :{
			c1:"Incluye: ",
			c2:"- Cuota de línea y llamadas a fijos nacionales ilimitadas",
			c3:"- 500 min/mes en llamadas a móviles nacionales los fines de semana.",
			c4:"- 50min/mes en llamadas a móviles nacionales de lunes a domingo.",
			},
		p2Desc4 :{
			c1:"Movistar TV Para Todos: Una Completa oferta de series y cine en HD:",
			c2:"Canales destacados: FOX, AXN, Calle13, Disney Junior, Nickelodeon, Cosmo, Comedy Central, Syfy, 40TV, Eurosport, Iberalia y Fútbol Replay.",
			c3:"Acceso Multipantalla y Grabaciones Gratis: 50 horas de grabación y 30 días de disponibilidad de contenido.",
			c4:"",
				}
	}];
	  

})();



