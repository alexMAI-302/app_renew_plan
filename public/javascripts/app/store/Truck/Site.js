Ext.define('app.store.Truck.Site', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_sites',
		reader: {
			type: 'json'
		}
	}
});