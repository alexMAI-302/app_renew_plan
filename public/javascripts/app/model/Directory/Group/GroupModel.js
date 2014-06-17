Ext.define('app.model.Directory.Group.GroupModel',{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'id',     type: 'int'},
	{name: 'parent', type: 'int', useNull: true},
  {name: 'name',   type: 'string'},
	{name: 'room',   type: 'int', useNull: true}
	]
});
