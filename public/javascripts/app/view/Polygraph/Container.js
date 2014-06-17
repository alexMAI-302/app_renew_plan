Ext.define('app.view.Polygraph.Container', {
    extend: 'Ext.tab.Panel',

    layout: {
		type: 'fit'
	},
	
	height: Ext.getBody().getViewSize().height - 130,
	id: 'PolygraphMain',
	renderTo: 'js_container',
	
	items:[]
});