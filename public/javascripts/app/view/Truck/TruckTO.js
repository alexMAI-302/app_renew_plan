Ext.define('app.view.Truck.TruckTO', {
    extend: 'app.view.Lib.Grid.Panel',
	title: 'График ТО',
	
	alias: 'widget.truckto',
	height: Ext.getBody().getViewSize().height - 150,
	
	config:{
		suffix: 'TruckTO',
		store: 'Truck.TruckTO',
		disableDeleteColumn: true,
		disableSave: true,
		disableRefresh: true,

		columns : [
		
			{
				width : 200,
				header : 'НомерТО',
				dataIndex : 'numbert',
				field: {
					xtype: 'textfield'
				}
			},
			{
				width: 60,
				xtype: 'numbercolumn',
				header: 'Пробег',
				dataIndex: 'run',
				format: '0',
				field: {
					xtype: 'numberfield',
					allowDecimal: false
				}
			},
	]
	}
});
