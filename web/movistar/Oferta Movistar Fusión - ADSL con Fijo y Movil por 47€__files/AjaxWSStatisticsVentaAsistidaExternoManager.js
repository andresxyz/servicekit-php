if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
if (dwr.engine._getObject("AjaxWSStatisticsVentaAsistidaExternoManager") == undefined) {
var p;

p = {};
p._path = 'https://www.movistar.es/atcliente/c2c/venta-asistida-externo/dwr/';






p.performInsertETDEvents = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'AjaxWSStatisticsVentaAsistidaExternoManager', 'performInsertETDEvents', arguments);
};





p.performInsertSurvey = function(p0, callback) {
return dwr.engine._execute(p._path, 'AjaxWSStatisticsVentaAsistidaExternoManager', 'performInsertSurvey', arguments);
};

dwr.engine._setObject("AjaxWSStatisticsVentaAsistidaExternoManager", p);
}
})();

