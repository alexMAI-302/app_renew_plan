Ext.define('app.store.sellPrice.Partner', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',
	proxy: {
		type: 'ajax',
		url : '/sell_price/get_partners',
		reader: {
			type: 'json'
		}
	}
});