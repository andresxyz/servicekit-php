if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
if (dwr.engine._getObject("AjaxIVRVentaAsistidaExternoManager") == undefined) {
var p;

p = {};
p._path = 'https://www.movistar.es/atcliente/c2c/venta-asistida-externo/dwr/';




p.invalidate = function(callback) {
return dwr.engine._execute(p._path, 'AjaxIVRVentaAsistidaExternoManager', 'invalidate', arguments);
};




p.hangUp = function(callback) {
return dwr.engine._execute(p._path, 'AjaxIVRVentaAsistidaExternoManager', 'hangUp', arguments);
};





p.performServiceValidation = function(p0, callback) {
return dwr.engine._execute(p._path, 'AjaxIVRVentaAsistidaExternoManager', 'performServiceValidation', arguments);
};





p.performCallMeLater = function(p0, callback) {
return dwr.engine._execute(p._path, 'AjaxIVRVentaAsistidaExternoManager', 'performCallMeLater', arguments);
};





p.performStart = function(p0, callback) {
return dwr.engine._execute(p._path, 'AjaxIVRVentaAsistidaExternoManager', 'performStart', arguments);
};

dwr.engine._setObject("AjaxIVRVentaAsistidaExternoManager", p);
}
})();

