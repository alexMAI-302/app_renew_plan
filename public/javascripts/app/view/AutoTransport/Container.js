Ext.define('app.view.AutoTransport.Container', {
    extend: 'Ext.tab.Panel',

    layout: {
		type: 'fit'
	},
	
	height: Ext.getBody().getViewSize().height - 120,
	id: 'AutoTransportMain',
	renderTo: 'js_container',
	
	items: [
    ]
});