Ext.define('app.view.Directory.Group.PhoneGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.directoryGroupPhoneGrid',
	requires: [
		'app.view.Lib.Grid.Panel',
    'app.view.Lib.Grid.column.ComboColumn'
	],

	config: {
		store: 'Directory.Group.Phone',
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
				width: 200,
				header: 'Телефон',
				dataIndex: 'edit_id',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Group.PhoneCombo'   
			},
 			{
				width: 100,
				header: 'Скрыт',
				dataIndex: 'hidden',
        xtype: 'checkcolumn'
			},
      {
				hidden: true,
				dataIndex: 'group'
			},
      {
				hidden: true,
				dataIndex: 'id'
			}
		]
	}
});