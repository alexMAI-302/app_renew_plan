Ext.define('app.store.IncidentType.TimeSystemCombo', {
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