Ext.define('app.store.Directory.Search.Profile', {
	extend: 'Ext.data.Store',
		model: 'app.model.Directory.Search.ProfileModel',
    id: 'directorySearchProfileStore',
	proxy: {
		type: 'rest',
    autoLoad: true,
		url : '/directory/search/profile',
		reader: {
			type: 'json'
		}
	}
});