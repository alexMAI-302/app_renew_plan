Ext.define('app.model.sellPrice.sellPriceModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id'						, type: 'int'},
		{name: 'goods_id'				, type: 'int',		useNull: true},
		{name: 'goods_name'				, type: 'string',					persist: false},
		{name: 'price'					, type: 'float'},
		{name: 'new_price'				, type: 'float'},
		{name: 'partner_id'				, type: 'int',		useNull: true},
	    {name: 'ddateb'					, type: 'date',										dateFormat: 'Y-m-d'},
	    {name: 'ddatee'					, type: 'date',										dateFormat: 'Y-m-d'},
	    {name: 'discount'				, type: 'float',					persist: false},
	    {name: 'reason_id'				, type: 'int',		useNull: true}
    ],
        
    validations: [
    	{type: 'presence', field: 'ddateb', message: "Дата начала должна быть заполнена"},
    	{type: 'presence', field: 'ddatee', message: "Дата конца должна быть заполнена"},
    	{type: 'presence', field: 'goods_id', message: "Товар должен быть заполнен"},
    	{type: 'presence', field: 'reason_id', message: "Причина скидки должна быть заполнена"}
    ],
    
    setUpDiscount: function(newPrice) {
    	var me = this;
    	
    	newPrice = typeof newPrice !== 'undefined' ? newPrice : me.get('new_price');
    	me.set('discount', (1 - newPrice / me.get('price')) * 100);
    },
    
    setUpNewPrice: function(discount) {
    	var me = this;

    	discount = typeof discount !== 'undefined' ? discount : me.get('discount');
    	me.set('new_price', me.get('price') * (100 - discount) / 100);
    }
});