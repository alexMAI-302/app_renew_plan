Ext.define('app.view.TermDelivery.MakeAutoIncSetup.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.incTab',
	
	requires: [
		'app.view.TermDelivery.MakeAutoIncSetup.GridNormes',
		'app.view.TermDelivery.MakeAutoIncSetup.GridWorkdays'
	],
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	
	items: [
		{
			xtype: 'normesGrid'
		},
		{
			xtype: 'workdaysGrid'
		}
	]
});