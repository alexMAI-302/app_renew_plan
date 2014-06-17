Ext.define('app.store.Incident.FilterClassCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/incident/class_combo',
		reader: {
			type: 'json'
		}
	}
});