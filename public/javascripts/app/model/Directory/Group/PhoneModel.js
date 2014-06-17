Ext.define('app.model.Directory.Group.PhoneModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id',      type: 'int', useNull: true},
    {name: 'edit_id',  type: 'int', useNull: true},
		{name: 'group',   type: 'int'},
    {name: 'hidden',   type: 'boolean'}
	],
	idProperty: 'id'
});
