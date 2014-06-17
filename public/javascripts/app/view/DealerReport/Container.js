Ext.define('app.view.DealerReport.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.dealerReportContainer',
	requires: [
		'app.view.Lib.Grid.Panel'
	],
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	 layout: {
		type: 'border'
	},


	items: [
		{
			xtype: 'dealerReportGrid',
			region: 'center',
			split: true,
			flex: 1
		}
	]
});