Ext.define('app.model.Directory.Phone.PhoneModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id',     type: 'int'},
		{name: 'number', type: 'string'},
		{name: 'person', type: 'int',	useNull: true },
		{name: 'group',  type: 'int',	useNull: true },
    {name: 'hidden',  type: 'boolean'}
	]
});
