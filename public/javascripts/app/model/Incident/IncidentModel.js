Ext.define('app.model.Incident.IncidentModel',{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id',     type: 'int'},
  {name: 'code',     type: 'string'},
  {name: 'address',     type: 'string'},
	{name: 'class1',     type: 'string'},
  {name: 'status1',     type: 'int'},
  {name: 'incident_type',   type: 'string'},
  {
		name: 'emergence_ts',
		type: 'datetime',
		dateFormat: 'Y-m-d H:i:s',
		convert: function(v, record){
			var val=Ext.Date.parse(v, 'Y-m-d H:i:s');
			val = (val==null || val==undefined) ? Ext.Date.parse(v, "Y-m-d\\TH:i:s") : val;
			return val;
		},
		sortType: function(value){
			return value?value:new Date(0, 0, 0);
		},
		useNull: true
	},
  {
		name: 'cts',
		type: 'datetime',
		dateFormat: 'Y-m-d H:i:s',
		convert: function(v, record){
			var val=Ext.Date.parse(v, 'Y-m-d H:i:s');
			val = (val==null || val==undefined) ? Ext.Date.parse(v, "Y-m-d\\TH:i:s") : val;
			return val;
		},
		sortType: function(value){
			return value?value:new Date(0, 0, 0);
		},
		useNull: true
	},
  {
		name: 'close_ts',
		type: 'datetime',
		dateFormat: 'Y-m-d H:i:s',
		convert: function(v, record){
			var val=Ext.Date.parse(v, 'Y-m-d H:i:s');
			val = (val==null || val==undefined) ? Ext.Date.parse(v, "Y-m-d\\TH:i:s") : val;
			return val;
		},
		sortType: function(value){
			return value?value:new Date(0, 0, 0);
		},
		useNull: true
	},  
  {name: 'unprofit',   type: 'boolean'}
	]
});