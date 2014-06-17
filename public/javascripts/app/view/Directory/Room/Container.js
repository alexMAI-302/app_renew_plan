Ext.define('app.view.Directory.Room.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.directoryRoomContainer',
	
	requires: [
		'app.view.Directory.Room.RoomGrid'
	],
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	 layout: {
		type: 'border'
	},
	
	items: [
		{
			xtype: 'directoryRoomRoomGrid',
			region: 'center'
		}
	]
});