Ext.define('app.view.Directory.PersonRoom.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.directoryPersonRoomContainer',
	
	requires: [
		'app.view.Directory.PersonRoom.PersonRoomGrid'
	],
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	 layout: {
		type: 'border'
	},
	
	items: [
		{
			xtype: 'directoryPersonRoomPersonRoomGrid',
			region: 'center'
		}
	]
});