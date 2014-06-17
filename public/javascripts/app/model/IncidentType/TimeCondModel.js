Ext.define('app.model.IncidentType.TimeCondModel',{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id',     type: 'int'},
	{name: 'incident_type', type: 'int'},
  {name: 'attribute1',   type: 'string'},
  {name: 'attribute2',   type: 'string'},
  {name: 'src_system',   type: 'int', useNull:true},
	{name: 'timediff',   type: 'int'}
	]
});