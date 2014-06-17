Ext.define('app.store.Directory.Phone.Phone', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Phone.PhoneModel',
	proxy: {
		type: 'rest',
		url : '/directory/phone/phone',
		reader: {
			type: 'json'
		}
	}
});