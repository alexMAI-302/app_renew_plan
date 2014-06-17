Ext.define('app.store.IncidentType.ClassCombo', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/incident_type/class_combo',
		reader: {
			type: 'json'
		}
   }
});