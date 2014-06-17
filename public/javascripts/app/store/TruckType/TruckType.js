Ext.define('app.store.TruckType.TruckType', {
	extend: 'Ext.data.Store',
	model: 'app.model.TruckType.TruckTypeModel',
	proxy: {
		type: 'rest',
		url : '/truck_type/truck_types',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}
});
