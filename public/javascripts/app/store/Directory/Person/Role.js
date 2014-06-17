Ext.define('app.store.Directory.Person.Role', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
  autoLoad: true,
	proxy: {
		type: 'rest',
		url : '/directory/person/role',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});