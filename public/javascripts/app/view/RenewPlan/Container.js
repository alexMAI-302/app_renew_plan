Ext.define('app.view.RenewPlan.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.renewPanel',
	
	requires: [
		'app.view.RenewPlan.Grid',
		'app.view.RenewPlan.ItemsGrid',
		'app.view.RenewPlan.Action',
		'app.view.RenewPlan.GroupInfo'
	],
	
	renderTo: 'js_container',
	width: '100%',
	height: Ext.getBody().getViewSize().height - 120,
	
	layout: {
		type: 'border'
	},
	
	items: [
		{
			xtype: 'renewPlanPanel',
			
			region: 'center',
			flex: 1
		},
		{
			xtype: 'renewPlanAction',
			collapsible: true,
			region: 'east'
		},
		{
			region: 'south',
			split: true,
			flex: 1,
			layout: {
				type: 'border'
			},
			items: [
				{
					region: 'center',
					xtype: 'renewPlanGoodsPanel'
				},
				{
					region: 'south',
					xtype: 'renewPlanGroupInfo'
				}
			]
		}
	]
});