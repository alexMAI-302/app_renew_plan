Ext.define('app.store.Directory.Group.Phone', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Group.PhoneModel',
	proxy: {
		type: 'rest',
		url : '/directory/group/phone',
		reader: {
			type: 'json'
		}
	}
});