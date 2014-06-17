Ext.define('app.store.Truck.PayReceiver', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'rest',
		url : '/truck/get_pay_receivers',
		reader: {
			type: 'json'
		}
	}
});