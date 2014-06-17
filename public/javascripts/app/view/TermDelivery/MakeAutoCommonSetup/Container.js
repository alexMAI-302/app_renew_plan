Ext.define('app.view.TermDelivery.MakeAutoCommonSetup.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.commonTab',
	
	requires: [
		'app.view.TermDelivery.MakeAutoCommonSetup.Filter',
		'app.view.TermDelivery.MakeAutoCommonSetup.Grid'
	],
	
	layout: {
		type: 'border'
	},
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	
	items: [
		{
			xtype: 'terminalsFilter',
			region: 'north'
		},
		{
			xtype: 'terminalsGrid',
			region: 'center'
		}
	]
});