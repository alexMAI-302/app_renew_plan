Ext.define('app.store.Directory.Search.Photo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/goods_catalog/photos',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});