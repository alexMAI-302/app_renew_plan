Ext.define('app.store.Truck.TruckBus', {
	extend: 'Ext.data.Store',
	model: 'app.model.Truck.TruckBusModel',
	proxy: {
		type: 'rest',
		url : '/truck/truck_bus',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});
