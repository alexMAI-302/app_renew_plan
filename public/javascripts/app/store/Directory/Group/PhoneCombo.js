Ext.define('app.store.Directory.Group.PhoneCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/group/phoneCombo',
		reader: {
			type: 'json'
		}
	}
});