//фильтр
Ext.define('app.view.Directory.Search.Filter', {
	extend: 'Ext.form.Panel',
	alias: 'widget.directorySearchFilter',
    
	defaults: {
		border: false,
		style: {
			margin: '5px'
		},
		width: 350,
		labelWidth: 200
	},
	
	items: [
		{
			id: 'searchDirectoryField',
			xtype: 'textfield',
			fieldLabel: 'Введите часть ФИО или телефон',
			msgTarget: 'side'
		},
		{
			layout: 'vbox',
			bodyBorder: false,
			defaults: {
				style: {
					margin: '5px'
				}
			},
			items: [
				{
					xtype: 'button',
					id: 'filterSearchDirectory',
					text: 'Поиск'
				},
				{
					id: 'errorDirectory',
					xtype: 'tbtext',
					hidden: true
				}
			]
		}
	],
	
	bbar: [
	]
});