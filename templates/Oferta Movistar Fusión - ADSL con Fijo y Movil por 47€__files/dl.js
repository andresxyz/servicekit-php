//FUNCTIONS
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

//DataLayer
var dl = {};

//Targetopia
dl.tt = {};
dl.tt.axel = Math.random() + "";
dl.tt.a = dl.tt.axel * 10000000000000;
window['ordTargetopia'] = dl.tt.a; 								//Mapeo para llevar a Tealium Tag

//Medios
dl.med = {};
dl.med.cookie = getCookie('__utma');
window['ordMedios'] = dl.med.cookie.split('.')[1]+dl.med.cookie.split('.')[2];

//Session
dl.ss = getCookie('__utma');
window['idSession']=dl.ss.split('.')[1]+dl.ss.split('.')[2]; 	//Global idSession en Landings

//Omniture
var s = s || {};var s_account = "";function s_gi(s_account) { return s || {}; }function tl(a,b,c) { return s || {}; }