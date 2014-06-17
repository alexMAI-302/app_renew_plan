Ext.define('app.store.Directory.Division.Person', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Division.PersonModel',
	proxy: {
		type: 'rest',
		url : '/directory/division/person',
		reader: {
			type: 'json'
		}
	}
});