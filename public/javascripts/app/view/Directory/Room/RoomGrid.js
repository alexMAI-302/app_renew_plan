Ext.define('app.view.Directory.Room.RoomGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.directoryRoomRoomGrid',
	requires: [
		'app.view.Lib.Grid.Panel',
    'app.view.Lib.Grid.column.ComboColumn'
	],

	config: {
		store: 'Directory.Room.Room',
		suffix: 'Room',
		title: 'Помещения',
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		columns: [
      {
				width: 200,
				header: 'Название',
				dataIndex: 'name',
         field: {
					xtype: 'textfield'
				}   
			},     
      {
				width: 150,
				header: 'Площадка',
				dataIndex: 'site',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Shared.SiteCombo',
        allowNull: true
			},
      {
				width: 100,
				header: 'Площадь',
				dataIndex: 'area',
         field: {
					xtype: 'numberfield',
					decimalSeparator : ',',
					minValue: 0,
				}   
			},
      {
				width: 100,
				header: 'Ставка аренды',
				dataIndex: 'rental_rate',
         field: {
					xtype: 'numberfield',
					decimalSeparator: ',',
					minValue: 0,
				}   
			},
      {
				width: 200,
				header: 'Ответственный',
				dataIndex: 'responsible',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Shared.PersonCombo',
        allowNull: true
			}
		]
	}
});