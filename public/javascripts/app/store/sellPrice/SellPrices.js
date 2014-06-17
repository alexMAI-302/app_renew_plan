Ext.define('app.store.sellPrice.SellPrices', {
	extend: 'Ext.data.Store',
	
	itemId: 'SellPricesStore',
	model: 'app.model.sellPrice.sellPriceModel',
	proxy: {
		type: 'rest',
		url : '/sell_price/sell_prices',
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	},
	
	mixins: {
		hasChangesMixix: "app.store.lib.HasChangesMixin"
	}
});