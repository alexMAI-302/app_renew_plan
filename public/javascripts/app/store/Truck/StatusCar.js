Ext.define('app.store.Truck.StatusCar', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_status_cars',
		reader: {
			type: 'json'
		}
	}
});