Ext.define('app.view.empSchedule.container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.empSchedulePanel',
	
	requires: [
		'app.view.empSchedule.grid'
	],
	
	renderTo: 'js_container',
	width: '100%',
	height: Ext.getBody().getViewSize().height - 120,
	
	
	items: [
		{
			xtype: 'empScheduleGrid'
		}
	]
});