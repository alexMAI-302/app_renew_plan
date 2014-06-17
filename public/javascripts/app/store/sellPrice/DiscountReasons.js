Ext.define('app.store.sellPrice.DiscountReasons', {
	extend: 'Ext.data.Store',
	model: 'app.model.valueModel',

	proxy: {
		type: 'rest',
		url : '/sell_price/get_discount_reasons',
		reader: {
			type: 'json'
		}
	}
});