Ext.define('app.store.Directory.Division.DivisionCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/directory/division/divisionCombo',
		reader: {
			type: 'json'
		}
	}
});