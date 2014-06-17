Ext.define('app.store.Directory.Person.Division', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
  autoLoad: true,
	proxy: {
		type: 'rest',
		url : '/directory/person/division',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});