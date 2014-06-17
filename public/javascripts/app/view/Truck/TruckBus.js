Ext.define('app.view.Truck.TruckBus', {
    extend: 'app.view.Lib.Grid.Panel',
	requires: [
		'app.view.Lib.Grid.column.ComboColumn'
	],
	title: 'Шины автомобилей',
	
	alias: 'widget.truckbus',
	height: Ext.getBody().getViewSize().height - 150,
	
	config:{
		suffix: 'TruckBus',
		store: 'Truck.TruckBus',
		disableDeleteColumn: true,
		disableSave: true,
		disableRefresh: true,

		columns : [
			
			{
				width : 100,
				header : 'Тип',
				dataIndex : 'bus_type',
				xtype: 'combocolumn',
				store: 'app.store.Truck.BusType'
			},
			
			
			{
				width: 60,
				xtype: 'numbercolumn',
				header: 'Размер',
				dataIndex: 'size',
				format: '0',
				field: {
					xtype: 'numberfield',
					allowDecimal: false
				}
			},
			{
				align: 'center',
				xtype: 'datecolumn',
				width: 200,
				header: 'Дата установки',
				dataIndex: 'ddate',
				name: 'ddate',
				format: 'd.m.Y',
				field: {
					xtype: 'datefield'
				}
			}
	]
	}
});
