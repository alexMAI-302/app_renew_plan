Ext.define('app.view.IncidentType.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.incidentTypeContainer',
	
	requires: [
		'app.view.IncidentType.IncidentTypeGrid',
		'app.view.IncidentType.TextCondGrid',
		'app.view.IncidentType.TimeCondGrid'
	],
	
	renderTo: 'js_container',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	 layout: {
		type: 'border'
	},
	
	items: [
		{
			xtype: 'incidentTypeIncidentTypeGrid',
			region: 'north',
			split: true,
			height: 163
		},
		{
			xtype: 'incidentTypeTextCondGrid',
			region: 'center',
			flex: 1

		},
		{
			xtype: 'incidentTypeTimeCondGrid',
			region: 'east',
			split: true,
			flex: 1
		}
	]
});