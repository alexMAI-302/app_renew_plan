Ext.define('app.view.Directory.Phone.PhoneGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.directoryPhonePhoneGrid',
	requires: [
		'app.view.Lib.Grid.Panel',
    'app.view.Lib.Grid.column.ComboColumn'
	],

	config: {
		store: 'Directory.Phone.Phone',
		suffix: 'Phone',
		title: 'Телефоны',
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		columns: [
      {
				dataIndex: 'number',
        hidden: true
			},
      {
				width: 200,
				header: 'Номер',
				dataIndex: 'number',
         field: {
					xtype: 'textfield'
				}   
			},
      {
				width: 200,
				header: 'Сотрудник',
				dataIndex: 'person',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Phone.PersonCombo',
        allowNull: true
			},
      {
				width: 200,
				header: 'Группа',
				dataIndex: 'group',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Phone.GroupCombo',
        allowNull: true
			},
      {
				width: 100,
				header: 'Скрыт',
				dataIndex: 'hidden',
        xtype: 'checkcolumn'
			}
		]
	}
});