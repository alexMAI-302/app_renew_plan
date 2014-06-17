Ext.define('app.view.ContentEditor.Container', {
    extend: 'Ext.container.Container',
	alias: 'widget.contentEditorPanel',
	
	renderTo: 'js_container',
	width: '100%',
	items: [
		{
			layout: {
				type: 'hbox'
			},
			defaults: {
				style: {
					margin: '5px'
				}
			},
			items: [
				{
					xtype: 'combobox',
					id: 'urlContentEditor',
					fieldLabel: 'Страница',
					valueField: 'id',
					displayField: 'name',
					queryMode: 'local',
					labelWidth: 70,
					width: 500,
					store: 'ContentEditor.Urls'
				},
				{
					id: 'filterContentEditor',
					xtype: 'button',
					text: 'Фильтр'
				},
				{
					id: 'saveContentEditor',
					xtype: 'button',
					icon : '/images/save.png'
				}
			]
		},
		{
			xtype: 'htmleditor',
			id: 'editorFieldContentEditor',
			width: '100%',
			resizable: true,
			resizeHandles: 's',
			pinned: true,
			enableLists: false
		}
	]
});