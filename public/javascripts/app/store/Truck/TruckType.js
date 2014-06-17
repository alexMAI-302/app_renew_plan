Ext.define('app.store.Truck.TruckType', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_trucktype',
		reader: {
			type: 'json'
		}
	}
});