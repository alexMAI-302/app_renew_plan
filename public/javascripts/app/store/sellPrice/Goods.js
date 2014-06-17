Ext.define('app.store.sellPrice.Goods', {
	extend: 'Ext.data.Store',
	
	model: 'app.model.sellPrice.goodsPriceModel',
	proxy: {
		type: 'ajax',
		url : '/sell_price/get_goods_prices',
		reader: {
			type: 'json'
		}
	}
});