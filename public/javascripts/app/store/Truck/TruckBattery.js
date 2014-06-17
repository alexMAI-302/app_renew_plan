Ext.define('app.store.Truck.TruckBattery', {
	extend: 'Ext.data.Store',
	model: 'app.model.Truck.TruckBatteryModel',
	proxy: {
		type: 'rest',
		url : '/truck/truck_battery',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});
