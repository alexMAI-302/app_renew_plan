Ext.define('app.view.sellPrice.Container', {
    extend: 'app.view.Lib.Grid.Panel',

	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	
	requires : ['app.view.Lib.Grid.column.ComboColumn'],
	
	
	config: {
		suffix: 'SellPrice',

		beforeButtons: [
			{
				id: 'startDate',
				xtype: 'datefield',
				name: 'startDate',
				fieldLabel: 'Начало периода',
				format: 'd.m.Y',
				altFormat: 'd/m/Y|d m Y',
				startDay: 1,
				value: Ext.Date.add(new Date(Ext.Date.now()), Ext.Date.DAY, -3)
			},{
				id: 'endDate',
				xtype: 'datefield',
				name: 'endDate',
				fieldLabel: 'Конец периода',
				format: 'd.m.Y',
				altFormat: 'd/m/Y|d m Y',
				startDay: 1,
				value: new Date(Ext.Date.now())
			},{
				id: 'partnerFilter',
				xtype: 'combobox',
				fieldLabel: 'Партнер',
				store: 'sellPrice.Partner',
				displayField: 'name',
				valueField: 'id',
				allowBlank: false,
				labelWidth: 50,
				width: 450,
				triggerAction: 'query',
			}
		],
		afterButtons: [
			{
				xtype: 'button',
				id: 'cloneSellPrice',
				icon: '/images/clone_1.png',
				tooltip: 'Клонировать'
			}
		],
		columns: [
			{
				header: 'Идентификатор',
				dataIndex: 'id',
				hidden: true,
				disabled: true
			}, 	{
				header: 'Дата начала',
				dataIndex: 'ddateb',
				xtype: 'datecolumn',
				width: 100,
				editor: {
					xtype: 'datefield',
					format: 'd.m.Y',
					altFormats: 'd/m/Y|d m Y|Y-m-d',
					startDay: 1
				},
				format: 'd.m.Y'
			}, 	{
				header: 'Дата конца',
				dataIndex: 'ddatee',
				xtype: 'datecolumn',
				width: 100,
				editor: {
					xtype: 'datefield',
					format: 'd.m.Y',
					altFormats: 'd/m/Y|d m Y|Y-m-d',
					startDay: 1
				},
				format: 'd.m.Y'
			}, {
				width: 400,
				header: 'Товар',
				dataIndex: 'goods_id',
				id: 'column_goods_id',
				xtype: 'combocolumn',
				store: 'app.store.sellPrice.Goods',
				displayField: 'goods_name',
				valueField: 'goods_id',
				allowBlank: false,
				
				renderer: function(value, metaData, record) {
					var matching=null;
					
					if(value!=null){
						this.store.each(function(storeRecord){
							if(storeRecord.get('goods_id') == value){
								matching=storeRecord.get('goods_name');
							}
							return matching==null;
						});
					}
					return (matching) ? matching : record.get('goods_name');
				},
				queryMode: 'remote',
				triggerAction: 'query',
				fieldListeners: false,  //без этого не работает поиск в середине строки (стор заполняется корректно, но при раскрытии фильтруется)
			}, {
				header: 'Скидка, %',
				dataIndex: 'discount',
				id: 'column_discount',
				xtype: 'numbercolumn',
				width: 65,
				editor: {
					xtype: 'numberfield',
					minValue: 0,
					maxValue: 99
				}
			}, {
				header: 'Цена до скидки',
				dataIndex: 'price',
				disabled: true,
				xtype: 'numbercolumn',
				format:'0,000.0000'
			}, {
				header: 'Цена после скидки',
				dataIndex: 'new_price',
				id: 'col_new_price',
				xtype: 'numbercolumn',
				width: 110,
				editor: {
					xtype: 'numberfield',
					decimalPrecision: 4
				},
				format:'0,000.0000'
			}, {
				width : 150,
				header: 'Причина скидки',
				dataIndex: 'reason_id',
				id: 'col_reason_id',
				xtype : 'combocolumn',
				store : 'app.store.sellPrice.DiscountReasons'
			}
		]
	}
});