Ext.define('app.store.Truck.BuyersRoute', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_buyers_route',
		reader: {
			type: 'json'
		}
	}
});