Ext.define('app.view.Directory.Division.Container', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.directory.division',
	
	requires: [
		'app.view.Directory.Division.Tree',
		'app.view.Directory.Division.ItemsGrid',
    'app.view.Directory.Division.PersonGrid'
	],
	
	title: 'Орг. структура',
	renderTo: 'js_container',
	width: '100%',
	height: Ext.getBody().getViewSize().height - 120,
	resizable: true,
	
	layout: {
		type: 'border'
	},

	items: [
		{
			xtype: 'divisionTree',
			width: 400,
			region: 'west',
			split: true,
		},
		{
    	items:[
      {
        xtype: 'directory.division.itemGrid',
        region: 'north',
        height: (Ext.getBody().getViewSize().height)/2 - 120,
       },
       {
        xtype: 'directory.division.personGrid',
        region: 'south'
       }
       ],
       region: 'center'
		}
	]
});