Ext.define('app.store.Truck.Securers', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_securers',
		reader: {
			type: 'json'
		}
	}
});