Ext.define('app.store.IncidentType.TimeAttribute2Combo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/incident_type/attribute_time_combo',
		reader: {
			type: 'json'
		}
	}
});