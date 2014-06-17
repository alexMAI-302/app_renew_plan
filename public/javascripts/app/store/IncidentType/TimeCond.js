Ext.define('app.store.IncidentType.TimeCond', {
	extend: 'Ext.data.Store',
	model: 'app.model.IncidentType.TimeCondModel',
	proxy: {
		type: 'rest',
		url : '/incident_type/time_cond',
		reader: {
			type: 'json'
		}
	}
});