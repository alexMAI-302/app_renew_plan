Ext.define('app.store.Truck.BusType', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_bustype',
		reader: {
			type: 'json'
		}
	}
});
