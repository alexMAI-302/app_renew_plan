Ext.define('app.model.Directory.Division.DivisionModel',{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id',     type: 'int'},
	{name: 'parent', type: 'int', useNull: true},
  {name: 'name',   type: 'string'},
	{name: 'head',   type: 'int', useNull: true},
  {name: 'head_name',   type: 'string'}
	]
});
