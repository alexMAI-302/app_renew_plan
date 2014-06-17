Ext.define('app.view.Incident.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.IncidentPanel',
	
	requires: [
	  'app.view.Incident.Filter',
		'app.view.Incident.Grid',
		'app.view.Incident.ItemsGrid'
	],
	
	layout: {
		type: 'border'
	},
	
	title: 'Инциденты АСО',
  
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	
	
	items: [
		{
			xtype: 'incidentFilter',
			region: 'north'
		},
		{
			xtype: 'IncidentGrid',
			region: 'center',
			split: true,
			flex: 1
		},
		{
			xtype: 'incidentItemsGrid',
			region: 'south',
			flex: 1
		}
	]
});