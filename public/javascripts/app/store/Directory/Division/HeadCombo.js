Ext.define('app.store.Directory.Division.HeadCombo', {
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