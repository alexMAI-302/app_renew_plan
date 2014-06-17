Ext.define('app.view.Directory.Group.GroupPersonGrid', {
	extend: 'app.view.Lib.Grid.Panel',
	alias: 'widget.directoryGroupPersonGrid',
  requires: 'app.view.Lib.Grid.column.ComboColumn',
	
	config: {
		suffix: 'GroupPerson',
		disabled: false,
		disableSave: false,
		disableAdd: false,
		disableDelete: true,
		disableDeleteColumn: false,
		disableAddColumn: false,
		autoScroll: true,
		title: 'Cотрудники',
		store: 'Directory.Group.GroupPerson',
		columns:  [
			{
				width: 200,
				header: 'Сотрудник',
				dataIndex: 'person',
        xtype: 'combocolumn',
        store: 'app.store.Directory.Group.PersonCombo',
        allowNull: true        
			},
      {
				hidden: true,
				dataIndex: 'group'        
			}
		]
	}
});