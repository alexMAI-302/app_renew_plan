Ext.define('app.store.Directory.Search.Search', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Search.SearchModel',
	proxy: {
		type: 'ajax',
		url : '/directory/search/get',
		reader: {
			type: 'json'
		}
	}
});