Ext.define('app.store.Directory.Person.Person', {
	extend: 'Ext.data.Store',
		model: 'app.model.Directory.Person.PersonModel',
    id: 'directoryPersonPersonStore',
	proxy: {
		type: 'rest',
    url : '/directory/person/person',
		reader: {
			type: 'json'
		}
	}
});