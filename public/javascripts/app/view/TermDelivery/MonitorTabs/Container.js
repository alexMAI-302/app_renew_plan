Ext.define('app.view.TermDelivery.MonitorTabs.Container', {
    extend: 'Ext.tab.Panel',

	items: [],

	layout: {
		type: 'fit'
	},
	
	height: Ext.getBody().getViewSize().height - 120,
	id: 'TermDeliveryMonitorMain',
	renderTo: 'js_container',

});