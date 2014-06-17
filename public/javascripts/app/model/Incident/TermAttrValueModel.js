Ext.define('app.model.Incident.TermAttrValueModel',{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id',     type: 'int'},
	{name: 'incident', type: 'int'},
  {name: 'attribute',   type: 'string'},
  {name: 'value',   type: 'string'}
	]
});