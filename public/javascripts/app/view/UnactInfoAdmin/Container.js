Ext.define('app.view.UnactInfoAdmin.Container', {
    extend: 'app.view.Lib.Grid.Panel',
	
	renderTo: 'js_container',
	
	config: {
		xtype: 'simpleGrid',
		store: 'UnactInfoAdmin.Actions',
		title: 'Информационные материалы',
		suffix: 'Actions',
		disableDelete: true,
		height: Ext.getBody().getViewSize().height - 120,
		columns: [
			{
				header: 'Описание',
				dataIndex: 'name',
				field: {
					xtype: 'textfield'
				},
				width: 300
			},
			{
				header: 'Имя файла',
				dataIndex: 'path',
				field: {
					xtype: 'textfield'
				},
				width: 300
			},
			{
				header: 'Размер, Байт',
				dataIndex: 'size'
			},
			{
				id: 'viewFile',
				xtype:'actioncolumn',
				width:40,
				icon: '/images/view.png',
				handler: function(grid, rowIndex, colIndex){
					var r = grid.store.getAt(rowIndex),
						name=r.get("name"),
						path=r.get("path");
					window.open("/unact_info/pdf/"+path, name, "target: '_blank'");
					return true;
				}
			},
			{
				xtype:'actioncolumn',
				width:40,
				icon: '/images/upload.png'
			}
		]
	}
});