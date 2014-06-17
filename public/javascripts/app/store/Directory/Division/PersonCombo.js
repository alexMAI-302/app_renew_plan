Ext.define('app.store.Directory.Division.PersonCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/division/personCombo',
		reader: {
			type: 'json'
		}
	}
});