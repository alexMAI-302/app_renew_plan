Ext.define('app.store.Truck.Truck', {
	extend: 'Ext.data.Store',
	model: 'app.model.Truck.TruckModel',
	proxy: {
		type: 'rest',
		url : '/truck/truck',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});
