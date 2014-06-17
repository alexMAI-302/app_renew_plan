Ext.define('app.store.IncidentType.TextSystemCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/incident_type/system_combo',
		reader: {
			type: 'json'
		}
	}
});