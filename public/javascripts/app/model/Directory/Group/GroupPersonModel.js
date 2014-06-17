Ext.define('app.model.Directory.Group.GroupPersonModel', 
{
	extend: 'Ext.data.Model',
	fields: [
	{name: 'person',   type: 'int', useNull: true},
	{name: 'group', type: 'int'},
  {name: 'old_person',   type: 'int'},
	{name: 'old_group', type: 'int'}
	],
	idProperty:'old_person'

});
