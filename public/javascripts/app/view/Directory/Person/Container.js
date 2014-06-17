Ext.define('app.view.Directory.Person.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.directoryPersonPanel',
	
	requires: [
    'app.view.Directory.Person.Person'
	],
	
	layout: {
		type: 'anchor'
	},
	border: false,
	defaults: {
		border: false
	},
	renderTo: 'directory_person_js',
	
	items: [
		{
			items:[
				{
					xtype: 'directoryPersonPerson'
				}
			],
			region: 'north'
		}
	]
});