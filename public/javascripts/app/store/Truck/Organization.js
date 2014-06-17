Ext.define('app.store.Truck.Organization', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_organization',
		reader: {
			type: 'json'
		}
	}
});