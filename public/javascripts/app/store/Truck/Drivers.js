Ext.define('app.store.Truck.Drivers', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_drivers',
		reader: {
			type: 'json'
		}
	}
});