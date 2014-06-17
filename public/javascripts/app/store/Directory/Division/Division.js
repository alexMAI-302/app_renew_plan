Ext.define('app.store.Directory.Division.Division', {
	extend: 'Ext.data.Store',
	model: 'app.model.Directory.Division.DivisionModel',
	proxy: {
		type: 'rest',
		url : '/directory/division/division',
		reader: {
			type: 'json'
		}
	}
});