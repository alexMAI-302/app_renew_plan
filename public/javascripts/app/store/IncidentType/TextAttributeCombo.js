Ext.define('app.store.IncidentType.TextAttributeCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/incident_type/attribute_text_combo',
		reader: {
			type: 'json'
		}
	}
});