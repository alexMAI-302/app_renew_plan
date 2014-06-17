Ext.define('app.store.Truck.PaCard', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_pa_card',
		reader: {
			type: 'json'
		}
	}
});