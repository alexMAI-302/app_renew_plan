Ext.define('app.store.TruckType.BodyTypes', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck_type/get_bodytypes',
		reader: {
			type: 'json'
		}
	}
});
