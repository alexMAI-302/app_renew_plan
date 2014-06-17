Ext.define('app.store.Directory.Phone.GroupCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/phone/groupCombo',
		reader: {
			type: 'json'
		}
	}
});