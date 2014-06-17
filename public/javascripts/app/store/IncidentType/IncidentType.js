Ext.define('app.store.IncidentType.IncidentType', {
	extend: 'Ext.data.Store',
	model: 'app.model.IncidentType.IncidentTypeModel',
	proxy: {
		type: 'rest',
		url : '/incident_type/incident_type',
		reader: {
			type: 'json'
		}
	}
});