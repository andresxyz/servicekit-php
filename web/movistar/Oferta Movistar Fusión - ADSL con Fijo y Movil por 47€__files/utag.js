//tealium universal tag - utag.loader ut4.0.201505071025, Copyright 2015 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_telefonica_col10=([^\S;]*)")){if(RegExp.$1.indexOf("/prod/")===-1){ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/telefonica/col10/prod/';}}})();}catch(e){};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"telefonica.col10",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],ft:0,rf:0,ri:0,rp:0,rq:[],lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\./.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d){utag.DB('WQ:'+utag.loader.wq.length);c=true;try{utag.loader.GET()}catch(e){};var lq=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load>0&&b.send){c=false;utag.send[b.id]=b;}
if(b.load!=0&&b.load!=4){lq.push(b);this.f[b.id]=0;}}
if(c){d=false;for(b in utag.loader.GV(utag.send))d=true;if(c&&d)this.LOAD('WAIT_FORCE');}
this.wq=[];for(a=0;a<lq.length;a++){utag.DB('utag.loader.WAIT: loading '+lq[a].id);utag.loader.AS(lq[a])}
if(lq.length==0)utag.handler.INIT();},AS:function(a,b,c,d){utag.sender[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'utag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+utag.cfg.v;utag.rpt['l_'+a.id]=a.src;b=document;if(a.load==2){b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')}else if(a.load==1||a.load==3){if(b.createElement){c='utag_telefonica.col10_'+a.id;if(!b.getElementById(c)){if(a.load==3){d=b.createElement('iframe');d.setAttribute('height','1');d.setAttribute('width','1');d.setAttribute('style','display:none');d.setAttribute('src',a.src);d.id=c;b.getElementsByTagName('head')[0].appendChild(d)}else{utag.ut.libloader(a.src,c,utag.loader.cfg[a.id].loc);}}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},RD:function(o,a,b,c,d,e,f,g){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){if(a[b].name&&a[b].name!="")o["meta."+a[b].name.toLowerCase()]=a[b].content.toLowerCase();}
a=location.search.toLowerCase();if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");o["qp."+c[0]]=utag.ut.decode(c[1])}}
a=(new Date()).getTime();b=utag.loader.RC();c=a+parseInt(utag.cfg.session_timeout);d=a+(Math.ceil(Math.random()*1000000));if((b.utag_main&&(typeof b.utag_main._st=="undefined"||(typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a)))||!b.utag_main){if(b.utag_main){b.utag_main._st=c;b.utag_main.ses_id=d;}else{b.utag_main={_st:c,ses_id:d}}
utag.loader.SC("utag_main",{"_st":c,"ses_id":d+";exp-session"});}else{utag.loader.SC("utag_main",{"_st":c})}
for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
o["dom.referrer"]=eval("document."+"referrer");o["dom.title"]=""+document.title;o["dom.domain"]=""+location.hostname;o["dom.query_string"]=""+(location.search).substring(1);o["dom.url"]=""+document.URL;o["dom.pathname"]=""+location.pathname;},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];for(c=0;c<b.length;c++){if(b[c].match(/^(.*?)=(.*)$/)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"&&(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0)){e=e.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){};}
o[ck]={};e=(new Date()).getTime();for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);if(k>e)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);j[f]=(k<e)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";x="Thu, 31 Dec 2099 00:00:00 GMT";if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=(new Date()).getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push(g+":"+encodeURIComponent(d[g]))};if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){utag.DB('utag.loader.LOAD:add sender-'+a);this.f[a]=1;if(utag.loader.wq.length>0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0)return};utag.DB('CLEAR FORCE');clearTimeout(utag.loader.ft);utag.handler.INIT()}},EV:function(a,b,c,d){if(b=="ready"){if(document.readyState!=="loading")setTimeout(c,1);else{if(typeof utag.loader.ready_q=="undefined"){utag.loader.ready_q=[];utag.loader.run_ready_q=function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){};}}}
utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState!=="loading"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){try{console.log(a)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]));}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')));}},view:function(a,c){return this.track('view',a,c);},link:function(a,c){return this.track('link',a,c);},track:function(a,b,c){for(var i in utag.loader.GV(utag.o)){try{utag.o[i].handler.trigger(a,b)}catch(e){};}
if(c)try{c()}catch(e){};return true;},handler:{base:"",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){this.iflag=1;utag.DB('utag.handler.INIT');a=utag.loader.q.length;if(a>0){for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b)}}
if(utag.cfg.noview!=true)utag.handler.trigger('view',utag.data);},test:function(){return 1},trigger:function(a,b,c,d){utag.DB('trigger:'+a);b=b||{};if(!this.iflag){utag.loader.q.push({a:a,b:b});return;}
for(c in utag.loader.GV(this.df)){if(typeof this.df[c]!="function"&&typeof b[c]=="undefined")b[c]=this.df[c]}
utag.DB('All Tags EXTENSIONS');if(typeof this.extend!="undefined"){for(c=0;c<this.extend.length;c++){try{this.extend[c](a,b);utag.rpt['ex_'+c]=0}catch(e){utag.rpt['ex_'+c]=1;utag.ut.error({e:e.message,s:utag.cfg.path+'utag.js',l:c,t:'ge'});}}}
for(c in utag.loader.GV(utag.send)){if(typeof utag.sender[c]!="undefined"){try{utag.sender[c].send(a,utag.handler.C(b));utag.rpt['s_'+c]=0}catch(e){utag.rpt['s_'+c]=1};utag.rpt.ts['s']=new Date();for(var r in utag.loader.GV(utag.cond)){if(utag.cond[r])utag.rpt['r_'+r]=1;}
utag.RP(utag.rpt);}}
c=this.base.split(",");for(d=0;d<c.length;d++){if(typeof b[c[d]]!="undefined")this.df[c[d]]=b[c[d]]};for(d in utag.loader.GV(b)){if(d.indexOf('dom.')==0)this.df[d]=b[d]};this.o=b;},C:function(a,b,c,d){b={};for(c in utag.loader.GV(a)){if(typeof a[c]!="function")b[c]=a[c]}
return b}},ut:{decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){};if(b==""){b=unescape(a)};return b;},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}
c='';for(b in a){c+=b+':'+a[b]+" , "};utag.DB(c);},libloader:function(src,id,h,l,a,b,c){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(id){b.id=id};if(typeof h=='function'){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;h()}};b.onload=function(){if(!b.hFlag){b.hFlag=1;h()}}}else{l=l||h;}
l=l||'head';c=a.getElementsByTagName(l)[0];if(c){if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}
utag.DB("Attach to "+l+": "+src)}}}};utag.o['telefonica.col10']=utag;utag.cfg={v:"ut4.009.201505071025",session_timeout:1800000,readywait:0,noload:0,forcetimeout:3000,domain:utag.loader.lh(),path:"//tags.tiqcdn.com/utag/telefonica/col10/prod/",utid:"telefonica/col10/201505071025"};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={25:0,31:0,32:0,34:0,35:0,6:0};utag.pagevars=function(){try{utag.data['js_page.linkTrackVars']=linkTrackVars}catch(e){utag.DB(e)};try{utag.data['js_page.s.linkTrackVars']=s.linkTrackVars}catch(e){utag.DB(e)};try{utag.data['js_page.idSession']=idSession}catch(e){utag.DB(e)};try{utag.data['js_page.utag_data.byside_campanaID']=utag_data.byside_campanaID}catch(e){utag.DB(e)};try{utag.data['js_page.utag_data.byside_campanaNombre']=utag_data.byside_campanaNombre}catch(e){utag.DB(e)};try{utag.data['js_page.utag_data.byside_codigoCreatividad']=utag_data.byside_codigoCreatividad}catch(e){utag.DB(e)};try{utag.data['js_page.utag_data.byside_codigoPrescripcion']=utag_data.byside_codigoPrescripcion}catch(e){utag.DB(e)};try{utag.data['js_page.utag_data.byside_placeholder']=utag_data.byside_placeholder}catch(e){utag.DB(e)};try{utag.data['js_page.utag_data.byside_producto']=utag_data.byside_producto}catch(e){utag.DB(e)};try{utag.data['js_page.utag_data.byside_tipoPersonalizacion']=utag_data.byside_tipoPersonalizacion}catch(e){utag.DB(e)};try{utag.data['js_page.catTargetopia']=catTargetopia}catch(e){utag.DB(e)};try{utag.data['js_page.ordTargetopia']=ordTargetopia}catch(e){utag.DB(e)};try{utag.data['js_page.typeMedios']=typeMedios}catch(e){utag.DB(e)};try{utag.data['js_page.catMedios']=catMedios}catch(e){utag.DB(e)};try{utag.data['js_page.ordMedios']=ordMedios}catch(e){utag.DB(e)};try{utag.data['js_page.window.top.channelActual']=window.top.channelActual}catch(e){utag.DB(e)};try{utag.data['js_page.digilantId']=digilantId}catch(e){utag.DB(e)};try{utag.data['js_page.s.pageName']=s.pageName}catch(e){utag.DB(e)};try{utag.data['js_page.s.channel']=s.channel}catch(e){utag.DB(e)};try{utag.data['js_page.s.prop1']=s.prop1}catch(e){utag.DB(e)};};utag.loader.initdata=function(){try{utag.data=(typeof s!='undefined')?s:{};utag.udoname='s';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(){try{utag.cond[25]|=(/(.*)movistar.es(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/coberturas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/oferta-combinada\/fusion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/oferta-combinada\/fusion\/opciones-tarifas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/res-fusion-mini-4g(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/res-fusion-4g(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/res-fusion-fibra-4g(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/res-fusion-fibra-maxima(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/tv-adsl(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/tv-fibra-optica(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/1-gb-adicional-movistar-fusion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/spotify-premium(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/linea-movil-adicional-movistar-fusion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/oferta-combinada\/fusion\/ya-tengo-fusion\/servicios-adicionales(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/atencion-cliente\/mi-factura\/fusion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/lineas-adicionales(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/oferta-combinada\/fusion\/preguntas-frecuentes\/ficha-faq\/faq-movistar-fusion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/oferta-combinada\/movil-fusion?prodFusion=fusionTVCobre&tieneFibra=&tieneImagenio=&tieneAdsl=&tieneVdsl=(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/oferta-combinada\/movil-fusion?prodFusion=fusionTVFibra&tieneFibra=&tieneImagenio=&tieneAdsl=&tieneVdsl=(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/adsl-fibra-optica(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/fibra-optica(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/movistar-adsl\/ver-todos-los-adsl\/ficha\/movistar-adsl-base(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/movistar-adsl\/ver-todos-los-adsl\/ficha\/movistar-adsl-base-llamadas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/fibra-optica\/ficha\/movistar-fibra-optica-100-10mb-llamadas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/movistar-adsl\/ver-todos-los-adsl\/ficha\/movistar-adsl-hasta-10mb(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/movistar-adsl\/ver-todos-los-adsl\/ficha\/movistar-adsl-hasta10mb-llamadas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/adsl-fibra-optica\/tarifas-adsl-fibra(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/adsl-fibra-optica\/fibra-optica\/ventajas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/adsl-fibra-optica\/fibra-optica\/instalacion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/fibra-optica\/instalacion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/ficha\/pasar-a-fibra-optica(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/wifi\/zona-cobertura-wifi(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/wifi\/tarjetas-wifi(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/adsl-fibra-optica\/clientes\/servicios-adicionales(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/movistar-adsl\/ya-tengo-adsl\/servicios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/equipamiento-modem-router-tablet(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/movistar-adsl\/ya-tengo-adsl\/equipamiento(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/television\/movistar-imagenio(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/television\/movistar-imagenio\/contenidos(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/television\/movistar-imagenio\/opciones-tarifas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/television\/movistar-imagenio\/tengo-imagenio\/canales(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/television\/movistar-imagenio\/tengo-imagenio\/servicios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/fibra-optica\/television(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/fibra-optica\/tarifas\/tarifas-imagenio(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/internet\/fibra-optica\/tengo-fibra(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-contrato(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-moviles(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/solo-tarjeta-movistar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/ficha\/tarjeta-sim-contrato-movistar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/solo-sim-movistar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/moviles(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-contrato\/ficha\/contrato-movistar-cero(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-contrato\/ficha\/contrato-movistar-veinte(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-contrato\/ficha\/contrato-movistar-total(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/ficha\/extra-gigas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/servicios\/ficha\/res-multisim(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/coberturas\/movil\/4G(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/moviles-tarjeta(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/servicios\/recarga-online(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/tarjeta-habla-a-movistar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/tarjeta-habla-ocio(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/tarjeta-habla-24h(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/tarifa-plana-internet-3(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/tarifa-internet-diaria-smartphone(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/tarifa-habla-internacional(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/mensajes-50(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/tarifas-tarjeta\/ficha\/tarifa-plana-mensajes-a-movistar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/moviles\/canje-de-puntos\/ficha(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/atencion-cliente\/telefonia-movil\/catalogo(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/ficha\/pasate-tarjeta-contrato-movistar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/llamadas-internacionales(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/viajar-al-extranjero-roaming(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/servicios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/movil\/aplicaciones-smartphone(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/lineas-con-llamadas\/ficha\/lineas-con-voz-res(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/lineas-con-llamadas\/todas-las-lineas\/ficha\/contrato-planazo-hogar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/lineas-con-llamadas\/ficha\/planazo-hogar-fijos-moviles(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/lineas-con-llamadas\/todas-las-lineas\/ficha\/tarifa-plana-hogar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/lineas-con-llamadas\/todas-las-lineas\/ficha\/contrato-basico-hogar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/descuento-en-llamadas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/lineas-con-llamadas\/todas-las-lineas\/ficha\/alta-linea-clientes-otro-operador(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/servicios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/fijo\/lineas-con-llamadas\/todas-las-lineas\/ficha\/traslado-de-linea(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/tienda(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/particulares\/atencion-cliente(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/atencion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/conectividad-internet\/ficha\/empresas-adsl(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/conectividad-internet\/ficha\/empresas-vdsl(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/conectividad-internet\/ficha\/empresas-fibra-optica(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/conectividad-internet\/ficha\/empresas-datainternet(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/banda-ancha(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/redes(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/redes\/ficha\/empresas-macrolan-vpn(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/redes\/ficha\/empresas-servicio-integral-de-lan-en-macrolan(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/seguridad(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/seguridad\/ficha\/empresas-protege-tu-negocio(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/seguridad\/ficha\/empresas-sede-segura(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/seguridad\/ficha\/empresas-disco-virtual-en-red(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/seguridad\/ficha\/empresas-redes-limpias(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/banda-ancha\/servicios\/ficha\/empresas-presencia-en-internet(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/presencia-en-internet(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/presencia-en-internet\/ficha\/empresas-tu-web(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/presencia-en-internet\/ficha\/empresas-tu-tienda-en-internet(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/presencia-en-internet\/ficha\/empresas-te-destaco-en-internet(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/cloud(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/cloud\/ficha\/empresas-servidores-cloud(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/cloud\/ficha\/empresas-respaldo-cloud(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/cloud\/ficha\/empresas-instant-servers(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/soluciones-m2m(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/soluciones-m2m\/ficha\/empresas-gestion-flotas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/soluciones-m2m\/ficha\/empresas-conectividad-gestionada(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/en-contacto-con-tus-clientes(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/en-contacto-con-tus-clientes\/ficha\/empresas-mensajeria-negocios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/en-contacto-con-tus-clientes\/ficha\/empresas-numeros-900(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/ficha\/empresas-linea-individual-profesional(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/ficha\/empresas-linea-rdsi-acceso-basico(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/ficha\/empresas-linea-enlace(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/ficha\/empresas-puesto-voz-red-3(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/telefonos(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/ficha\/empresas-plan-profesional-300-fijos-moviles(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/ficha\/empresas-plan-profesional-1000-con-movilidad(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/ficha\/empresas-plan-profesional-con-movilidad(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/fijo\/opciones-de-ahorro(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/mi-movistar\/oficina-virtual(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/ayuda\/ficha-ayuda\/ci.empresas-tarifas-servicio-telefonico-basico.ayudaLinks(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/captacion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/movil(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/para-tu-oficina\/seguridad\/ficha\/empresas-movil-seguro(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/movil\/tarifas\/opciones-de-ahorro(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/movil\/roaming(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/movil\/moviles-y-dispositivos(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/movil\/internet-movil\/modems-usb-y-pcs-con-internet(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/movil\/tarifas\/tarifas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/empresas\/empresas-4G(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/oferta-combinada\/fusion(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/ayuda(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/oferta-combinada\/fusion\/opciones-tarifas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/oferta-combinada\/fusion\/ya-tengo-fusion\/servicios-adicionales(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/ficha\/lineas-adicionales(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/movistar-adsl(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/wifi(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/fibra-optica?pid=a-fibra-c(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/fibra-optica\/ficha\/movistar-fibra-optica-100-10mb-llamadas?pid=a-fibra-f(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/fibra-optica\/precios\/fibra-optica-tv?pid=a-fibra-ft(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/servicios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/movistar-adsl\/tengo-adsl\/equipamiento\/ficha\/aut-repetidor-inalambrico-once-n(\/)?$/.test(utag.data['dom.url']))||(/(.*)aplicateca.es(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/banda-ancha\/crea-tu-web(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/tarifas-contrato(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/ficha\/aut-tarjeta-sim-contrato-movistar(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/moviles-dispositivos(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/modems-usb-pcs(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/servicios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/viajar-al-extranjero-roaming(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/aplicaciones-smartphone(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/Coberturas\/4G(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/internet-movil(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/movil\/internet-movil\/tarifas\/ver-todas-las-tarifas(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/fijo(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/fijo\/ficha\/au-lineas-con-voz(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/fijo\/opciones-de-ahorro(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/fijo\/servicios(\/)?$/.test(utag.data['dom.url']))||(/(.*)movistar.es\/autonomos\/fijo\/ficha\/aut-traslado-linea(\/)?$/.test(utag.data['dom.url']))}catch(e){utag.DB(e)};try{utag.cond[31]|=(utag.data['dom.url'].toString().indexOf('television')>-1)||(utag.data['dom.url'].toString().indexOf('promociones/particulares/movistar-tv')>-1)}catch(e){utag.DB(e)};try{utag.cond[32]|=(utag.data['pageName'].toString().toLowerCase().indexOf('home'.toLowerCase())>-1&&utag.data['pageName'].toString().toLowerCase().indexOf('particulares'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('fusion'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('oferta-combinada'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('particulares/fijo'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('movistar-adsl'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('fibra-optica'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('moviles'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('tarifas-moviles'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('particulares/television'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('servicios-digitales'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('particulares/microsite/mi-movistar'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('particulares/movil/servicios/recarga-online'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('promociones/particulares/promo-terminal'.toLowerCase())>-1)}catch(e){utag.DB(e)};try{utag.cond[34]|=(utag.data['dom.url'].toString().toLowerCase().indexOf('/particulares/prueba-piloto-home-3'.toLowerCase())<0)}catch(e){utag.DB(e)};try{utag.cond[35]|=(utag.data['js_page.s.pageName'].toString().indexOf('empresas:home')>-1)}catch(e){utag.DB(e)};try{utag.cond[6]|=(utag.data['cp.compruebaCkE'].toString().indexOf('1')>-1)}catch(e){utag.DB(e)};};utag.pre=function(){utag.loader.initdata();utag.pagevars();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[];utag.loader.initcfg=function(){utag.loader.cfg={"4":{load:utag.cond[34],send:1,wait:1,tid:7001},"43":{load:utag.cond[34],send:1,wait:1,tid:7110},"152":{load:utag.cond[34],send:1,wait:1,tid:7125},"137":{load:(utag.cond[31]&&utag.cond[6]),send:1,wait:1,tid:6020},"138":{load:(utag.cond[31]&&utag.cond[6]),send:1,wait:1,tid:20078},"155":{load:(utag.cond[32]&&utag.cond[6]),send:1,wait:1,tid:4022},"112":{load:(utag.cond[6]&&utag.cond[25]),send:1,wait:1,tid:4022},"88":{load:(utag.cond[6]&&utag.cond[34]),send:1,wait:1,tid:20010},"173":{load:utag.cond[35],send:1,wait:1,tid:20067}};utag.loader.cfgsort=["4","43","152","137","138","155","112","88","173"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i];};utag.loader.SETFORCE=function(a){utag.DB('SETFORCE:'+a);if(utag.loader.ft>0)clearTimeout(utag.loader.ft);utag.loader.ft=(utag.cfg.forcetimeout!=0)?setTimeout(utag.loader.FORCE,utag.cfg.forcetimeout):0}
utag.loader.FORCE=function(a,b,c,d){a=utag.sender;b=utag.loader.f;utag.DB('FORCE:'+a+':'+b);for(c in utag.loader.GV(b)){d=a[c].id;if(typeof b[c]!='undefined'&&b[c]==0){utag.DB('FORCEERROR:'+d);utag.rpt['f_'+d]=1;utag.ut.error({e:'load error',s:a[c].src,l:0,t:'le'});delete utag.sender[d];delete utag.send[d];utag.loader.LOAD(d)}}}
utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;utag.rpt.ts['i']=new Date();if(!utag.cfg.noload){try{this.GET()}catch(e){};var lq=[];d=this.cfgsort||this.cfg;for(a in this.GV(d)){e=(this.cfgsort?d[a]:a);b=this.cfg[e];b.id=e;if(b.wait==1){this.wq.push(b)}else if(b.load>0){if(b.send){c=false;utag.send[b.id]=b;}
if(b.load!=4){lq.push(b);this.f[b.id]=0;}}}
for(a=0;a<lq.length;a++){utag.DB('utag.loader.INIT: loading '+b.id);utag.loader.AS(lq[a])}
if(utag.loader.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.loader.wq');utag.loader.WQ();utag.loader.SETFORCE('WAIT')}});else if(lq.length==0)utag.handler.INIT();else utag.loader.SETFORCE('INIT')}
return 1};utag.cfg.readywait?utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.cfg.readywait');utag.loader.INIT()}}):utag.loader.INIT();}