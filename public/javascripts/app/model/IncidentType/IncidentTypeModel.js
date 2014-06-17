Ext.define('app.model.IncidentType.IncidentTypeModel',{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id',     type: 'int'},
	{name: 'class', type: 'int', useNull: true},
  {name: 'name',   type: 'string'},
  {name: 'description',   type: 'string'},
	{name: 'negative',   type: 'boolean'}
	]
});