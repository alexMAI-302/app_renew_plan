Ext.define('app.view.Directory.Photo.Container', {
	extend: 'Ext.panel.Panel',
  requires : [
	'app.view.Directory.Photo.Filter'
	],
	title : 'Фотографии сотрудников',
	id: 'DirectoryPhotoPanel',
	renderTo : 'js_container',
	height : Ext.getBody().getViewSize().height - 150,

	tbar: [
			{
				xtype: 'directoryPhotoFilter'
			},
      {
        id : 'refreshPhoto',
        icon : '/ext/resources/themes/images/default/grid/refresh.gif',
        tooltip: 'Обновить фото'
      },
      {
        id : 'savePhoto',
        icon : '/images/save.png',
        tooltip: 'Сохранить фото'
      },
      {
        id : 'addPhoto',
        icon : '/ext/examples/shared/icons/fam/add.gif',
        disabled : true,
        tooltip: 'Добавить фото'
      },
      {
        id : 'deletePhoto',
        icon : '/ext/examples/shared/icons/fam/delete.gif',
        disabled : true,
        tooltip: 'Удалить фото'
      }
	
		],

		items : [
      {
        id: 'PersonPhoto',
        xtype: 'dataview',
        store: 'Directory.Photo.Photo',
        emptyText: 'Нет изображений',
        itemSelector: 'div.picture',
        multiSelect: true,
        autoScroll: true,
        overItemCls: 'picture-hover',
        plugins: [
          Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'name'})
        ],
        tpl : Ext.create(
          'Ext.XTemplate',
          '<tpl for=".">',
          '<div class="picture">',
          (!Ext.isIE6 ?
            '<img width="{small_width}" height="{small_height}" src="/directory/photo/get_photo_small/{id},{[this.getRandomValue()]}" />' :
            '<div style="width:{small_width}px;height:{small_height}px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'\',sizingMethod=\'scale\')"></div>'),
          '</div>',
          '</tpl>',
		  {getRandomValue: function(){return Math.random();}}
		  ),
        listeners: {
          itemdblclick: function(view, record, item, index, e, eOpts){
            window.open("/directory/photo/get_photo_full/" + record.get('id'), '_blank');
          }
        }
      }
    ]
	});
