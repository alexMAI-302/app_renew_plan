Ext.define('app.view.Directory.PersonRoom.PersonRoomGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.directoryPersonRoomPersonRoomGrid',
	requires: [
		'app.view.Lib.Grid.Panel',
    'app.view.Lib.Grid.column.ComboColumn'
	],

	config: {
		store: 'Directory.PersonRoom.PersonRoom',
		suffix: 'PersonRoom',
		title: 'Помещения сотрудников',
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		columns: [
      {
				width: 200,
				header: 'Сотрудник',
				dataIndex: 'person',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Shared.PersonCombo',
        allowNull: true
			},
      {
				width: 200,
				header: 'Помещение',
				dataIndex: 'room',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Shared.RoomCombo',
        allowNull: true
			},
			{
				xtype: 'datecolumn',
				width: 85,
				header: 'Начало',
				dataIndex: 'ddateb',
				name: 'ddateb',
				format: 'd.m.Y',
				field: {
					xtype: 'datefield'
				}
			},
			{
				xtype: 'datecolumn',
				width: 85,
				header: 'Конец',
				dataIndex: 'ddatee',
				name: 'ddatee',
				format: 'd.m.Y',
				field: {
					xtype: 'datefield'
				}
			}
		]
	}
});