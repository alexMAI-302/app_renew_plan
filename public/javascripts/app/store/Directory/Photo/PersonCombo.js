Ext.define('app.store.Directory.Photo.PersonCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/photo/personCombo',
		reader: {
			type: 'json'
		}
	}
});