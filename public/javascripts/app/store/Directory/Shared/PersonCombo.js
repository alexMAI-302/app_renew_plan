Ext.define('app.store.Directory.Shared.PersonCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/phone/personCombo',
		reader: {
			type: 'json'
		}
	}
});