Ext.define('app.view.Directory.Search.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.directorySearchPanel',
	
	requires: [
    'app.view.Directory.Search.Profile',
		'app.view.Directory.Search.Filter',
		'app.view.Directory.Search.Grid'
	],
	
	layout: {
		type: 'anchor'
	},
	border: false,
	defaults: {
		border: false
	},
	renderTo: 'js_container',
	
	items: [
		{
			items:[
				{
					xtype: 'directorySearchProfile'
				},
        {
					xtype: 'directorySearchFilter'
				}
			],
			region: 'north'
		},
		{
			margin: '5, 0, 0, 0',
			xtype: 'directorySearchGrid',
			region: 'center',
			hidden: true
		}
	]
});