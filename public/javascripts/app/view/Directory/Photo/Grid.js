Ext.define('app.view.Directory.Photo.Grid', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.directoryPhotoGrid',
	
	title: 'Картинки',
	//disabled: true,
	id: 'PersonPhotoPanel',
	tbar: [
		{
			id : 'refreshPicture',
			icon : '/ext/resources/themes/images/default/grid/refresh.gif',
			tooltip: 'Обновить'
		},
		{
			id : 'savePicture',
			icon : '/images/save.png',
			tooltip: 'Сохранить'
		},
		{
			id : 'addPicture',
			icon : '/ext/examples/shared/icons/fam/add.gif',
			tooltip: 'Добавить'
		},
		{
			id : 'deletePicture',
			icon : '/ext/examples/shared/icons/fam/delete.gif',
			disabled : true,
			tooltip: 'Удалить'
		}
	],
	autoScroll: true,
	items: [
		{
			id: 'PersonPhoto',
			xtype: 'dataview',
			store: 'Directory.Photo.Photo',
			emptyText: 'Нет изображений',
			itemSelector: 'div.picture',
			multiSelect: true,
			autoScroll: true,
      width: 320,
      height: 320,
			overItemCls: 'picture-hover',
			plugins: [
				Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'name'})
			],
			tpl : Ext.create(
				'Ext.XTemplate',
				'<tpl for=".">',
				'<div class="picture">',
				(!Ext.isIE6 ?
					'<img width="{small_width}" height="{small_height}" src="/directory/photo/get_photo_small/{id}" />' :
					'<div style="width:{small_width}px;height:{small_height}px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'\',sizingMethod=\'scale\')"></div>'),
				'<span class="x-editable">{name}</span>',
				'</div>',
				'</tpl>'),
			listeners: {
				itemdblclick: function(view, record, item, index, e, eOpts){
					window.open("/directory/photo/get_photo_full/" + record.get('id'), '_blank');
				}
			}
		}
	]
}); 