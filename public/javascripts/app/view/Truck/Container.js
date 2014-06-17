Ext.define('app.view.Truck.Container', {
        extend: 'Ext.panel.Panel',
	 alias: 'widget.truckPanel',

	requires: [
		'app.view.Truck.Grid',
		'app.view.Truck.TruckBattery',
		'app.view.Truck.TruckBus',
		'app.view.Truck.TruckTO'
		
	],
	
	layout: {
		type: 'border'
	},
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 150,
	
	items: [
		{
			xtype: 'truckgrid',
			region: 'center',
			split: true,
			flex: 1
		},
		{
			
	        region: 'south',
	        xtype: 'panel',
			flex: 1,
			split:true,             // установка возможности изменения размеров области.
			layout: 'accordion',

	        items: 
			[
			
			{
				xtype: 'truckbattery'
				
			},
			{
				xtype: 'truckbus'
				
			},
			{
				xtype: 'truckto'
				
			}
			
			
			]
	      }
		]
});