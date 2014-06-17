Ext.define('app.view.Directory.Group.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.directoryGroupContainer',
	
	requires: [
		'app.view.Directory.Group.GroupGrid',
		'app.view.Directory.Group.GroupPersonGrid',
		'app.view.Directory.Group.PhoneGrid'
	],
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	 layout: {
		type: 'border'
	},
	
	items: [
		{
			xtype: 'directoryGroupGroupGrid',
			region: 'north',
			split: true,
			height: 163
		},
		{
			xtype: 'directoryGroupPersonGrid',
			region: 'center',
			flex: 1

		},
		{
			xtype: 'directoryGroupPhoneGrid',
			region: 'east',
			split: true,
			flex: 1
		}
	]
});