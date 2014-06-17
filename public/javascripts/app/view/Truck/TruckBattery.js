Ext.define('app.view.Truck.TruckBattery', {
    extend: 'app.view.Lib.Grid.Panel',
	requires: [
		'app.view.Lib.Grid.column.ComboColumn'
	],
	title: 'Аккумуляторная батарея',
	

	alias: 'widget.truckbattery',
	height: Ext.getBody().getViewSize().height - 150,
	
	config:{
		suffix: 'TruckBattery',
		store: 'Truck.TruckBattery',
		disableDeleteColumn: true,
		disableSave: true,
		disableRefresh: true,

		columns : [
			{
				width : 400,
				header : 'Название',
				dataIndex : 'name',
				field: {
					xtype: 'textfield'
				}
			},
			{
				align: 'center',
				xtype: 'datecolumn',
				width: 200,
				header: 'дата установки/замены',
				dataIndex: 'ddate',
				name: 'ddate',
				format: 'd.m.Y',
				field: {
					xtype: 'datefield'
				}
			},			
	]
	}
});
