Ext.define('app.view.TruckType.Container', {
    extend: 'app.view.Lib.Grid.Panel',
	requires: [
		'app.view.Lib.Grid.column.ComboColumn'
	],
	title: 'Типы авто',
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 150,
	
	config:{
		suffix: 'TruckType',
		store: 'TruckType.TruckType',
		disableDelete: true,
		columns : [
			{
				width : 200,
				header : 'Название',
				dataIndex : 'name',
				field: {
					xtype: 'textfield'
				}
			},
			
			
			{
				width: 200,
				xtype: 'numbercolumn',
				header: 'Грузоподъемность',
				dataIndex: 'weight',
				format: '0.0#',
				field: {
     					xtype: 'numberfield',
						minValue: 0,
						decimalPrecision : 2,
						decimalSeparator : ','

				}

			},
			{
				width: 200,
				xtype: 'numbercolumn',
				header: 'Длина',
				dataIndex: 'length',
				format: '0.0#',
				field: {
     					xtype: 'numberfield',
						minValue: 0,
						decimalPrecision : 2,
						decimalSeparator : ','

				}

			},
			{
				width: 200,
				xtype: 'numbercolumn',
				header: 'Ширина',
				dataIndex: 'width',
				format: '0.0#',
				field: {
     					xtype: 'numberfield',
						minValue: 0,
						decimalPrecision : 2,
						decimalSeparator : ','

				}

			},
			{
				width: 200,
				xtype: 'numbercolumn',
				header: 'Высота',
				dataIndex: 'height',
				format: '0.0#',
				field: {
     					xtype: 'numberfield',
						minValue: 0,
						decimalPrecision : 2,
						decimalSeparator : ','

				}

			},
			{
				width : 100,
				header : 'Тип авто',
				dataIndex : 'body_type',
				xtype: 'combocolumn',
				store: 'app.store.TruckType.BodyTypes'
			

			}


	]
	}
});
