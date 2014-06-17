Ext.define('app.store.IncidentType.TextCond', {
	extend: 'Ext.data.Store',
	model: 'app.model.IncidentType.TextCondModel',
	proxy: {
		type: 'rest',
		url : '/incident_type/text_cond',
		reader: {
			type: 'json'
		}
	}
});