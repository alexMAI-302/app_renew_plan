Ext.define('app.store.Truck.TruckTO', {
	extend: 'Ext.data.Store',
	model: 'app.model.Truck.TruckTOModel',
	proxy: {
		type: 'rest',
		url : '/truck/truck_to',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});
