Ext.define('app.model.IncidentType.TextCondModel',{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id',     type: 'int'},
	{name: 'incident_type', type: 'int'},
  {name: 'attribute',   type: 'string'},
  {name: 'formula',   type: 'string'},
	{name: 'src_system',   type: 'int', useNull: true}
	]
});