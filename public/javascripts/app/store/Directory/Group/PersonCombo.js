Ext.define('app.store.Directory.Group.PersonCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/group/personCombo',
		reader: {
			type: 'json'
		}
	}
});