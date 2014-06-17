Ext.define('app.view.Directory.Phone.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.directoryPhoneContainer',
	
	requires: [
		'app.view.Directory.Phone.PhoneGrid'
	],
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	 layout: {
		type: 'border'
	},
	
	items: [
		{
			xtype: 'directoryPhonePhoneGrid',
			region: 'center'
		}
	]
});