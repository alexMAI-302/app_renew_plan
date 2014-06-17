Ext.define('app.store.Incident.StatusCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/incident/status_combo',
		reader: {
			type: 'json'
		}
	}
});