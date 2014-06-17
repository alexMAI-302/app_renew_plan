Ext.define('app.store.Incident.TermAttrValue', {
	extend: 'Ext.data.Store',
	model: 'app.model.Incident.TermAttrValueModel',
	proxy: {
		type: 'rest',
		url : '/incident/term_attr_value',
		reader: {
			type: 'json'
		}
	}
});