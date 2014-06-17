Ext.define('app.view.GoogleLikes.Container', {
    extend: 'Ext.panel.Panel',
	
	requires: [
		'app.view.GoogleLikes.Filter',
		'app.view.GoogleLikes.Grid'
	],
	
	layout: {
		type: 'border'
	},
	
	renderTo: 'js_container',
	
	height: 600,
	
	items: [
		{
			xtype: 'googleLikesFilter',
			region: 'north'
		},
		{
			xtype: 'googleLikesGrid',
			region: 'center'
		}
	]
});