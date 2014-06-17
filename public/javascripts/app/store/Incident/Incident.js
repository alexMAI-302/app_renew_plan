Ext.define('app.store.Incident.Incident', {
	extend: 'Ext.data.Store',
	model: 'app.model.Incident.IncidentModel',
	proxy: {
		type: 'rest',
		url : '/incident/incident',
		reader: {
			type: 'json'
		}
	}
});