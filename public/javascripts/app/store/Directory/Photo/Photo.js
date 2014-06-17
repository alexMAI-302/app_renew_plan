Ext.define('app.store.Directory.Photo.Photo', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Photo.PhotoModel',
	proxy: {
		type: 'rest',
		url : '/directory/photo/photos',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});