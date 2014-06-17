Ext.define('app.view.Directory.Group.GroupGrid', {
    extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.directoryGroupGroupGrid',
	requires: 'app.view.Lib.Grid.column.ComboColumn',
	
	config: {
		store: 'Directory.Group.Group',
		suffix: 'Group',
		title: 'Группы',
		disableSave: false,
		disableRefresh: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		
		columns: [
			{
				dataIndex: 'id',
        hidden: true
			},
      {
				width: 200,
				header: 'Название',
				dataIndex: 'name',
        field: {
					xtype: 'textfield'
				}				
			},
			{
				width: 200,
				header: 'Помещение',
				dataIndex: 'room',
        xtype : 'combocolumn',
        store : 'app.store.Directory.Group.RoomCombo',
        allowNull: true
			}
		]
	}
});